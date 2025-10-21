import { osLocaleSync } from 'os-locale';

export const OS_LOCALE_ENV = osLocaleSync().split('-')[0];
