const index = require('./index')


describe('[Calcular salario líquido]', () => {
    test('deve retornar salario liquido calculado', () => {
        const salario = index.calcularSalarioLiquido(3000, 0);

        //{descontoINSS, descontoIRRF, salarioLiquido};
        expect(salario.descontoINSS).toEqual(108.78);
        expect(salario.descontoIRRF).toEqual(63.28);
        expect(salario.salarioLiquido).toEqual(2827.94);
    });
});