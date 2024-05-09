import Exception from '@kabeep/exception';

export class Info extends Exception {
    toString() {
        return this.info('black.bgBlue');
    }
}

export class Success extends Exception {
    toString() {
        return this.info('black.bgGreen');
    }
}

export class Warning extends Exception {
    toString() {
        return this.info('black.bgYellow');
    }
}

export class Failure extends Exception {
    toString() {
        return this.info('black.bgRed');
    }
}
