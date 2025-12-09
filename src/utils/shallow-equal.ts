const _objProto = Object.prototype;
const _hasOwnProperty = (obj: object, key: string) =>
    _objProto.hasOwnProperty.call(obj, key);

function shallowEqual(objA: unknown, objB: unknown): boolean {
    if (Object.is(objA, objB)) return true;

    if (
        typeof objA !== 'object' ||
        objA === null ||
        typeof objB !== 'object' ||
        objB === null
    )
        return false;

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    const a = objA as Record<string, unknown>;
    const b = objB as Record<string, unknown>;

    for (let i = 0; i < keysA.length; i++) {
        const key = keysA[i];
        if (!_hasOwnProperty(b, key) || !Object.is(a[key], b[key]))
            return false;
    }

    return true;
}

export default shallowEqual;
