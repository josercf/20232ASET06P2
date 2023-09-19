module.exports = {
    obterFaixas: function () {
        let faixas = [];

        const faixa01 = { inicioFaixa: 0, fimFaixa: 2112.00, aliquota: 0, deducao: 0 }
        const faixa02 = { inicioFaixa: 2112.01, fimFaixa: 2826.65, aliquota: 0.075, deducao: 158.4 }
        const faixa03 = { inicioFaixa: 2826.66, fimFaixa: 3751.05, aliquota: 0.15, deducao: 370.4 }
        const faixa04 = { inicioFaixa: 3751.06, fimFaixa: 4664.68, aliquota: 0.225, deducao: 651.73 }
        const teto = { inicioFaixa: 4664.69, fimFaixa: 1_000_000, aliquota: 0.275, deducao: 884.96 }

        faixas.push(faixa01, faixa02, faixa03, faixa04, teto);

        return faixas;
    },

    encontrarFaixa: function(salarioBase){
        let faixas = this.obterFaixas();

        for (let i = 0; i < faixas.length; i++) {
            const faixaAtual = faixas[i];

            if (salarioBase >= faixaAtual.inicioFaixa && 
                salarioBase <= faixaAtual.fimFaixa) {
                const descontoFaixa = this.calcularDescontoFaixa(faixaAtual);
                descontoFaixas.push(descontoFaixa);
            }
            else {
                const faixaAnterior = faixas[i - 1];
                const descontoFaixa = this.calcularDescontoResidual(salarioBase, faixaAnterior, faixaAtual);
                descontoFaixas.push(descontoFaixa);
                break;
            }
        }
    }

    calcularDeducaoDependentes: function (qtdeDependente) {
        const valorDeducaoPordependente = 189.59;
        return qtdeDependente * valorDeducaoPordependente;
    },

    calcularSalarioBase: function(salarioBruto, valorINSS, qtdeDependente){
        let deducaoDependentes = this.calcularDeducaoDependentes(qtdeDependente);
        let salarioBase = salarioBruto - valorINSS - deducaoDependentes;
        
        return salarioBase
    },

   


    calcularDescontoProgressivo: function (salarioBase) {
        let descontoFaixas = [];
        let faixas = this.obterFaixas();

        for (let i = 0; i < faixas.length; i++) {
            const faixaAtual = faixas[i];

            if (salarioBase >= faixaAtual.fimFaixa) {
                const descontoFaixa = this.calcularDescontoFaixa(faixaAtual);
                descontoFaixas.push(descontoFaixa);
            }
            else {
                const faixaAnterior = faixas[i - 1];
                const descontoFaixa = this.calcularDescontoResidual(salarioBase, faixaAnterior, faixaAtual);
                descontoFaixas.push(descontoFaixa);
                break;
            }
        }

        let descontoIRRF = descontoFaixas.reduce((acumulado, atual) => acumulado + atual, 0);

        //(n * 100) / 100 - utilizado para fazer o arredondamento para 2 casas decimais
        return Math.round(descontoIRRF * 100) / 100;
    }
}