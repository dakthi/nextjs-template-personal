import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const gifsDirectory = path.join(process.cwd(), "public/gifs");
    const files = await readdir(gifsDirectory);

    // Filter only .gif files
    const gifFiles = files.filter((file) => file.endsWith(".gif"));

    if (gifFiles.length === 0) {
      return NextResponse.json({ gifs: [], error: "No GIFs found" });
    }

    // 🎯 Define specific weights for some GIFs
    const weights: Record<string, number> = {
      "ricky.gif": 5, // Appears 5x more often
      "jellycat2.gif": 3,  // Appears 3x more often
      "penguins-1.gif": 2 // Appears 2x more often
    };

    // 🎯 Generate a weighted GIF list, assigning a default weight of 1 for unspecified GIFs
    let weightedGifs: string[] = [];

    for (const gif of gifFiles) {
      const weight = weights[gif] || 1; // Default weight is 1 if not specified
      weightedGifs = weightedGifs.concat(Array(weight).fill(gif));
    }

    // 🎲 Shuffle the list to introduce randomness
    weightedGifs.sort(() => Math.random() - 0.5);

    return NextResponse.json({ gifs: weightedGifs });
  } catch (error) {
    console.error("Error reading GIF folder:", error);
    return NextResponse.json(
      { gifs: [], error: "Failed to read GIFs" },
      { status: 500 }
    );
  }
}
