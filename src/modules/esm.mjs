import { createServer } from 'http';
import { release, version } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await import('file://' + __dirname + '/files/c.js');
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const FILE_A = await import('file://' + __dirname + '/files/a.json', { with: { type: 'json' } });
const FILE_B = await import('file://' + __dirname + '/files/b.json', { with: { type: 'json' } });
const random = Math.random();
let unknownObject = (random > 0.5) ? FILE_A.default : FILE_B.default;
console.log(unknownObject);

const PORT = 3000;
const myServer = createServer((_, res) => {
    res.end('Request accepted');
});
myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};