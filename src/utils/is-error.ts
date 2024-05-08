function isError(value: unknown): value is Error {
    const tag = Object.prototype.toString.call(value);

    return tag === '[object Error]';
}

export default isError;
