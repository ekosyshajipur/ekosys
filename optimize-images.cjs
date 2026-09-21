const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGE_DIR = path.join(process.cwd(), "public", "images");

const supported = [".png", ".jpg", ".jpeg"];

function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getFiles(fullPath);
    }

    return supported.includes(path.extname(entry.name).toLowerCase())
      ? [fullPath]
      : [];
  });
}

function mb(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

async function optimize() {
  if (!fs.existsSync(IMAGE_DIR)) {
    console.error(`Image directory not found: ${IMAGE_DIR}`);
    process.exit(1);
  }

  const files = getFiles(IMAGE_DIR);

  console.log(`Found ${files.length} images.\n`);

  let originalTotal = 0;
  let optimizedTotal = 0;

  for (const input of files) {
    try {
      const original = fs.statSync(input).size;
      originalTotal += original;

      const ext = path.extname(input);
      const output = input.slice(0, -ext.length) + ".webp";

      await sharp(input)
        .rotate()
        .resize({
          width: 2400,
          height: 1600,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({
          quality: 82,
          effort: 5,
        })
        .toFile(output);

      const optimized = fs.statSync(output).size;
      optimizedTotal += optimized;

      const saved = ((1 - optimized / original) * 100).toFixed(1);

      console.log(
        `${path.relative(process.cwd(), input)}`
      );
      console.log(
        `  ${mb(original)} MB → ${mb(optimized)} MB (${saved}% smaller)`
      );
    } catch (error) {
      console.error(`Failed: ${input}`);
      console.error(error.message);
    }
  }

  console.log("\n====================================");
  console.log("IMAGE OPTIMIZATION COMPLETE");
  console.log("====================================");
  console.log(`Original:   ${mb(originalTotal)} MB`);
  console.log(`Optimized:  ${mb(optimizedTotal)} MB`);
  console.log(
    `Saved:      ${mb(originalTotal - optimizedTotal)} MB`
  );
  console.log(
    `Reduction:  ${((1 - optimizedTotal / originalTotal) * 100).toFixed(1)}%`
  );
}

optimize();