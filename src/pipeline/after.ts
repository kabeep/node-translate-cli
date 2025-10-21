import type { TranslationOption } from '@kabeep/node-translate';
import type { ArgumentVector } from '../shared';
import {
    getColumns,
    getLanguageName,
    getNativeName,
    Polysemy,
    Sentence,
    Source,
    Synonym,
    Translation,
} from '../utils/index.js';

function after(
    result: TranslationOption,
    options: Pick<
        ArgumentVector,
        'from' | 'to' | 'showPhonetics' | 'showSource' | 'showDetail'
    >,
) {
    const { from, to, showPhonetics, showSource, showDetail } = options;
    const columns: number = Math.max(getColumns(), 32) - 32;

    if (showSource) {
        let sourceText = result.from.text.value;
        if (showPhonetics && result.from.text.phonetics)
            sourceText += ` /${result.from.text.phonetics}/`;

        let sourceColor = 'White';
        if (result.from.text.didYouMean) sourceColor = 'Yellow';
        if (result.from.language.didYouMean) sourceColor = 'Red';

        const isOverflow = sourceText.length > columns;
        const sourceLanguage = getLanguageName(
            result.from.language.iso || from,
        );
        const source = new Source(isOverflow ? '' : sourceText).toString(
            sourceLanguage,
            sourceColor,
        );
        console.log(`${source}\n${isOverflow ? ` > ${sourceText}` : ''}`);
    }

    let translationText = result.to.text.value;
    if (showPhonetics && result.to.text.phonetics)
        translationText += ` /${result.to.text.phonetics}/`;

    const isOverflow = translationText.length > columns;
    if (showPhonetics || showSource || showDetail) {
        const sourceLanguage = getNativeName(to);
        const translation = new Translation(
            isOverflow ? '' : translationText,
        ).toString(sourceLanguage);
        console.log(
            `${translation}${isOverflow ? `\n > ${translationText}` : ''}`,
        );
    } else {
        console.log(result.to.text.value);
    }

    if (showDetail) {
        const synonymText = result.from.synonyms.join(', ');
        const isOverflow = synonymText.length > columns;
        const synonym = new Synonym().toString();
        console.log(
            `\n${synonym}${isOverflow ? '\n' : ''}${result.from.synonyms.join(', ')}`,
        );

        const polysemy = new Polysemy().toString();
        console.log(`\n${polysemy}`);
        for (const { label, children } of result.to.polysemy) {
            console.log(` > [${label}] ${children.join(', ')}`);
        }

        const sentence = new Sentence().toString();
        console.log(`\n${sentence}`);
        for (const item of result.from.sentences) {
            console.log(` > ${item}`);
        }
    }
}

export default after;
