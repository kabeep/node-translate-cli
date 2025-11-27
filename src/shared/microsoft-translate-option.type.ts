interface DetectedLanguageOption {
    language: string; // lang code
    score: number; // 0 - 1
}

interface SentLenOption {
    srcSentLen: number[];
    transSentLen: number[];
}

interface TransliterationOption {
    script: string;
    text: string;
}

interface TranslationOption {
    text: string;
    to: string; // lang code
    sentLen?: SentLenOption;
    transliteration?: TransliterationOption;
    alignment?: object;
}

export interface MicrosoftTranslateOption {
    detectedLanguage: DetectedLanguageOption;
    translations: TranslationOption[];
}
