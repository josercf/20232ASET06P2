const index = require('./index')


describe('[Calcular salario líquido]', () => {
    test('deve retornar salario liquido calculado', () => {
        const salario = index.calcularSalarioLiquido(3000, 0);

        //{descontoINSS, descontoIRRF, salarioLiquido};
        expect(salario.descontoINSS).toEqual(263.06);//269
        expect(salario.descontoIRRF).toEqual(46.87);
        expect(salario.salarioLiquido).toEqual(2690.07);
        //https://valorinveste.globo.com/ferramentas/calculadoras/calculadora-salario-liquido/
    });
});