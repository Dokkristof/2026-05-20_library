import request from 'supertest'
import app from '../app/app.js'

describe('/api/books', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /books ', async () => {
      await request(app)
        .post('/api/books')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

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
        .put('/api/books/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /books/:id', async () => {
      await request(app)
        .delete('/api/books/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
