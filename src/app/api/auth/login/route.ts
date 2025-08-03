import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    const csvPath = path.join(process.cwd(), "data", "users.csv");
    const csvData = await readFile(csvPath, "utf8");

    // Split file into lines and remove empty lines
    const lines = csvData
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);
    // Remove header line (assumes first line is header)
    lines.shift();

    let authenticated = false;
    for (const line of lines) {
      const [csvUsername, csvPassword] = line.split(",");
      if (csvUsername === username && csvPassword === password) {
        authenticated = true;
        break;
      }
    }

    if (authenticated) {
      return NextResponse.json({ success: true, message: "Login successful" });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error processing login:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
