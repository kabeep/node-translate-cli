import { iso6391X } from '@kabeep/node-translate';
import process from 'node:process';
import ora from 'ora';

import { locale } from '../index.js';
import type { ArgumentVector } from '../shared/index.js';
import { Adaptive, Code, Language } from '../utils/index.js';

async function before({
    _,
    showAdaptive,
    showCode,
    showList,
    stdinTimeout,
}: ArgumentVector): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        if (showList) {
            const list = iso6391X.getAllNativeNames().join(', ');
            console.log(`${new Language().toString()}\n ${list}`);
        } else if (showAdaptive) {
            const list = iso6391X
                .getAllDetections()
                .map((item) => item.nativeName)
                .join(', ');
            console.log(`${new Adaptive().toString()}\n ${list}`);
        } else if (showCode) {
            const list = iso6391X.getAllCodes().join(', ');
            console.log(`${new Code().toString()}\n ${list}`);
        }

        if (showAdaptive || showCode || showList) {
            resolve(undefined);
            return;
        }

        if (_.length > 0) {
            const text = _.join(' ').trim();
            !text && reject(new Error(locale.CMD_ERR_MISSING_ARGUMENT));

            resolve(text);
        } else {
            process.stdin.isTTY && reject(new Error(locale.CMD_ERR_MISSING_ARGUMENT));
            const spinner = ora({ text: locale.CMD_SPIN_STDIN, color: 'magenta' }).start();

            let stdin = '';

            const timer: NodeJS.Timeout = setTimeout(() => {
                spinner.stop();
                reject(new Error(locale.CMD_ERR_STDIN_TIMEOUT));
            }, stdinTimeout);

            process.stdin.on('data', function (chunk: string) {
                clearTimeout(timer);
                stdin += chunk;
            });

            process.stdin.on('end', function () {
                const stdinText = stdin.trim();
                spinner.stop();
                if (stdinText) {
                    resolve(stdinText);
                } else {
                    reject(new Error(locale.CMD_ERR_MISSING_ARGUMENT));
                }
            });

            spinner.stop();
        }
    });
}

export default before;
