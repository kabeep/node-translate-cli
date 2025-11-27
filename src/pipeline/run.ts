import type { TranslateOptions } from '@kabeep/node-translate';
import { translator } from '../helpers';
import locale from '../locale';
import type { ArgumentVector } from '../shared';

async function run(
    text: string,
    options: Omit<TranslateOptions, 'raw'> & Pick<ArgumentVector, 'engine'>,
) {
    try {
        return await translator(text, options);
    } catch (error: unknown) {
        const { message } = error as Error;
        switch (message) {
            case 'ETIMEDOUT': {
                throw new Error(locale.CMD_ERR_TIMEOUT);
            }

            case 'ECONNRESET': {
                throw new Error(locale.CMD_ERR_CONNRESET);
            }

            case 'EADDRINUSE': {
                throw new Error(locale.CMD_ERR_ADDRINUSE);
            }

            case 'ECONNREFUSED': {
                throw new Error(locale.CMD_ERR_CONNREFUSED);
            }

            case 'EPIPE': {
                throw new Error(locale.CMD_ERR_PIPE);
            }

            case 'ENOTFOUND': {
                throw new Error(locale.CMD_ERR_NOTFOUND);
            }

            case 'ENETUNREACH': {
                throw new Error(locale.CMD_ERR_NETUNREACH);
            }

            case 'EAI_AGAIN': {
                throw new Error(locale.CMD_ERR_AI_AGAIN);
            }

            case 'EPARSE': {
                throw new Error(locale.CMD_ERR_PARSE);
            }

            case 'EVALIDATION': {
                throw new Error(locale.CMD_ERR_VALIDATION);
            }

            default: {
                throw new Error(locale.CMD_ERR_UNKNOWN);
            }
        }
    }
}

export default run;
