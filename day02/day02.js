const checksum = arr =>
  arr.reduce((total, row) => total + Math.max(...row) - Math.min(...row), 0);

module.exports = { checksum };
