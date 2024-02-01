import { unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FS_ERROR = 'FS operation failed';

const remove = async () => {
    try {
        await unlink(__dirname + '/files/fileToRemove.txt');
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await remove();