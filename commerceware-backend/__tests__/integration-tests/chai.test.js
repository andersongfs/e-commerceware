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
        promotion: 'THREE_BY_10'
      })

      product2 = await Product.create({
        title: 'test2',
        price: 5.5,
        promotion: 'BUY_2_PAY_1'
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
    it('should get all', done => {
      chai
        .request(server)
        .get('/products')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.length.should.equal(2)
          done()
        })
    })

    it('should get product1', done => {
      chai
        .request(server)
        .get(`/products/${product1._id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.title.should.equal(product1.title)
          res.body.price.should.equal(product1.price)
          res.body.promotion.should.equal(product1.promotion)
          done()
        })
    })

    it('should return error getting inexistent product', done => {
      chai
        .request(server)
        .get('/products/321321321321')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  }) // end GET

  describe('POST', async () => {
    it('should create a new product with promotion', done => {
      const productMock = {
        title: 'POST product',
        price: 100,
        promotion: product1.promotion
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.title.should.equal(productMock.title)
          res.body.price.should.equal(productMock.price)
          res.body.promotion.should.equal(productMock.promotion)
          done()
        })
    })

    it('should create a new product without promotion', done => {
      const productMock = {
        title: 'POST product w/ promo',
        price: 100
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.title.should.equal(productMock.title)
          res.body.price.should.equal(productMock.price)
          done()
        })
    })

    it('should not create a new product w/ title', done => {
      const productMock = {
        price: 100,
        promotion: product1.promotion
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(400)
          done()
        })
    })

    it('should not create a new product empty title', done => {
      const productMock = {
        title: '',
        price: 100,
        promotion: product1.promotion
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(400)
          done()
        })
    })

    it('should not create a new product w/ price', done => {
      const productMock = {
        title: 'w/ price',
        promotion: product1.promotion
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(400)
          done()
        })
    })

    it('should not create a new product negative price', done => {
      const productMock = {
        title: 'negative price',
        price: -50,
        promotion: product1.promotion
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(400)
          done()
        })
    })

    it('should not create a new product w promotion null', done => {
      const productMock = {
        title: 'promotion null',
        price: 100,
        promotion: null
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(400)
          done()
        })
    })

    it('should not create a new product w invalid promotion', done => {
      const productMock = {
        title: 'promotion null',
        price: 100,
        promotion: 'invalidPromotion'
      }
      chai
        .request(server)
        .post('/products')
        .send(productMock)
        .end((err, res) => {
          res.should.have.status(400)
          done()
        })
    })
  }) // end POST
}) // end describe /products
