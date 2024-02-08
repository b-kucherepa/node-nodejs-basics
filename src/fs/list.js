import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FS_ERROR = 'FS operation failed';

const list = async () => {
    try {
        const files = await readdir(__dirname + '/files');

        files.forEach(file => {
            console.log(file);
        });
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await list();