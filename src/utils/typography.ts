import Exception from '@kabeep/exception';
import { locale } from '../index.js';

export class Translation extends Exception {
    toString() {
        this.name = locale.CMD_TYPO_TRANSLATION;
        return this.info('#15141b.bgGreen');
    }
}

export class Source extends Exception {
    toString(code: string = locale.CMD_TYPO_SOURCE, bgColor = 'White') {
        this.name = code;
        return this.info(`#15141b.bg${bgColor}`);
    }
}

export class Synonym extends Exception {
    toString() {
        this.name = locale.CMD_TYPO_SYNONYM;
        return this.info('#15141b.bgMagenta');
    }
}

export class Polysemy extends Exception {
    toString() {
        this.name = locale.CMD_TYPO_POLYSEMY;
        return this.info('#15141b.bgBlue');
    }
}

export class Sentence extends Exception {
    toString() {
        this.name = locale.CMD_TYPO_SENTENCE;
        return this.info('#15141b.bgCyan');
    }
}

export class Language extends Exception {
    toString() {
        this.name = locale.CMD_TYPO_LANGUAGE;
        return this.info('#15141b.bgMagenta');
    }
}

export class Adaptive extends Exception {
    toString() {
        this.name = locale.CMD_TYPO_ADAPTIVE;
        return this.info('#15141b.bgMagenta');
    }
}

export class Code extends Exception {
    toString() {
        this.name = locale.CMD_TYPO_CODE;
        return this.info('#15141b.bgMagenta');
    }
}
