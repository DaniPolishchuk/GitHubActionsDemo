const add = require('./index');
const assert = require('assert');

describe('Add Function', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });
});

//fdsfefsafasgas