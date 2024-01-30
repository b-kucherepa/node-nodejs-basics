import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';


const compress = async () => {
    const rs = createReadStream('src/zip/files/fileToCompress.txt');
    const ws = createWriteStream('src/zip/files/archive.gz');
    await pipeline(rs, createGzip(), ws);
};

await compress();