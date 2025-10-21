import { OS_LOCALE_ENV } from '../constants';

import enUS from './en-US';
import zhCN from './zh-CN';

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
