//app.js
const index = require('./index');
const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
 
// GET /aplicarDesconto
app.post('/calcular-salario', (req, res) => {
    try {
        const salarioBruto = parseFloat(req.body.salarioBruto);
        const dependentes = parseFloat(req.body.dependentes);
        const memoriaCalculo = index.calcularSalarioLiquido(salarioBruto, dependentes);
        res.json(memoriaCalculo);    
    } catch (error) {
        console.error(error);
    }
    
})
 
if (require.main === module) {
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando!')
}
 
module.exports = app