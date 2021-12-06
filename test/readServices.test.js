const nock = require('nock');
const expect = require('expect');
const config = require('../src/config');
const fastlyPromises = require('../src/index');
const response = require('./response/readServices.response');

describe('#readServices', () => {
  const fastly = fastlyPromises('923b6bd5266a7f932e41962755bd4254', 'SU1Z0isxPaozGVKXdv0eY');
  let res;

  nock(config.mainEntryPoint)
    .get('/service')
    .reply(200, response.readServices);

  before(async () => {
    res = await fastly.readServices();
  });

  it('response should be a status 200', () => {
    expect(res.status).toBe(200);
  });
  
  it('response body should exist', () => {
    expect(res.data).toBeTruthy();
  });

  it('response body should be an array', () => {
    expect(Array.isArray(res.data)).toBe(true);
  });

  it('response body should be an array of objects', () => {
    res.data.forEach(item => {
      expect(typeof item).toBe('object');
    });
  });

  it('response body should contain all properties', () => {
    res.data.forEach(item => {
      expect(Object.keys(item)).toEqual([
        'comment',
        'customer_id',
        'id',
        'name',
        'version',
        'versions'
      ]);
    });
  });
});
