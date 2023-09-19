const index = require('./index')


describe('[Encontrar aliquota IRRF]', () => {
    test('deve retornar zero', () => {
        const result = index.encontarAliquotaIRRF(0);
        expect(result).toEqual(0);
    });

    test('deve retornar 0.075', () => {
        const result = index.encontarAliquotaIRRF(2113);
        expect(result).toEqual(0.075);
    });

    test('deve retornar 0.15', () => {
        const result = index.encontarAliquotaIRRF(3000);
        expect(result).toEqual(0.15);
    });

    test('deve retornar 0.225', () => {
        const result = index.encontarAliquotaIRRF(4000);
        expect(result).toEqual(0.225);
    });

    test('deve retornar 0.275', () => {
        const result = index.encontarAliquotaIRRF(5000);
        expect(result).toEqual(0.275);
    });
});

describe('[Encontrar dedução IRRF]', () => {
    test('deve retornar zero', () => {
        const result = index.encontarDeducaoIRRF(0);
        expect(result).toEqual(0);
    });

    test('deve retornar 158.4', () => {
        const result = index.encontarDeducaoIRRF(0.075);
        expect(result).toEqual(158.4);
    });

    test('deve retornar 370.4', () => {
        const result = index.encontarDeducaoIRRF(0.15);
        expect(result).toEqual(370.4);
    });

    test('deve retornar 651.73', () => {
        const result = index.encontarDeducaoIRRF(0.225);
        expect(result).toEqual(651.73);
    });

    test('deve retornar 884.96', () => {
        const result = index.encontarDeducaoIRRF(0.275);
        expect(result).toEqual(884.96);
    });
});

describe('[Calcular dedução por dependente]', () => {
    test('Faixa 01 - deve retornar 99', () => {
        const result = index.calcularDescontoINSS(1320);
        expect(result).toEqual(99);
    });

    test('0 dependente - deve retornar 0', () => {
        const result = index.calcularDeducaoDependentes(0);
        expect(result).toEqual(0);
    });

    test('1 dependente - deve retornar 189.59', () => {
        const result = index.calcularDeducaoDependentes(1);
        expect(result).toEqual(189.59);
    });

    test('2 dependentes - deve retornar 379.18', () => {
        const result = index.calcularDeducaoDependentes(2);
        expect(result).toEqual(379.18);
    });
});
