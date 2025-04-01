const { sub, ehPar, contarCaracteres } = require('./calculadora')

test('A função sub deve retornar 0 ao subtrair -1 e 1',() => {
    expect(sub(-1, 1)).toBe(-2)
})


test('O número 2%0 deve retornar 0', () => {
    expect(ehPar(2)).toBe('O número é par!')
})

test('a palavra viver deve retornar 5', () => {
    expect(contarCaracteres('Viver')).toBe(5)
})