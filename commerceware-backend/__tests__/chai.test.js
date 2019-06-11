process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
const should = chai.should()

chai.use(chaiHttp)

describe('get', async () => {
  it('get all', done => {
    chai
      .request(server)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200)
        console.log(res.body)
        res.body.length.should.equal(1)
        done()
      })
  })
})
