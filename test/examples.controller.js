import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import {describe} from "mocha";

const expect = chai.expect;

describe('Examples', () => {
  it('should get all examples', () =>
    request(Server)
      .get('/api/v1/examples')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(2);
      }));

  it('should add a new example', () =>
    request(Server)
      .post('/api/v1/examples')
      .send({ name: 'test' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('test');
      }));

  it('should get an example by id', () =>
    request(Server)
      .get('/api/v1/examples/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('test');
      }));
});
