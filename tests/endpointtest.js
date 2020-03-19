const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('test the get request for /', test => {
  supertest(app)
    .get('/')
    .expect(200)
    .end((err, result) => {
      test.equal(result.statusCode, 200, 'User uses a get request');
      test.end();
    });
});

tape('test the Endpoint of the register form', test => {
  supertest(app)
    .post('/registered')
    .send({
      userName: 'MYproject',
      userEmail: 'myproject@gmail.com',
      userPassword: 'myproject123'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, result) => {
      test.equal(result.body, 1, 'user signs up successfully');
      test.end();
    });
});
