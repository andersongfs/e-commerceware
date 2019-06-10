const request = require('supertest')
const SERVER = 'http://localhost:3333'

describe('GET /products', () => {
  it('should be able to create a new product with valid properties', async () => {
    const product = { title: 'Product jest9', price: 50, promotion: 0 }
    const response = await request(SERVER)
      .post('/products')
      .send({
        title: product.title,
        price: product.price,
        promotion: product.promotion
      })
    console.log(response.text.\"title\")
    expect(response.status).toBe(200)
    expect(response.text).toHaveProperty('title', product.title)
    expect(response.text).toHaveProperty('price', product.price)
    expect(response.text).toHaveProperty('promotion', product.promotion)
  })
})
