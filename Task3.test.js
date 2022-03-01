const Calculator = require('./Task3');

describe('tests', () => {
  const calculator = new Calculator(12, 3);
  const calculator2 = new Calculator(12, 0);

  test('add check', () => {
      expect(calculator.add(12, 3)).toBe(15);
      expect(calculator2.add(12, 0)).toBe(12);
  })

  test('subtract check', () => {
      expect(calculator.subtract(12, 3)).toBe(9);
      expect(calculator2.subtract(12, 0)).toBe(12);
  })

  test('divide check', () => {
      expect(calculator.divide(12, 3)).toBe(4);
      expect(() => Calculator2(12 , 0)).toThrowError();
  })

  test('multiply check', () => {
      expect(calculator.multiply(12, 3)).toBe(36);
      expect(calculator2.multiply(12, 0)).toBe(0);
  })
})