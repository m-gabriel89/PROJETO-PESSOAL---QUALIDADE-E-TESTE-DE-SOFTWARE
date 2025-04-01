// loadTest.test.js
const processRequest = require('./loadTest');

test('Executar a função 1000 vezes sem erro', () => {
    for (let i = 0; i < 1000; i++) {
        expect(processRequest()).toBe("Processado");
    }
});
