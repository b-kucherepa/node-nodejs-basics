import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const rs = createReadStream(__dirname + '/files/fileToCompress.txt');
    const ws = createWriteStream(__dirname + '/files/archive.gz');
    await pipeline(rs, createGzip(), ws);
};

await compress();