const isIsogram = require("../src");

describe('function isIsogram', () => {
    test('should return true when no word has sent', () => {
        const hasIsogram = isIsogram('');
        expect(hasIsogram).toBeTruthy();
    }); 
    test.each([
        'Dermatoglyphics',
        'a',
        'isogram'
    ])('should return true when the word has no repeating letter (%s)', (isogram) => {
        const hasIsogram = isIsogram(isogram);
        expect(hasIsogram).toBeTruthy();
    });

    test.each([
        'aba',
        'MoOse',
        'isIsogram'
    ])('should return false when the word has repeating letter (%s)', (notIsogram) => {
        const hasNotIsogram = isIsogram(notIsogram);
        expect(hasNotIsogram).toBeFalsy();
    }); 
});