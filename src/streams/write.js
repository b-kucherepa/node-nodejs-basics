import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const ws = createWriteStream(__dirname + '/files/fileToWrite.txt');
    await pipeline(process.stdin, ws);
};

await write();