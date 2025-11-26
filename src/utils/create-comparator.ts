import getActualLength from './get-actual-length';

type StringKeys<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

function createComparator<T extends object>(keys: Array<StringKeys<T>>) {
    const maximums: number[] = Array(keys.length).fill(0);

    return (options: T[]) => {
        for (const option of options) {
            for (let i = keys.length - 1; i >= 0; i--) {
                const key = keys[i] as keyof T; // ⚠️ TS 5.5 里必须临时断言
                const scoped = option[key] as string;

                const lens = getActualLength(scoped);
                if (lens > maximums[i]) maximums[i] = lens;
            }
        }
        return maximums;
    };
}

export default createComparator;
