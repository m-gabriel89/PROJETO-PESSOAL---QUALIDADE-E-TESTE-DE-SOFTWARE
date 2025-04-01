// passwordValidator.test.js
const isValidPassword = require('./passwordValidator');

test('Senha válida deve ter pelo menos 8 caracteres', () => {
    expect(isValidPassword('12345678')).toBe(true);
    expect(isValidPassword('1234')).toBe(false);
});
