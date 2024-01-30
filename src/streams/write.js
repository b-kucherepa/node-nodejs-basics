import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {
    const ws = createWriteStream('src/streams/files/fileToWrite.txt');
    await pipeline(process.stdin, ws);
};

await write();