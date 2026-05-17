import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images');

async function convertToWebP(file) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace('.png', '.webp'));

  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Converting ${file}: ${metadata.width}x${metadata.height}`);

    // Resize if width > 800px, maintain aspect ratio
    let pipeline = sharp(inputPath);
    if (metadata.width > 800) {
      pipeline = pipeline.resize(800, null, { withoutEnlargement: true });
    }

    await pipeline.webp({ quality: 80 }).toFile(outputPath);
    console.log(`Converted to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${file}:`, error);
  }
}

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const pngFiles = files.filter(file => file.endsWith('.png'));

  pngFiles.forEach(convertToWebP);
});