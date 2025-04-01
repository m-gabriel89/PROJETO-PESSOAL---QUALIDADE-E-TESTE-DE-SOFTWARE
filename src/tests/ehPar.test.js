// isEven.test.js
const isEven = require('./ehPar');

test('Verifica se 4 é par', () => {
    expect(isEven(4)).toBe(true);
});

test('Verifica se 5 é ímpar', () => {
    expect(isEven(5)).toBe(false);
});
