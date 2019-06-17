process.env.NODE_ENV = 'test'

const chai = require('chai')
const Product = require('../../src/models/Product')
const chaiHttp = require('chai-http')
const server = require('../../index')
const should = chai.should()

chai.use(chaiHttp)

describe('/promotions', async () => {
  let product1
  let product2
  let product3

  beforeEach(async () => {
    try {
      product1 = await Product.create({
        title: 'test',
        price: 10,
        promotion: 'THREE_BY_10'
      })

      product2 = await Product.create({
        title: 'test2',
        price: 5.5,
        promotion: 'BUY_2_PAY_1'
      })

      product3 = await Product.create({
        title: 'test3',
        price: 25
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

  describe('GET', async () => {
    it('should get product 1 discount 0', done => {
      chai
        .request(server)
        .get(`/purchasediscount/${product1._id}/1`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.discount.should.equal(0)
          res.body.priceWithDiscount.should.equal(product1.price)
          done()
        })
    })

    it('should get product 2 discount 0', done => {
      chai
        .request(server)
        .get(`/purchasediscount/${product2._id}/1`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.discount.should.equal(0)
          res.body.priceWithDiscount.should.equal(product2.price)
          done()
        })
    })

    it('should get product 1 discount', done => {
      const discount = product1.price * 3 - 10
      chai
        .request(server)
        .get(`/purchasediscount/${product1._id}/3`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.discount.should.equal(discount)
          res.body.priceWithDiscount.should.equal(10)
          done()
        })
    })

    it('should get product 2 discount', done => {
      chai
        .request(server)
        .get(`/purchasediscount/${product2._id}/2`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.discount.should.equal(product2.price)
          res.body.priceWithDiscount.should.equal(product2.price)
          done()
        })
    })

    it('should get discount 0 for product without promotion', done => {
      const quantity = 10
      const price = product3.price * quantity
      chai
        .request(server)
        .get(`/purchasediscount/${product3._id}/${quantity}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.discount.should.equal(0)
          res.body.priceWithDiscount.should.equal(price)
          done()
        })
    })

    it('should get error for inexistent product', done => {
      const quantity = 10
      const inexistentId = '123023098102aqe123123'
      chai
        .request(server)
        .get(`/purchasediscount/${inexistentId}/${quantity}`)
        .end((err, res) => {
          res.should.have.status(400)
          res.body.error.should.equal('Invalid product id')
          done()
        })
    })

    it('should get error for invalid quantity', done => {
      const quantity = -1
      chai
        .request(server)
        .get(`/purchasediscount/${product1._id}/${quantity}`)
        .end((err, res) => {
          res.should.have.status(400)
          res.body.error.should.equal('Invalid quantity')
          done()
        })
    })
  }) // end GET
}) // end describe /products
