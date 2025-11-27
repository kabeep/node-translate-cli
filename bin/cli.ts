#!/usr/bin/env node
import type Exception from '@kabeep/exception';
import process from 'node:process';
import readline from 'node:readline';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import pipeline, { type ArgumentVector, locale } from '../src';

if (process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('SIGINT', () => {
        process.emit('SIGINT');
    });
}

process.on('SIGINT', () => {
    process.exit(0);
});

pipeline(
    yargs(hideBin(process.argv))
        .scriptName('translate')
        .usage(locale.CMD_DSE_USAGE)
        .options('from', {
            alias: 'f',
            type: 'string',
            desc: locale.CMD_DES_FROM,
            default: 'auto',
        })
        .options('to', {
            alias: 't',
            type: 'string',
            desc: locale.CMD_DES_TO,
            default: 'auto',
        })
        .options('engine', {
            alias: 'e',
            type: 'string',
            choices: ['google', 'microsoft'],
            desc: locale.CMD_DES_ENGINE,
            default: () => process.env.NODE_TRANSLATE_CLI_ENGINE ?? 'google',
            defaultDescription: '"google"',
        })
        .options('timeout', {
            type: 'number',
            desc: locale.CMD_DES_TIMEOUT,
            default: 30_000,
        })
        .options('stdin-timeout', {
            type: 'number',
            desc: locale.CMD_DES_STDIN_TIMEOUT,
            default: 5000,
        })
        .options('retry', {
            alias: 'r',
            type: 'number',
            desc: locale.CMD_DES_RETRY,
            default: 0,
        })
        .options('show-phonetics', {
            alias: 'p',
            type: 'boolean',
            desc: locale.CMD_DES_SHOW_PHONETICS,
            boolean: true,
            default: false,
        })
        .options('show-source', {
            alias: 's',
            type: 'boolean',
            desc: locale.CMD_DES_SHOW_SOURCE,
            boolean: true,
            default: false,
        })
        .options('show-detail', {
            alias: 'd',
            type: 'boolean',
            desc: locale.CMD_DES_SHOW_DETAIL,
            boolean: true,
            default: false,
        })
        .options('show-languages', {
            alias: 'l',
            type: 'boolean',
            desc: locale.CMD_DES_SHOW_LANGUAGES,
            boolean: true,
            default: false,
        })
        .alias({
            v: 'version',
            h: 'help',
        })
        .parse() as ArgumentVector,
)
    .then(() => {
        process.exit(0);
    })
    .catch((error: Exception) => {
        console.log(`${error}`);
        process.exit(1);
    });
