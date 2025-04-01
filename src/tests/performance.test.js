// performance.test.js
const slowFunction = require('./performance');

test('Função deve executar abaixo de 500ms', () => {
    const start = Date.now();
    slowFunction();
    const end = Date.now();
    expect(end - start).toBeLessThan(500);
});
