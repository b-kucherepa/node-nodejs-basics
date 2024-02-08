import { cp } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FS_ERROR = 'FS operation failed';

const copy = async () => {
    try {
        await cp(__dirname + '/files', __dirname + '/files_copy', { force: false, overwrite: false, errorOnExist: true, recursive: true })
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await copy();
