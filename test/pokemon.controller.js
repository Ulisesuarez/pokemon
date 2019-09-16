import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import { describe } from 'mocha';

const expect = chai.expect;
let id = '';
describe('Pokemon', () => {
  it('should get all pokemon', () =>
    request(Server)
      .get('/api/pokemon/all')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.length(809);
      }));

  it('should add a new pokemon', () =>
    request(Server)
      .post('/api/pokemon/create')
      .send({ name: 'test', num: 9999, type: ['Test'] })
      .expect('Content-Type', /json/)
      .then(r => {
        id = r.body._id;
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test');
      }));

  it('should update a pokemon by id', () =>
    request(Server)
      .put('/api/pokemon/' + id + '/update')
      .send({ type: ['Test', 'Electric'] })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('type')
          .of.length(2);
      }));
});
