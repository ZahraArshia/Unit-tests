function stringLength(string) {
  if (string.length < 1 ) {
    throw new Error ('less than 1 char');
  }

  if (string.length > 10 ) {
    throw new Error ('more than 10 char');
  }

  return string.length;
}

module.exports = stringLength;