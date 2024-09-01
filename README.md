<div align="center">

<img width="814" src="docs/images/logo.png" alt="logo">

A powerful, secure and feature-rich tool via Google Translation **in terminal**.

---

[![NodeJS](https://img.shields.io/node/v/%40kabeep%2Fnode-translate-cli?color=lightseagreen)](https://nodejs.org/docs/latest/api/)
[![License](https://img.shields.io/github/license/kabeep/node-translate-cli?color=slateblue)](LICENSE)
[![NPM](https://img.shields.io/npm/d18m/%40kabeep%2Fnode-translate-cli?color=cornflowerblue)](https://www.npmjs.com/package/@kabeep/node-translate-cli)
[![Codecov](https://img.shields.io/codecov/c/github/kabeep/node-translate-cli?logo=codecov&color=mediumvioletred)](https://codecov.io/gh/kabeep/node-translate-cli)
[![Codacy](https://img.shields.io/codacy/grade/2cf61fce83694f82a0a9213ac8d9a796?logo=codacy&logoColor=dodgerblue&color=dodgerblue)](https://app.codacy.com/gh/kabeep/node-translate-cli/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/Qh23T2Zgw4Fy4V8uvKaymp/XWLHQrsMmQsM3jydfFa2AW/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/circleci/Qh23T2Zgw4Fy4V8uvKaymp/XWLHQrsMmQsM3jydfFa2AW/tree/master)

English | [简体中文](README.zh-CN.md)

![Alt](https://repobeats.axiom.co/api/embed/f0b1b8b0150e5f891d765081ad1349cccc127c5c.svg "Repobeats analytics image")

<img width="814" src="docs/images/usage.png" alt="usage-png">

</div>

## 📖 Introduction

> Using the [node-translate](https://github.com/kabeep/node-translate) API in the terminal.
>
> The API bypasses token restrictions.
> If it is used in large quantities or for business, please support the work of
> Google Translation, which provides a lot of free credits.

#### Besides simple text translation, it also provides:

- Adaptive translation language
- Automatic correction of the source text
- Getting source text from stdin
- Polysemous translation results
- Synonyms of the source text
- Example sentences of the source text
- Phonetic transcription of the source and translated text
- Stable output and error prompts
- Beautiful terminal styling
- Internationalized prompt for terminal

## ⚙️ Installation

```bash
npm install @kabeep/node-translate-cli --save
```

```bash
yarn add @kabeep/node-translate-cli
```

```bash
pnpm add @kabeep/node-translate-cli
```

## 🚀 Usage

```text
translate <text> [options]

options：
  -f, --from            The source language (language to be translated from)
                        specified as language name or ISO 639-1 code
                                                           [string] [default: "auto"]
  -t, --to              The target language (language to be translated to)
                        specified as language name or ISO 639-1 code
                                                           [string] [default: "auto"]
      --timeout         Timeout duration for the translation request in
                        milliseconds                       [number] [default: 30000]
      --stdin-timeout   You can use this parameter to avoid timeouts if stdin
                        takes too long (ms)                [number] [default: 5000]
  -r, --retry           Retry attempts for the translation request in case of
                        failure                            [number] [default: 0]
  -p, --show-phonetics  Show the pronunciation of the translated word
                                                           [boolean] [default: false]
  -s, --show-source     Show source text information       [boolean] [default: false]
  -d, --show-detail     Show translated detail information [boolean] [default: false]
  -l, --show-list       Show supported language list       [boolean] [default: false]
      --show-code       Show supported language code list  [boolean] [default: false]
      --show-adaptive   Show adaptive language             [boolean] [default: false]
  -v, --version         Show version                       [boolean]
  -h, --help            Show help info                     [boolean]
```

## 🪄 Examples

#### Using stdin

```shell
echo "test" | translate -f en -t zh
```

#### Using iso-639-1 and text parameters

```shell
translate "test" --from=en --to=zh
```

#### Using language name and capitalized correction

```shell
translate "test" --from="ENGLISH" --to="chinese"
```

#### Adaptive source language

```shell
translate "test" -t zh
```

#### Self-detection of native language

```shell
translate "test" -f en
```

#### Autocorrect source text

```shell
translate "Thunk you"
```

#### Translate words and show synonyms, polysemy explanations and examples

```shell
translate "test" -d
```

#### Translate a word, phrase or sentence and show the source text and phonetic symbols

```shell
translate "test" -s -p
```

#### Set API timeout

```shell
translate "test" --timeout=60000
```

#### Set the timeout for the standard input stream

```shell
npm view node-translate-cli description | translate --stdin-timeout=30000
```

#### Set the number of retries when an API request fails

```shell
translate "test" -r 2
```

#### Show supported languages

```shell
translate -l
```

#### Show supported language codes

```shell
translate --show-code
```

#### Show supported adaptive languages

```shell
translate --show-adaptive
```

#### Show help information

```shell
translate -h
```

#### Show the version of current

```shell
translate -v
```

## 🧙🏽‍♂️ Advanced

#### Using another npm package

```shell
npm install -g clipboard-cli

# Use the clipboard-cli to copy translation results to the clipboard
translate 'Translate this sentence to your clipboard' | clipboard
```

#### Using the static accessor `$()` method

```shell
git commit -m "$(translate 'feat: your commit content' -t zh)"
```

![Alt](docs/images/advanced-usage-accessor.png "Using the static accessor method")

#### Using the pipe `|` symbol

```shell
npm info npm description | translate -t zh
```

![Alt](docs/images/advanced-usage-pipe.png "Using the pipe | symbol")

#### Using the redirection `>` symbol

```shell
translate "这是一段测试文本。" -t en > usage.txt
```

![Alt](docs/images/advanced-usage-redirection.png "Using the redirection > symbol")

## 🔧 Autocorrect

> `Default` white
>
> `Detect Language` yellow
>
> `Detect Spelling` red

![Alt](docs/images/autocorrect.png "Color Scheme")

## 🐢 Network anomaly

> When the network is abnormal, the terminal will change as shown in the figure below
> (they actually come from the same line).

![Alt](docs/images/slowly-network.png "Stdout in Terminal")

## ⌨️ Automatic line wrapping

> When a single line of content is too long, the terminal will automatically wrap the line after the title.

![Alt](docs/images/newline.png "Overlong text")

## 🌐 i18n

Quickly contribute your language via ease-to-use [node-translate-i18n](https://github.com/kabeep/node-translate-i18n)
in [locale](https://github.com/kabeep/node-translate-cli/tree/master/src/locale/index.ts) file are welcome,
or notify me via [Issues](https://github.com/kabeep/node-translate-cli/issues) for handling.

![Alt](docs/images/i18n.png "Locale from OS")

## 🔗 Related

- [node-translate](https://github.com/kabeep/node-translate) - 🦜 A powerful, secure and feature-rich api via Google
  Translation.
- [node-translate-i18n](https://github.com/kabeep/node-translate-i18n) - 🌏 A command-line interface tool for translating
  localization files to other languages.
- [google-translate-cli](https://github.com/jesusalber1/google-translate-cli) - Google Translate via CLI.

## 🤝 Contribution

Contributions via Pull Requests or [Issues](https://github.com/kabeep/node-translate-cli/issues) are welcome.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
