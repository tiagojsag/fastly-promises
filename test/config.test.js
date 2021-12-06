const expect = require('expect');
const config = require('../src/config');

describe('#mainEntryPoint', () => {
  it('property should exist', () => {
    expect(config.mainEntryPoint).toBeTruthy();
  });

  it('property should be a string', () => {
    expect(typeof config.mainEntryPoint).toBe('string');
  });
});
