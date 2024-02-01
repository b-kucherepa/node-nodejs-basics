import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const rs = createReadStream(__dirname+ '/files/fileToRead.txt');
    await pipeline(rs, process.stdout);
};

await read();