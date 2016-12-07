const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('shuold return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect({ errorMessage: 'Page Not Found' })
        .end(done);
});

it('shuold check if user exists', (done) => {
    var expectedUser = {
        name: 'sasha',
        age: 28
    };

    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude(expectedUser)
        })
        .end(done);
});