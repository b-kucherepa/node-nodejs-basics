import { access, rename as fsrename, constants } from 'fs';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const rename = async () => {
    await access(PROJ_DIR + '/src/fs/files/properFilename.md', constants.F_OK, (err) => {
        if (!err) {
            throw new Error(FS_ERROR);
        }
    });

    await fsrename(PROJ_DIR + '/src/fs/files/wrongFilename.txt', PROJ_DIR + '/src/fs/files/properFilename.md', (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });
};

await rename();
