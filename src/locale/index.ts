import { osLocaleSync } from 'os-locale';

import enUS from './en-US.js';
import zhCN from './zh-CN.js';

function getLocale() {
    const locale = osLocaleSync().split('-')[0];

    switch (locale) {
        case 'zh': {
            return zhCN;
        }

        default: {
            return enUS;
        }
    }
}

export default getLocale();
