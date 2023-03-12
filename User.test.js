const add_transaction = require('./user');
const list = [];

test('Adds Transaction', () => {
    expect(add_transaction(1, list)).toBe(true);
  });

  