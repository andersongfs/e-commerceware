process.env.NODE_ENV = 'test'

const chai = require('chai')
const Product = require('../../src/models/Product')
const chaiHttp = require('chai-http')
const server = require('../../index')
const should = chai.should()

chai.use(chaiHttp)

describe('/products', async () => {
  let product1
  let product2

  beforeEach(async () => {
    try {
      product1 = await Product.create({
        title: 'test',
        price: 10,
        promotion: 0
      })

      product2 = await Product.create({
        title: 'test2',
        price: 5.5,
        promotion: 1
      })
    } catch (error) {
      console.log(error)
    }
  })

  afterEach(async () => {
    try {
      await Product.deleteMany({})
    } catch (error) {
      console.log(error)
    }
  })

  describe('get', async () => {
    it('get all', done => {
      chai
        .request(server)
        .get('/products')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.length.should.equal(2)
          done()
        })
    })
  }) // end get
}) // end describe /products
