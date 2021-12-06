const expect = require('expect');
const fastlyPromises = require('../src/index');

describe('#constructor', () => {
  const instance = fastlyPromises('923b6bd5266a7f932e41962755bd4254', 'SU1Z0isxPaozGVKXdv0eY');

  it('class instance should exist', () => {
    expect(instance).toBeTruthy();
  });

  it('class instance should have service_id and request properties', () => {
    expect(Object.keys(instance)).toEqual(['service_id', 'request']);
  });
});
