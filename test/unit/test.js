const request = require('supertest')
const app = require('../../app')

let server

describe('Array', () => {
  before(() => {
    server = app.listen(9999)
  })

  after(() => {
    server.close()
  })

  it('should return -1 when the value is not present', (done) => {
    request(server)
      .get('/users')
      .expect(200)
      .expect(res => {
        console.log('res.body ->', res.body)
      })
      .end(done)
  })
})
