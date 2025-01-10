const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = './src/images';
const targetDir = './src/images';

fs.readdirSync(sourceDir).forEach(file => {
    if (path.extname(file) === '.jpeg' || path.extname(file) === '.jpg' || path.extname(file)==='.png') {
        const inputFile = path.join(sourceDir, file);
        const outputFile = path.join(targetDir, `${path.basename(file, path.extname(file))}.webp`);
        sharp(inputFile)
            .webp({ quality: 80 })
            .toFile(outputFile)
            .then(() => console.log(`Converted: ${file} to WebP`))
            .catch(err => console.error(err));
    }
});
