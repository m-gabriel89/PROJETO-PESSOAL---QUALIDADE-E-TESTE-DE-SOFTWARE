// checkNumber.test.js
const checkPositiveNumber = require('./checkNumber');

test('Deve lançar erro para números negativos', () => {
    expect(() => checkPositiveNumber(-5)).toThrow("Número negativo não permitido");
});
