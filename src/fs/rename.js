import { access, constants } from 'fs';
import { rename as fsrename } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FS_ERROR = 'FS operation failed';

const rename = async () => {
    await access(__dirname + '/files/properFilename.md', constants.F_OK, (err) => {
        if (!err) {
            throw new Error(FS_ERROR);
        }
    });

    try {
        await fsrename(__dirname + '/files/wrongFilename.txt', __dirname + '/files/properFilename.md');
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await rename();
