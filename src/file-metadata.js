import {exists} from 'fs';
import {create} from 'exif-parser';
import readChunk from 'read-chunk';


const FileNotFound = {err: 'File does not exits in given path'};

const getMetadata = (filePath, metadataCb) => exists(filePath, exists => {
  if (!exists) {
    throw FileNotFound;
  }

  readChunk(filePath, 0, 65635).then(buffer => {
    metadataCb(create(buffer).parse().tags);
  });
});

export default getMetadata;