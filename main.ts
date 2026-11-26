// The World in One Day — entry for news-image-20261125.
//
// This program writes the day's newspaper image to the output folder.
// It does no network calls and no drawing: it copies the image that
// ships beside this file, so every run produces the exact same bytes.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The folder holding this script is the repository root at grading time.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const bundledImage = join(repoRoot, "entry.png");

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to /output when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputImage = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(bundledImage, outputImage);

// Confirm the copy landed and report its size, so a silent failure
// can never pass as a successful run.
const written = statSync(outputImage);
console.log(`Wrote ${outputImage} (${written.size} bytes)`);
