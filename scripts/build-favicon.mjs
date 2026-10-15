// Assembles public/favicon.ico from the rasterised PNGs in public/.
//
// An ICO file is just a 6-byte ICONDIR header, one 16-byte ICONDIRENTRY per
// size, then the raw image bytes concatenated. Every current browser accepts
// PNG payloads inside an ICO container, so we embed the PNGs as-is rather than
// writing BMP/DIB frames by hand.
//
// Run after changing the icon:  node scripts/build-favicon.mjs
//
// The PNGs themselves are rendered from public/icon.svg at exact pixel sizes;
// see DEPLOYMENT.md for the full asset pipeline.

import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const SIZES = [16, 32, 48];

const images = SIZES.map((size) => {
  const file = join(publicDir, `_favicon-${size}.png`);
  if (!existsSync(file)) {
    throw new Error(
      `Missing ${file}. Render the source SVG at ${size}x${size} first.`,
    );
  }
  return { size, data: readFileSync(file) };
});

// ICONDIR: reserved=0, type=1 (icon), count
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);

// ICONDIRENTRY per image, then the payload
const entries = [];
let offset = header.length + images.length * 16;

for (const { size, data } of images) {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 means 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 means 256)
  entry.writeUInt8(0, 2); // palette size, 0 = no palette table
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(data.length, 8);
  entry.writeUInt32LE(offset, 12);
  entries.push(entry);
  offset += data.length;
}

const ico = Buffer.concat([
  header,
  ...entries,
  ...images.map((i) => i.data),
]);

writeFileSync(join(publicDir, 'favicon.ico'), ico);

// The per-size PNGs were build inputs only. The committed favicon.ico plus
// icon-192 / icon-512 are everything consumers need.
for (const { size } of images) {
  unlinkSync(join(publicDir, `_favicon-${size}.png`));
}

console.log(
  `favicon.ico written: ${SIZES.join('/')} px, ${ico.length} bytes`,
);
