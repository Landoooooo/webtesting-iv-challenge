const server = require('./server');

const request = require('supertest');

const db = require('../data/dbConfig');

describe('GET /', () => {
    it('should return status 200', async () => {
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
        const res = await request(server).get('/');

        expect(res.type).toBe('application/json');
    })

    it('should return a JSON message', async () => {
        const res = await request(server).get('/');

        expect(res.body).toEqual({message: 'Kick, Push, COAST!'});
    })
});

describe('GET /skaters', () => {
    it('should return status 200', async () => {
        const res = await request(server).get('/skaters');

        expect(res.status).toBe(200)
    });

    it('should return list of skaters', async () => {
        const res = await request(server).get('/skaters');

        expect(res.body).toBeTruthy();
    })
});

describe('POST /skaters', () => {
    it('should return a status of 201', async () => {
        const res = await request(server).post('/skaters/:id')
            .send({name: 'Tony Hawk'});

        expect(res.status).toBe(201);
    });
});

describe('DELETE /skaters/:id', () => {
    it('should return a status of 202', async () => {
        const res = await request(server).delete('/skaters/:id');

        expect(res.status).toBe(202);
    })
})