import type { LanguageOption } from '@kabeep/node-translate';
import { iso6391X } from '@kabeep/node-translate';
import logSymbols from 'log-symbols';
import { createComparator, magenta, padContent } from '../utils';

function showLanguageList() {
    const langCodes = iso6391X.getAllCodes();
    const langOptions = iso6391X.getLanguages(langCodes);
    const adaptiveLangOptions = iso6391X.getAllDetections();
    const adaptiveLangCode = new Set(
        adaptiveLangOptions.map((item) => item.code),
    );

    const renderKeys = ['code', 'name', 'nativeName'] as Array<
        keyof LanguageOption
    >;

    const comparator = createComparator<LanguageOption>(renderKeys);
    const maxLens = comparator(langOptions);

    const printLine = (
        strs: string[],
        palette?: (content: string) => string,
    ) => {
        const _palette = palette ?? ((content: string) => content);
        const pipe = (content: string, length: number) =>
            _palette(padContent(content, length));

        const contents = strs.map((str, index) => pipe(str, maxLens[index]));
        return contents.join('\t');
    };

    const titles = printLine(
        ['Code', 'Name', 'Native Name', 'Detectable'],
        magenta,
    );
    const rows = langOptions.map(({ code, name, nativeName }) =>
        printLine([
            code,
            name,
            nativeName,
            adaptiveLangCode.has(code) ? logSymbols.success : logSymbols.error,
        ]),
    );

    return [titles, ...rows].join('\n');
}

export default showLanguageList;
