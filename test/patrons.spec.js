import request from 'supertest'
import app from '../app/app.js'

describe('/api/patrons', () => {
    const restype= 'application/json; charset=utf-8'
    let id = null

    it('post /patrons ', async () => {
      const res = await request(app)
        .post('/api/patrons')
        .set('Accept', 'application/json')
        .send({
            idNumber: '123456789',
            fullname: 'Something',
            email: 'something@example.com'
        })
        .expect('Content-Type', restype)
        .expect(201)

      id = res.body.data.id
    })
    it('get /patrons', async () => {
      await request(app)
        .get('/api/patrons')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /patrons/:id', async () => {
      await request(app)
        .put(`/api/patrons/${id}`)
        .set('Accept', 'application/json')
        .send({
            fullname: 'Another',
            email: 'another@example.com'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /patrons/:id', async () => {
      await request(app)
        .delete(`/api/patrons/${id}`)
        .set('Accept', 'application/json')
        .expect(200)
    })
})
