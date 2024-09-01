import { stdout } from 'node:process';
import type { WriteStream } from 'node:tty';

function getColumns() {
    return (stdout as (WriteStream & { fd: 1 }) | undefined)?.columns || 0;
}

export default getColumns;
