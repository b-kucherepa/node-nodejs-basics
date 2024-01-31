import { readdir } from 'fs';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const list = async () => {
    await readdir(PROJ_DIR + '/src/fs/files', (err, files) => {
        if (err) {
            throw new Error(FS_ERROR);
        }

        files.forEach(file => {
            console.log(file);
        });
    });
};

await list();