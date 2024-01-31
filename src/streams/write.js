import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
const PROJ_DIR = process.cwd();

const write = async () => {
    const ws = createWriteStream(PROJ_DIR + '/src/streams/files/fileToWrite.txt');
    await pipeline(process.stdin, ws);
};

await write();