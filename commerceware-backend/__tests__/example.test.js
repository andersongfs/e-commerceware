const request = require('supertest')

const server = require('../server')

describe('Product-Route', () => {
  it('should be able to create a new product with valid properties', async () => {
    const response = await request(server)
      .post('/products')
      .send({
        title: 'Product jest',
        price: 50,
        promotion: 0
      })

    expect(response.status).toBe(200)
  })
})
