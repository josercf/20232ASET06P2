const irrf = require('./irrf')

describe('[Obter faixas IRRF]', () => {
    test('deve retornar 05 elementos', () => {
        const faixas = irrf.obterFaixas();
        expect(faixas.length).toEqual(5);
    });
});

describe('[Encontrar aliquota IRRF]', () => {
    test('deve retornar zero', () => {
        const faixas = irrf.obterFaixas();
        const result = irrf.faixaContemplaValor(100, faixas[0]);
        expect(result).toEqual(true);
    });
});

describe('[Calcular desconto IRRF]', () => {
    test('Salário - deve retornar 46.80 com salário base de 2722.61', () => {
        const result = irrf.calculardesconto(2_722.61);
        expect(result).toEqual(45.80);
    });
});
