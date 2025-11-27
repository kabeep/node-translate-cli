export default {
    CMD_DSE_USAGE: '$0 <文本> [选项]',
    CMD_DES_FROM: '源语言(要翻译的语言) 指定为语言名称或ISO 639-1代码',
    CMD_DES_TO: '目标语言(要翻译的语言) 指定为语言名称或ISO 639-1代码',
    CMD_DES_ENGINE: '翻译引擎',
    CMD_DES_TIMEOUT: '翻译请求的超时持续时间 (以毫秒为单位)',
    CMD_DES_STDIN_TIMEOUT: '使用此参数来避免 stdin 超时  (以毫秒为单位)',
    CMD_DES_RETRY: '失败时试图重试翻译请求次数',
    CMD_DES_SHOW_PHONETICS: '查看翻译文本的单词发音',
    CMD_DES_SHOW_SOURCE: '查看源文本信息',
    CMD_DES_SHOW_DETAIL: '查看翻译后的详细信息',
    CMD_DES_SHOW_LANGUAGES: '显示支持的语言列表',

    CMD_USAGE_EG: '将 "Hello World!" 翻译到你的语言',
    CMD_USAGE_EG_TO: '将 "Hello World!" 翻译成你的西班牙语',
    CMD_USAGE_EG_SHOW:
        '输出更多信息 (语言名称, 发音, 同近义词, 词性, 更多释义, 例句, ...)',
    CMD_USAGE_EG_ABBR: '用参数缩写让命令行变得简单',
    CMD_USAGE_EG_FILE: '将 "./README.md" 翻译成你的语言',
    CMD_USAGE_EG_STDIN: '将 "Rust 语言书第一章节" 翻译成你的语言',
    CMD_USAGE_EG_HELP:
        '将 "npm --help" 的输出翻译成你的语言, 并将结果保存成文件',
    CMD_USAGE_EG_SLOW:
        '如果有一个很耗时的任务, 使用 `--stdin-timeout` 参数保护命令行',
    CMD_USAGE_EG_ENGINE: '指定 "microsoft" 作为翻译引擎',
    CMD_USAGE_EG_ENV: '通过环境变量 "NODE_TRANSLATE_CLI_ENGINE" 指定翻译引擎',
    CMD_USAGE_EG_TIMEOUT:
        '如果你担忧自己的网络状况, 使用 `--timeout` 参数保护命令行',
    CMD_USAGE_EG_LANGS: '显示支持的语言',

    CMD_SPIN_STDIN: '加载标准输入流...',
    CMD_SPIN_TRANSLATE: '等待翻译API...',

    CMD_TYPO_TRANSLATION: '系统语言',
    CMD_TYPO_SOURCE: '原文',
    CMD_TYPO_SYNONYM: '同近义词',
    CMD_TYPO_POLYSEMY: '多义词',
    CMD_TYPO_SENTENCE: '例句',

    CMD_ERR_MISSING_ARGUMENT: '请输入需要翻译的内容',
    CMD_ERR_STDIN_TIMEOUT: '标准输入流监听超时',
    CMD_ERR_TIMEOUT: '达到超时限制',
    CMD_ERR_CONNRESET: '连接被强制关闭',
    CMD_ERR_ADDRINUSE: '无法绑定到任何空闲端口',
    CMD_ERR_CONNREFUSED: '服务器拒绝了连接',
    CMD_ERR_PIPE: '写入流的远程端已关闭',
    CMD_ERR_NOTFOUND: '无法将主机名解析为 IP 地址',
    CMD_ERR_NETUNREACH: '没有网络连接',
    CMD_ERR_AI_AGAIN: 'DNS 查询超时',
    CMD_ERR_PARSE: '意料外的响应数据',
    CMD_ERR_VALIDATION: '非法语言代码',
    CMD_ERR_UNKNOWN: '未知错误',
};
