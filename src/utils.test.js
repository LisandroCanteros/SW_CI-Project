const { addNumbers } = require('./utils');

test('Suma dos números correctamente', () => {
    let result = addNumbers(2, 2);
    expect(result).toBe(5);
})