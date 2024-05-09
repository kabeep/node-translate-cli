import { iso6391X } from '@kabeep/node-translate';

function getLanguageName(from?: string, detectFrom?: string) {
    const code = !from || from === 'auto' ? detectFrom : from;

    const language = code ? iso6391X.getName(code) : '';

    return language || detectFrom;
}

export default getLanguageName;
