import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
const PROJ_DIR = process.cwd();

const decompress = async () => {
    const rs = createReadStream(PROJ_DIR + '/src/zip/files/archive.gz');
    const ws = createWriteStream(PROJ_DIR + '/src/zip/files/fileToCompress.txt');
    await pipeline(rs, createGunzip(), ws);
};

await decompress();