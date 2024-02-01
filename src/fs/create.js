import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FS_ERROR = 'FS operation failed';

const create = async () => {
    try {
        await writeFile(__dirname + '/files/fresh.txt', 'I am fresh and young!', { flag: 'wx' });
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await create();