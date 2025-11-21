const request = require('supertest');
const expect = require('chai').expect;
// Basic smoke tests (requires running server and a test DB)
describe('API smoke', function(){
  it('sanity', function(){
    expect(1+1).to.equal(2);
  });
});
