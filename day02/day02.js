const prettyHrtime = require("pretty-hrtime");
const numSortReverseCopy = arr => arr.slice().sort((a, b) => b - a);

const checksum = arr =>
  arr.reduce((total, row) => total + Math.max(...row) - Math.min(...row), 0);

const findQuotient = arr => {
  let result;
  const nums = numSortReverseCopy(arr);
  divLoop: while (nums.length) {
    const dividend = nums.shift();
    for (let divisor of nums) {
      if (divisor <= dividend / 2 && dividend % divisor === 0) {
        result = dividend / divisor;
        break divLoop;
      }
    }
  }
  return result;
};

/**
 * Basically the same as findQuotient, but not as nice
 */
const findQuotientTrunc = arr => {
  let result;
  const nums = numSortReverseCopy(arr);
  divLoop: while (nums.length) {
    const dividend = nums.shift();
    for (let divisor of nums) {
      if (divisor <= dividend / 2) {
        result = dividend / divisor;
        if (result == Math.trunc(result)) {
          break divLoop;
        }
      }
    }
  }
  return result;
};

/**
 * This turned out to be slower than the looped version
 */
const findQuotientReduce = arr => {
  const nums = numSortReverseCopy(arr);

  return nums.reduce((result, dividend, index, arr) => {
    if (result !== 0) return result;
    return arr.reduce((quotient, divisor) => {
      if (divisor <= dividend / 2 && dividend % divisor === 0) {
        quotient = dividend / divisor;
      }
      return quotient;
    }, 0);
  }, 0);
};

const divChecksum = arr =>
  arr.reduce((total, row) => total + findQuotient(row), 0);

const profile = (t, row) => {
  const iterations = 1000000;
  let start, end;

  start = process.hrtime();
  for (let x = 0; x < iterations; x++) {
    findQuotient(row);
  }
  end = process.hrtime(start);
  t.log("modulo: " + prettyHrtime(end));
  start = process.hrtime();
  for (let x = 0; x < iterations; x++) {
    findQuotientTrunc(row);
  }
  end = process.hrtime(start);
  t.log("trunc: " + prettyHrtime(end));

  start = process.hrtime();
  for (let x = 0; x < iterations; x++) {
    findQuotientReduce(row);
  }
  end = process.hrtime(start);
  t.log("reduce: " + prettyHrtime(end));
};

module.exports = { checksum, divChecksum, profile };
