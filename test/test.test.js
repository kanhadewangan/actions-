const request = require('supertest');
const app = require('../src/app');

describe('App routes', () => {
  it('GET /health -> 200 { status: "ok" }', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET / -> 200 Hello World! (text)', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello World!');
  });

  it('POST /data echoes json', async () => {
    const payload = { a: 1, b: 'two' };
    const res = await request(app).post('/data').send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Data received', data: payload });
  });

  it('GET /data -> 200 { message: "Data fetched successfully" }', async () => {
    const res = await request(app).get('/data');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Data fetched successfully' });
  });
});