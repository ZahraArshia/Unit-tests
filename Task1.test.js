const stringLength = require('./Task1');


test ('invalid lenght' , () => {
  expect(() => stringLength('Hello World')).toThrowError();
  expect(() => stringLength('')).toThrowError();
});
test ('valid lenght' , () => {
  expect(stringLength('Hello')).toBe(5);
  expect(stringLength('Hi')).toBe(2);
});
