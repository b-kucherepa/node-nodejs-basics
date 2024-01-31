import { access, constants } from 'fs';
import { rename as fsrename } from 'fs/promises';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const rename = async () => {
    await access(PROJ_DIR + '/src/fs/files/properFilename.md', constants.F_OK, (err) => {
        if (!err) {
            throw new Error(FS_ERROR);
        }
    });

    try {
        await fsrename(PROJ_DIR + '/src/fs/files/wrongFilename.txt', PROJ_DIR + '/src/fs/files/properFilename.md');
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await rename();
