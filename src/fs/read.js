import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FS_ERROR = 'FS operation failed';

const read = async () => {
    try {
        const data = await readFile(__dirname + '/files/fileToRead.txt', 'utf8');
        console.log(data);
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await read();