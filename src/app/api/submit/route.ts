import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile as writeFilePromise } from "fs/promises";

const UPLOADS_DIR = path.join(process.cwd(), "public/uploads");
const LOG_FILE_PATH = path.join(UPLOADS_DIR, "uploads_log.csv");

export async function GET() {
  try {
    console.log(`📂 Checking uploads directory at: ${UPLOADS_DIR}`);

    if (!fs.existsSync(UPLOADS_DIR)) {
      return NextResponse.json({ message: "No uploads found." });
    }

    const productDirs = fs.readdirSync(UPLOADS_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    if (productDirs.length === 0) {
      return NextResponse.json([]);
    }

    const uploadData = productDirs.map(productName => {
      const productPath = path.join(UPLOADS_DIR, productName);
      const files = fs.readdirSync(productPath);
      const fileUrls = files.map(file => `/uploads/${productName}/${file}`);
      return { productName, uploadedFiles: fileUrls.join("; ") };
    });

    return NextResponse.json(uploadData);
  } catch (error) {
    console.error("❌ Error fetching uploaded files:", error);
    return NextResponse.json({ error: "Could not fetch uploaded files." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  console.log("📥 Upload request received...");

  try {
    const formData = await req.formData();
    const rawAmbassador = (formData.get("loggedInAmbassador") as string) || "UnknownAmbassador";
    const rawProductName = formData.get("productName") as string;
    const mediaOrder = JSON.parse(formData.get("mediaOrder") as string) as number[];
    const rawCaption = (formData.get("caption") as string) || "";
    const mediaFiles = formData.getAll("mediaFiles") as File[];

    if (!rawProductName || mediaFiles.length === 0 || mediaOrder.length === 0) {
      return NextResponse.json({ error: "Product name and at least one media file are required." }, { status: 400 });
    }

    const ambassador = rawAmbassador.toLowerCase().replace(/\s+/g, "-");
    const productName = rawProductName.toLowerCase().replace(/\s+/g, "-");
    const caption = rawCaption.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "")
      .substring(0, 30);

    const uploadDir = path.join(UPLOADS_DIR, productName);
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    let fileIndex = 0;
    const savedFiles: string[] = [];

    const now = new Date();
    const formattedDateTime = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getFullYear()).slice(-2)}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;

    const baseFilename = [
      ambassador,
      productName,
      caption || null,
      formattedDateTime
    ]
      .filter(Boolean)
      .join("-");

    const saveMedia = async (media: File, filename: string) => {
      const filePath = path.join(uploadDir, filename);
      const buffer = new Uint8Array(await media.arrayBuffer());
      await writeFilePromise(filePath, buffer);
      savedFiles.push(`/uploads/${productName}/${filename}`);
    };

    for (const media of mediaOrder.map((i) => mediaFiles[i]).filter(Boolean)) {
      const ext = path.extname(media.name).toLowerCase();
      const filename = `${baseFilename}-${fileIndex}${ext}`;
      await saveMedia(media, filename);
      fileIndex++;
    }

    for (const media of mediaFiles.filter((_, i) => !mediaOrder.includes(i))) {
      const ext = path.extname(media.name).toLowerCase();
      const filename = `${baseFilename}-${fileIndex}${ext}`;
      await saveMedia(media, filename);
      fileIndex++;
    }

    if (fs.existsSync(LOG_FILE_PATH)) {
      const timestamp = new Date().toISOString();
      const logEntry = `${timestamp},${rawAmbassador},${rawProductName},${fileIndex},"${savedFiles.join("; ")}","${rawCaption.replace(/"/g, '""')}"\n`;
      fs.appendFileSync(LOG_FILE_PATH, logEntry, "utf8");
    }

    return NextResponse.json({
      message: "Files uploaded successfully",
      loggedInAmbassador: rawAmbassador,
      productName: rawProductName,
      totalMediaSaved: fileIndex,
    });
  } catch (error) {
    console.error("❌ Upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
