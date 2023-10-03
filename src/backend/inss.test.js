const inss = require('./inss')

describe('[Calcular desconto progressivo INSS]', () => {
    // test('Salário de R$3.000,00 deve retornar 263.06', () => {
    //     const result = inss.calcularDescontoProgressivo(3000);
    //     expect(result).toEqual(263.06);
    // });

    // test('Salário de R$1.500,00 deve retornar 115.20', () => {
    //     const result = inss.calcularDescontoProgressivo(1500);
    //     expect(result).toEqual(115.20);
    // });
});

describe('[Obter faixas INSS]', () => {
    test('deve retornar 05 elementos', () => {
        const faixas = inss.obterFaixas();
        expect(faixas.length).toEqual(5);
    });
});

describe('[Calcular desconto faixa]', () => {
    test('Faixa 01 deve retornar 99', () => {
        
        
        
    });
});