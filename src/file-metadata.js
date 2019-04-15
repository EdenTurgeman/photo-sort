const fs = require('fs');
const exifParser = require('exif-parser');

const FileNotFound = {err: 'File does not exits in given path'};

const getMetadata = (filePath, cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    const fileData = exifParser.create(data);

    cb(fileData.parse());
  });
};

module.exports = (filePath, metadataCb) => fs.exists(filePath, exists => {
  if (!exists) {
    throw FileNotFound;
  }

  getMetadata(filePath, metadataCb);
});