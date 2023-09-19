module.exports = {
    calcularDeducaoDependentes: function (qtdeDependente) {
        const valorDeducaoPordependente = 189.59;
        return qtdeDependente * valorDeducaoPordependente;
    },

    calcularSalarioBase: function (salarioBruto, qtdeDependentes) {
        var descontoINSS = this.calcularDescontoINSS(salarioBruto);
        var deducaoDependentes = this.calcularDeducaoDependentes(qtdeDependentes);

        return salarioBruto - descontoINSS - deducaoDependentes;
    },

    encontarAliquotaIRRF: function (salarioBase) {
        if (salarioBase <= 2112) {
            return 0;
        }
        else if (salarioBase >= 2112.01 && salarioBase <= 2826.65) {
            return 0.075;
        }
        else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
            return 0.15;
        }
        else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
            return 0.225;
        }
        else {
            return 0.275;
        }
    },

    encontarDeducaoIRRF: function (aliquota) {
        if (aliquota <= 0) {
            return 0;
        }
        else if (aliquota == 0.075) {
            return 158.4;
        }
        else if (aliquota == 0.15) {
            return 370.4;
        }
        else if (aliquota == 0.225) {
            return 651.73;
        }
        else {
            return 884.96;
        }
    },

    calcularDescontoIRRPF: function (salarioBase) {
        const aliquota = encontarAliquotaIRRF(salarioBase);
        const valorDeducao = encontarDeducaoIRRF(aliquota);

        return salarioBase * aliquota - valorDeducao;
    },

    calcularSalarioLiquido: function (salarioBruto, dependentes) {
        var descontoINSS = calcularDescontoINSS(salarioBruto);

        var salarioBase = calcularSalarioBase(salarioBruto, dependentes);

        var descontoIRRF = calcularDescontoIRRPF(salarioBase);

        return salarioBruto - descontoINSS - descontoIRRF;
    }
}