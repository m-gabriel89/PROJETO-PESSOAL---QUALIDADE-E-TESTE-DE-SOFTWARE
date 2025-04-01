// asyncFunction.test.js
const asyncFunction = require('./asyncFunction');

test('A função deve retornar "Sucesso" após 2 segundos', async () => {
    await expect(asyncFunction()).resolves.toBe("Sucesso");
});
