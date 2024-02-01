import { cpus } from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const START_NUM = 10;

const performCalculations = async () => {
    function calcFibonacci(n) {
        const worker = new Worker(__dirname + '/worker.js', { workerData: n });
        return new Promise((resolve) => {
            worker.addListener('message', (data) => resolve({ status: 'resolved', data: data }));
            worker.addListener('error', (data) => resolve({ status: 'error', data: null }));
        })
    }

    const cpuResults = new Array(cpus().length);

    for (let i = 0; i < cpuResults.length; i++) {
        cpuResults[i] = calcFibonacci(START_NUM+i);
    }

    const data = await Promise.all(cpuResults);
    console.log(data);
};

await performCalculations();