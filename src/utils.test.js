const { addNumbers } = require('./utils');

test('Suma dos números correctamente', () => {
    let result = addNumbers(2, 3);
    expect(result).toBe(5);
})
