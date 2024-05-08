import Exception from '@kabeep/exception';

export class Info extends Exception {
    toString() {
        return this.info('black.bgBlueBright');
    }
}

export class Success extends Exception {
    toString() {
        return this.info('black.bgGreenBright');
    }
}

export class Warning extends Exception {
    toString() {
        return this.info('black.bgYellowBright');
    }
}

export class Failure extends Exception {
    toString() {
        return this.info('black.bgRedBright');
    }
}
