var should = require('chai').should(),
    supertest = require('supertest'),
    api = supertest('http://localhost:3000/api/v1');

describe('Authentication', function() {

  it('errors if wrong basic auth', function(done) {
    api.get('/multas')
    .set('x-api-key', '123myapikey')
    .auth('incorrect', 'credentials')
    .expect(401, done);
  });

  it('errors if bad x-api-key header', function(done) {
    api.get('/multas')
    .auth('correct', 'credentials')
    .expect(401)
    .expect({error:'Bad or missing app identification header'}, done);
  });

});


describe('/multas', function() {

  it('returns multas description as JSON', function(done) {
    api.get('/multas')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.have.property('descripcion').and.be.instanceof(Array);
      done();
    });
  });

});
