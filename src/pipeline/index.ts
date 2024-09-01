import ora from 'ora';
import { boundary } from '../helpers/index.js';
import { locale } from '../index.js';
import type { ArgumentVector } from '../shared/index.js';
import { isError } from '../utils/index.js';
import after from './after.js';
import before from './before.js';
import run from './run.js';

async function pipeline(argv: ArgumentVector) {
    const text = await boundary(before)(argv);
    if (text === undefined) return;

    if (isError(text)) {
        throw text;
    }

    const spinner = ora({ text: locale.CMD_SPIN_TRANSLATE, color: 'green' }).start();

    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
        spinner.color = 'yellow';
        timer = setTimeout(() => {
            spinner.color = 'red';
        }, 10_000);
    }, 5000);

    const { from, to, timeout, retry } = argv;
    const result = await boundary(run)(text, { from, to, timeout, retry });

    clearTimeout(timer);
    spinner.stop();

    if (isError(result)) {
        throw result;
    }

    const { showPhonetics, showSource, showDetail } = argv;
    after(result, { from, to, showPhonetics, showSource, showDetail });
}

export default pipeline;
