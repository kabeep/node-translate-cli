import { OS_LOCALE_ENV } from '../constants/index.js';

import enUS from './en-US.js';
import zhCN from './zh-CN.js';

function getLocale() {
    switch (OS_LOCALE_ENV) {
        case 'zh': {
            return zhCN;
        }

        default: {
            return enUS;
        }
    }
}

export default getLocale();
