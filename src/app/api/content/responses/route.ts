import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const UPLOADS_DIR = path.resolve(process.cwd(), "public/uploads");
const LOG_FILE_PATH = path.resolve(UPLOADS_DIR, "uploads_log.csv");

export async function GET() {
  try {
    console.log(`📂 Checking uploads directory at: ${UPLOADS_DIR}`);

    if (!fs.existsSync(UPLOADS_DIR)) {
      console.log("🚨 Uploads directory does not exist. Creating...");
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    // Get all lot directories
    const lotDirs = fs.readdirSync(UPLOADS_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    if (lotDirs.length === 0) {
      console.log("ℹ️ No lot folders found.");
      return NextResponse.json({ message: "No uploads found." });
    }

    const uploadData = lotDirs.map(lotNumber => {
      const lotPath = path.join(UPLOADS_DIR, lotNumber);
      const files = fs.readdirSync(lotPath);

      return {
        lotNumber,
        uploadedFiles: files.join("; "), // Store as semicolon-separated values
      };
    });

    // Convert data to CSV format
    const csvHeaders = "Lot Number,Uploaded Files\n";
    const csvContent = uploadData.map(({ lotNumber, uploadedFiles }) =>
      `${lotNumber},"${uploadedFiles}"`
    ).join("\n");

    // Ensure the file exists and create it if needed
    if (!fs.existsSync(LOG_FILE_PATH)) {
      console.log("📝 Creating uploads log CSV...");
      fs.writeFileSync(LOG_FILE_PATH, csvHeaders, "utf8");
    }

    // Write or update CSV file
    fs.writeFileSync(LOG_FILE_PATH, csvHeaders + csvContent, "utf8");

    console.log("✅ Uploads log updated at:", LOG_FILE_PATH);

    return NextResponse.json(uploadData);
  } catch (error) {
    console.error("❌ Error logging uploaded files:", error);
    return NextResponse.json({ error: "Could not log uploaded files." }, { status: 500 });
  }
}
