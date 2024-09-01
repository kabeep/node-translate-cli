import { iso6391X } from '@kabeep/node-translate';

function getNativeName(code?: string) {
    return iso6391X.getNativeName(code || '');
}

export default getNativeName;
