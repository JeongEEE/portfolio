/**
 * public/images 를 손본다. 스크린샷을 추가한 뒤 다시 돌리면 된다.
 *
 *   node scripts/optimize-images.mjs            PNG -> WebP 변환 (원본 유지)
 *   node scripts/optimize-images.mjs --delete-png   변환 후 원본 삭제
 *
 * 하는 일 두 가지:
 *
 * 1) PNG 를 WebP 로. 품질을 하나로 못 박지 않는다. 로고처럼 작고 경계가
 *    뚜렷한 그림은 손실 압축에서 가장자리가 지저분해지는데, 그런 그림은
 *    어차피 무손실 WebP 가 PNG 보다 작다. 그래서 작은 파일은 두 방식으로 다
 *    만들어보고 작은 쪽을 고른다. 큰 스크린샷은 무손실이 PNG 보다 오히려
 *    커지므로 시도조차 하지 않는다.
 *
 * 2) src/data/imageSizes.ts 생성. <img> 에 width/height 를 박아두면 브라우저가
 *    파일을 받기 전에 자리를 미리 비워둔다. 없으면 이미지가 도착하는 순간
 *    아래 내용이 밀려 내려간다. 스크린샷 해상도가 67종이라 슬라이드마다
 *    높이도 달라서, 넘길 때마다 캐러셀이 들썩인다.
 */
import sharp from "sharp";
import { readdir, stat, writeFile, unlink } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..");
const DIR = path.join(ROOT, "public", "images");
const SIZES_FILE = path.join(ROOT, "src", "data", "imageSizes.ts");
const WIDTH_CAP = 1600; // 표시 폭 ~900px x 2배 DPI 를 덮는 값
const QUALITY = 82;
const TRY_LOSSLESS_UNDER = 120 * 1024;

const deletePng = process.argv.includes("--delete-png");
const kb = (n) => (n / 1024).toFixed(0).padStart(6) + "KB";

/* 1) 변환 */
const pngs = (await readdir(DIR)).filter((f) => f.toLowerCase().endsWith(".png")).sort();
let before = 0;
let after = 0;
let losslessCount = 0;

for (const file of pngs) {
  const src = path.join(DIR, file);
  const size = (await stat(src)).size;
  const pipeline = sharp(src).resize({ width: WIDTH_CAP, withoutEnlargement: true });

  let buf = await pipeline.clone().webp({ quality: QUALITY }).toBuffer();
  let mode = `q${QUALITY}`;

  if (size < TRY_LOSSLESS_UNDER) {
    const lossless = await pipeline.clone().webp({ lossless: true }).toBuffer();
    if (lossless.length < buf.length) {
      buf = lossless;
      mode = "무손실";
      losslessCount += 1;
    }
  }

  await writeFile(src.replace(/\.png$/i, ".webp"), buf);
  if (deletePng) await unlink(src);

  before += size;
  after += buf.length;
  const pct = `${(100 - (buf.length / size) * 100).toFixed(0)}%`.padStart(5);
  console.log(`${file.padEnd(30)} ${kb(size)} -> ${kb(buf.length)} ${pct}  ${mode}`);
}

if (pngs.length > 0) {
  console.log("-".repeat(64));
  console.log(`${pngs.length}개  ${kb(before)} -> ${kb(after)}  절감 ${(100 - (after / before) * 100).toFixed(1)}%`);
  console.log(`무손실을 고른 파일: ${losslessCount}개`);
  if (!deletePng) console.log("원본 PNG 는 남겨뒀다. 지우려면 --delete-png");
} else {
  console.log("변환할 PNG 없음");
}

/* 2) 크기표 */
const webps = (await readdir(DIR)).filter((f) => f.endsWith(".webp")).sort();
const rows = [];
for (const file of webps) {
  const { width, height } = await sharp(path.join(DIR, file)).metadata();
  rows.push(`  "images/${file}": [${width}, ${height}],`);
}

await writeFile(
  SIZES_FILE,
  `/* 자동 생성 파일. 직접 고치지 말 것 — scripts/optimize-images.mjs 가 다시 쓴다. */

/**
 * 이미지별 원본 픽셀 크기. <img width height> 로 넘겨 브라우저가 파일을 받기
 * 전에 자리를 비워두게 한다. 없으면 이미지가 도착할 때 아래 내용이 밀린다.
 */
export const imageSizes: Record<string, [number, number]> = {
${rows.join("\n")}
};
`
);
console.log(`\nsrc/data/imageSizes.ts: ${rows.length}건 기록`);
