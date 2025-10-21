import { iso6391X } from '@kabeep/node-translate';

function getNativeName(code?: string) {
    if (!code || code === 'auto') return '';

    return (
        iso6391X.getNativeName(code) ||
        iso6391X.getNativeName(iso6391X.getCode(code))
    );
}

export default getNativeName;
