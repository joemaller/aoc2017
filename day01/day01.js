const sameAsNext = (item, index, arr) => {
  return item == arr[(index + 1) % arr.length];
};

const sumSameAsNext = (total, item, index, arr) => {
  if (item == arr[(index + 1) % arr.length]) {
    total = total + item;
  }
  return total;
};

const sumHalfAround = (total, item, index, arr) => {
  if (item == arr[(index + arr.length / 2) % arr.length]) {
    total = total + item;
  }
  return total;
};

module.exports = { sameAsNext, sumSameAsNext, sumHalfAround };
