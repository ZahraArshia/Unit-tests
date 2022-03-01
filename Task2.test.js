const reverseString = require('./Task2');

test ('reverse check' , () => {
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('Hi')).toBe('iH');
});