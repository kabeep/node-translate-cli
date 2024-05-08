import type { TranslationOption } from '@kabeep/node-translate';
import type { ArgumentVector } from '../shared/index.js';
import { getColumns, Polysemy, Sentence, Source, Synonym, Translation } from '../utils/index.js';

function after(
    result: TranslationOption,
    options: Pick<ArgumentVector, 'showPhonetics' | 'showSource' | 'showDetail'>,
) {
    const { showPhonetics, showSource, showDetail } = options;
    const columns: number = Math.max(getColumns(), 32) - 32;

    if (showSource) {
        let sourceText = result.from.text.value;
        showPhonetics && result.from.text.phonetics && (sourceText += ` /${result.from.text.phonetics}/`);

        let sourceColor = 'White';
        result.from.language.didYouMean && (sourceColor = 'Yellow');
        result.from.text.didYouMean && (sourceColor = 'Red');

        const isOverflow = sourceText.length > columns;
        const source = new Source(isOverflow ? '' : sourceText).toString(sourceColor);
        console.log(`${source}\n${isOverflow ? ` > ${sourceText}` : ''}`);
    }

    let translationText = result.text;
    showPhonetics && (translationText += ` /${result.to.text.phonetics}/`);

    const isOverflow = translationText.length > columns;
    const translation = new Translation(isOverflow ? '' : translationText).toString();
    console.log(`${translation}${isOverflow ? `\n > ${translationText}` : ''}`);

    if (showDetail) {
        const synonymText = result.from.synonyms.join(', ');
        const isOverflow = synonymText.length > columns;
        const synonym = new Synonym().toString();
        console.log(`\n${synonym}${isOverflow ? '\n' : ''}${result.from.synonyms.join(', ')}`);

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
