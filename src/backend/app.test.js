const supertest = require('supertest');
const app = require('./app');

test('POST /calcular-salario', async () => {
    const response = await supertest(app)
        .post('/calcular-salario', {"salarioBruto": 3000, "dependentes": 0})
    
    expect(response.statusCode).toEqual(200);
    expect(esponse.body.salarioLiquido).toEqual(2690.07);
    })
    