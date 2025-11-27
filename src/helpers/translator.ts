import type {
    TranslateOptions,
    TranslationOption,
} from '@kabeep/node-translate';
import googleTranslate from '@kabeep/node-translate';
import { translate as microsoftTranslate } from 'microsoft-translate-api';
import { OS_LOCALE_ENV } from '../constants';
import type { ArgumentVector, MicrosoftTranslateOption } from '../shared';

export interface TranslatorOptions
    extends Omit<TranslateOptions, 'raw'>,
        Pick<ArgumentVector, 'engine'> {}

const LOCALE_ALIASES: Record<string, string> = {
    mandarin: 'zh-cn',
    cantonese: 'zh-tw',
    'zh-hk': 'zh-tw',
};

const MICROSOFT_LANG_CODE_DICT: Record<string, string> = {
    zh: 'zh-hans',
    'zh-cn': 'zh-hans',
    'zh-tw': 'zh-hant',
};

function microsoftLangCodeAdapter(code?: string, adaptive = false) {
    const isAdaptive = !code || code === 'auto';
    if (!adaptive && isAdaptive) return null;

    const source = isAdaptive ? OS_LOCALE_ENV : code;
    const langCode = LOCALE_ALIASES[source] ?? source;
    return MICROSOFT_LANG_CODE_DICT[langCode] ?? langCode;
}

async function translator(
    text: string,
    options: TranslatorOptions,
): Promise<TranslationOption | MicrosoftTranslateOption[] | undefined> {
    const { engine = 'google', ...restOptions } = options;
    switch (engine) {
        case 'microsoft': {
            const { from, to } = options;
            const sourceLang = microsoftLangCodeAdapter(from);
            const targetLang = microsoftLangCodeAdapter(to, true);
            return microsoftTranslate(
                text,
                sourceLang,
                targetLang as string,
            ) as unknown as MicrosoftTranslateOption[] | undefined;
        }

        case 'google': {
            return googleTranslate(text, restOptions);
        }
    }
}

export default translator;
