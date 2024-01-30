import { readFile } from 'fs';
import { createHash } from 'crypto';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const HASH_DIR = path.dirname(__filename);

const calculateHash = async () => {
    const fileData = readFile(HASH_DIR + '/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {});

    const hashData = createHash('sha256');
    hashData.update('fileData');
    console.log(hashData.digest('hex'));
};

await calculateHash();