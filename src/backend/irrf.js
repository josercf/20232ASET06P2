module.exports = {
    obterFaixas: function () {
        let faixas = [];

        const faixa01 = { inicioFaixa: 0, fimFaixa: 2112.00, aliquota: 0, deducao: 0 };
        const faixa02 = { inicioFaixa: 2112.01, fimFaixa: 2826.65, aliquota: 0.075, deducao: 158.4 };
        const faixa03 = { inicioFaixa: 2826.66, fimFaixa: 3751.05, aliquota: 0.15, deducao: 370.4 };
        const faixa04 = { inicioFaixa: 3751.06, fimFaixa: 4664.68, aliquota: 0.225, deducao: 651.73 };
        const teto = { inicioFaixa: 4664.69, fimFaixa: 1000000, aliquota: 0.275, deducao: 884.96 };

        faixas.push(faixa01, faixa02, faixa03, faixa04, teto);

        return faixas;
    },

    faixaContemplaValor: function(valor, faixa)
    {
        return valor >= faixa.inicioFaixa && 
               valor <= faixa.fimFaixa;
    },

    calcularDescontoFaixa: function (salarioBase, faixa) {
        if(faixa.aliquota == 0){
            return 0.0;
        }

        let descontoFaixa = salarioBase * faixa.aliquota;
        let descontoLiquido = 0;
        
        if(descontoFaixa > 0){
            descontoLiquido = descontoFaixa - faixa.deducao;
        }
       
        return descontoLiquido;
    },

    calculardesconto: function(salarioBase){
        let faixas = this.obterFaixas();

        for (let i = 0; i < faixas.length; i++) {
            const faixaAtual = faixas[i];

            if (this.faixaContemplaValor(salarioBase, faixaAtual)) {
                const descontoFaixa = this.calcularDescontoFaixa(salarioBase, faixaAtual);
                return Math.round(descontoFaixa * 100) / 100;
            }
        }

        //(n * 100) / 100 - utilizado para fazer o arredondamento 
        // para 2 casas decimais
        return 0;
    },
}