var app = require('../app');
var supertest = require('supertest');

describe("returns a json response with place search information", (done) => {
    beforeEach(() => {
        request = supertest(app)
            .get("/places")
            .set('Accept', 'application/json')
    });


    it("returns a json response", (done) => {
        request
            .expect('Content-type', /json/)
            .expect(200, done);
    });
});
