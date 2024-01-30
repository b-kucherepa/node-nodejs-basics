import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';


const decompress = async () => {
    const rs = createReadStream('src/zip/files/archive.gz');
    const ws = createWriteStream('src/zip/files/fileToCompress.txt');
    await pipeline(rs, createGunzip(), ws);
};

await decompress();