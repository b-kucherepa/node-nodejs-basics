import { access, rename as fsrename, constants } from 'fs';

import { FS_DIR, FS_ERROR } from './fsconst.js';

const rename = async () => {
    await access('/files/properFilename.md', constants.F_OK, (err) => {
        if (!err) {
            throw new Error(FS_ERROR);
        }
    });

    await fsrename(FS_DIR + '/files/wrongFilename.txt', FS_DIR + '/files/properFilename.md', (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });
};

await rename();
