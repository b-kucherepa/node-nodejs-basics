import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
const PROJ_DIR = process.cwd();

const compress = async () => {
    const rs = createReadStream(PROJ_DIR + '/src/zip/files/fileToCompress.txt');
    const ws = createWriteStream(PROJ_DIR + '/src/zip/files/archive.gz');
    await pipeline(rs, createGzip(), ws);
};

await compress();