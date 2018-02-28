// test de la aplicacion
// Hacer referencia a la libreria de utilidad, supertest permite hacer peticiones http
const request = require('supertest')
const app = require('../app')
// mocha
// describir aplicacion a probar
describe('app', () => {
  // describir mediante frases como se comportara
  it('Should serve html on index', (done) => {
    request(app).get('').expect('Content-Type', /html/).expect(200, done)
  })
})
