import { cpus } from 'os';
import { Worker } from 'worker_threads';
const PROJ_DIR = process.cwd();
const START_NUM = 10;

const performCalculations = async () => {
    function calcFibonacci(n) {
        const worker = new Worker(PROJ_DIR + '/src/wt/worker.js', { workerData: n });
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