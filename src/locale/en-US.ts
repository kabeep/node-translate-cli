export default {
    CMD_DSE_USAGE: '$0 <text> [options]',
    CMD_DES_FROM: 'The source language (language to be translated from) specified as language name or ISO 639-1 code',
    CMD_DES_TO: 'The target language (language to be translated to) specified as language name or ISO 639-1 code',
    CMD_DES_TIMEOUT: 'Timeout duration for the translation request in milliseconds',
    CMD_DES_STDIN_TIMEOUT: 'You can use this parameter to avoid timeouts if stdin takes too long (ms)',
    CMD_DES_RETRY: 'Retry attempts for the translation request in case of failure',
    CMD_DES_SHOW_PHONETICS: 'Show the pronunciation of the translated word',
    CMD_DES_SHOW_SOURCE: 'Show source text information',
    CMD_DES_SHOW_DETAIL: 'Show translated detail information',
    CMD_DES_SHOW_LIST: 'Show supported languages',
    CMD_DES_SHOW_CODE: 'Show supported language codes',
    CMD_DES_SHOW_ADAPTIVE: 'Show supported adaptive languages',

    CMD_SPIN_STDIN: 'Loading stdin...',
    CMD_SPIN_TRANSLATE: 'Waiting translate API...',

    CMD_TYPO_TRANSLATION: 'System Language',
    CMD_TYPO_SOURCE: 'Source Text',
    CMD_TYPO_SYNONYM: 'Synonym',
    CMD_TYPO_POLYSEMY: 'Polysemy',
    CMD_TYPO_SENTENCE: 'Sentence',
    CMD_TYPO_LANGUAGE: 'Language List',
    CMD_TYPO_ADAPTIVE: 'Adaptive List',
    CMD_TYPO_CODE: 'Code List',

    CMD_ERR_MISSING_ARGUMENT: 'Please enter the content that needs to be translated',
    CMD_ERR_STDIN_TIMEOUT: 'Stdin listening timeouts',
    CMD_ERR_TIMEOUT: 'The timeout limits was reached',
    CMD_ERR_CONNRESET: 'The connection was forcibly closed',
    CMD_ERR_ADDRINUSE: 'Could not bind to any free port',
    CMD_ERR_CONNREFUSED: 'The connection was refused by the server',
    CMD_ERR_PIPE: 'The remote side of the stream being written has been closed',
    CMD_ERR_NOTFOUND: 'Could not resolve the hostname to an IP address',
    CMD_ERR_NETUNREACH: 'No internet connection',
    CMD_ERR_AI_AGAIN: 'DNS lookup timed out',
    CMD_ERR_PARSE: 'Unexpected API response data',
    CMD_ERR_VALIDATION: 'Illegal language code',
    CMD_ERR_UNKNOWN: 'Unknown error',
};
