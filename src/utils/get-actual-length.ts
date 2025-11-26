import { eastAsianWidth } from 'get-east-asian-width';

function getActualLength(content: string) {
    let result = 0;
    for (const char of content) {
        const codePoint = char.charCodeAt(0);

        result += eastAsianWidth(codePoint);
    }

    return result;
}

export default getActualLength;
