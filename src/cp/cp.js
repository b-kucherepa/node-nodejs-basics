import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCRIPT_PATH = __dirname + '/files/script.js';

const spawnChildProcess = async (args) => {
    const childProc = fork(SCRIPT_PATH, args, { stdio: 'pipe' });
    process.stdin.pipe(childProc.stdin);
    childProc.stdout.pipe(process.stdout);
};

spawnChildProcess([/* insert an argument array [arg1, arg2, ...] to test*/]);
