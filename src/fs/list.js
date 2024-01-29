import { readdir } from 'fs';
import { FS_DIR, FS_ERROR } from './fsconst.js';

const list = async () => {
    await readdir(FS_DIR + '/files', (err, files) => {
        if (err) {
            throw new Error(FS_ERROR);
        }

        files.forEach(file => {
            console.log(file);
        });
    });
};

await list();