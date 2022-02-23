import icons from './icon-types';

const fs = require('fs');
const path = require('path');
const srcDirPath = path.join(process.cwd(), '/src/svg/legacy');
const distDirPath = path.join(process.cwd(), '/src/svg/prebuild');

const copyFile = async (source: string, destination: string) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(source, destination, (err: any) => {
      if (err) {
        reject(err);
      } else {
        resolve('');
      }
    });
  });
};

if (!fs.existsSync(distDirPath)) {
  fs.mkdirSync(distDirPath, { recursive: true });
}

fs.readdir(srcDirPath, async (err: any, files: any) => {
  for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
      const file = files[key];
      let fileName = file.replace(/.*?-/, '')?.replace('.svg', '');
      if (fileName && icons.includes(fileName)) {
        await copyFile(srcDirPath + '/' + file, distDirPath + '/' + file);
      }
    }
  }
});

console.log('prebuild completed');
