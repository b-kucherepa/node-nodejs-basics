import fs from 'fs';

const copy = async () => {
    fs.cp('/files', '/files_copy', { recursive: true }, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
      });
};

await copy();
