// gta6-clipper-01 entry: the video is the entry.
// This program copies VIDEO.json from the repository root to the output
// directory, where the gate reads the video's address and fetches its
// views from YouTube. Nothing else is written; the run is deterministic
// because the copy is byte for byte.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');
const raw = readFileSync(videoPath, 'utf8');
const parsed = JSON.parse(raw) as { url?: unknown };
if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
  console.error('VIDEO.json must name an https video URL');
  process.exit(1);
}
let host: string;
try {
  host = new URL(parsed.url).hostname;
} catch {
  console.error('VIDEO.json must name a valid video URL');
  process.exit(1);
}
if (host !== 'www.youtube.com' && host !== 'youtube.com' && host !== 'youtu.be') {
  console.error('VIDEO.json must name a YouTube video URL');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
