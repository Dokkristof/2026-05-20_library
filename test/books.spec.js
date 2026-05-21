import request from 'supertest'
import app from '../app/app.js'
import { title } from 'process'

describe('/api/books', () => {
    const restype = 'application/json; charset=utf-8'
    let id = null

  it('post /books', async () => {
    
    const res = await request(app)
          .post('/api/books')
          .set('Accept', 'application/json')
          .send({
              title: 'Something',
              isbn: '123456789',
              author: 'John Doe'
          })
          .expect('Content-Type', restype)
          .expect(201)
    
        id = res.body.data.id
  })

    it('get /books', async () => {
        await request(app)
            .get('/api/books')
            .set('Accept', 'application/json')
            .expect('Content-Type', restype)
            .expect(200)
    })

    it('put /books/:id', async () => {
        await request(app)
            .put(`/api/books/${id}`)
            .set('Accept', 'application/json')
            .send({
                title: 'Another',
                isbn: '987654321',
                author: 'Jane Doe',
                totalCopies: '100'
            })
            .expect('Content-Type', restype)
            .expect(200)
    })

    it('delete /books/:id', async () => {
        await request(app)
            .delete(`/api/books/${id}`)
            .set('Accept', 'application/json')
            .expect(200)
    })
})