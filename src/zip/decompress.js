import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const rs = createReadStream(__dirname + '/files/archive.gz');
    const ws = createWriteStream(__dirname + '/files/fileToCompress.txt');
    await pipeline(rs, createGunzip(), ws);
};

await decompress();