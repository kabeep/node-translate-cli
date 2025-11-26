import process from 'node:process';
import ora from 'ora';
import { showLanguageList } from '../helpers';
import locale from '../locale';
import type { ArgumentVector } from '../shared';

async function before({
    _,
    showLanguages,
    stdinTimeout,
}: ArgumentVector): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        if (showLanguages) {
            console.log(showLanguageList());
            resolve(undefined);
            return;
        }

        if (_.length > 0) {
            const text = _.join(' ').trim();
            !text && reject(new Error(locale.CMD_ERR_MISSING_ARGUMENT));

            resolve(text);
            return;
        }

        process.stdin.isTTY &&
            reject(new Error(locale.CMD_ERR_MISSING_ARGUMENT));
        const spinner = ora({
            text: locale.CMD_SPIN_STDIN,
            color: 'magenta',
        }).start();

        let stdin = '';

        const timer: NodeJS.Timeout = setTimeout(() => {
            spinner.stop();
            reject(new Error(locale.CMD_ERR_STDIN_TIMEOUT));
        }, stdinTimeout);

        process.stdin.on('data', (chunk: string) => {
            clearTimeout(timer);
            stdin += chunk;
        });

        process.stdin.on('end', () => {
            const stdinText = stdin.trim();
            spinner.stop();
            if (stdinText) {
                resolve(stdinText);
            } else {
                reject(new Error(locale.CMD_ERR_MISSING_ARGUMENT));
            }
        });

        spinner.stop();
    });
}

export default before;
