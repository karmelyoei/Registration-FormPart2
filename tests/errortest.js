const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('test the 404 Error', test => {
  supertest(app)
    .get('/kkk')
    .expect(200)
    .end((err, result) => {
      test.equal(result.statusCode, 404, 'user receives error 404');
      test.end();
    });
});

tape('test the 400 Error', test => {
  supertest(app)
    .post('/registered')
    .send({
      userName: 'MYproject',
      userEmail: 'myproject',
      userPassword: 'myproject123'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, result) => {
      test.equal(result.statusCode, 400, 'user uses invalid input (error 400)');
      test.end();
    });
});
