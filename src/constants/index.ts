import { osLocaleSync } from 'os-locale';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const OS_LOCALE_ENV = osLocaleSync().split('-')[0];
