const inss = require('./inss');
const irrf = require('./irrf');

module.exports = {
    calcularDeducaoDependentes: function (qtdeDependente) {
        const valorDeducaoPordependente = 189.59;
        return qtdeDependente * valorDeducaoPordependente;
    },

    calcularSalarioBase: function (salarioBruto, descontoINSS, qtdeDependentes) {
        let deducaoDependentes = this.calcularDeducaoDependentes(qtdeDependentes);

        const salarioBase = salarioBruto - descontoINSS - deducaoDependentes;
        return salarioBase;
    },
    
    calcularSalarioLiquido: function (salarioBruto, dependentes) {
        var descontoINSS = inss.calcularDescontoProgressivo(salarioBruto);
        
        var salarioBase = this.calcularSalarioBase(salarioBruto, descontoINSS, dependentes);

        var descontoIRRF = irrf.calculardesconto(salarioBase);

        const salarioLiquido = Math.round((salarioBruto - descontoINSS - descontoIRRF) * 100) / 100;
        
        return {descontoINSS, descontoIRRF, salarioLiquido};
    }
}