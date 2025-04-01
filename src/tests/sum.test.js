// soma.test
const sum = require('./sum');

test('Soma 2 + 3 deve ser 5', () => {
    expect(sum(2, 3)).toBe(5);
});
