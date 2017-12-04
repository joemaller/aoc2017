const fs = require("fs");
const test = require("ava");
const prettyHrtime = require("pretty-hrtime");

const day1 = require("./day01");

process.chdir(__dirname);

const cleanInput = str => str.toString().split("").map(n => parseInt(n, 10));
const sum = (total, current) => total + current;

const testData_p1 = [
  { sample: "1122", answer: 3 },
  { sample: "1111", answer: 4 },
  { sample: "1234", answer: 0 },
  { sample: "91212129", answer: 9 }
];

const testData_p2 = [
  { sample: "1212", answer: 6 },
  { sample: "1221", answer: 0 },
  { sample: "123425", answer: 4 },
  { sample: "123123", answer: 12 },
  { sample: "12131415", answer: 4 }
];

const input = fs.readFileSync("input.txt");

test("Day 1, part 1: Example Input", t => {
  testData_p1.map(n => {
    const actual = cleanInput(n.sample).filter(day1.sameAsNext).reduce(sum, 0);
    t.is(actual, n.answer);
  });

  testData_p1.map(n => {
    const actual = cleanInput(n.sample).reduce(day1.sumSameAsNext, 0);
    t.is(actual, n.answer);
  });
});

test("Day 1, part 1: Puzzle Input", t => {
  const start = process.hrtime();
  const solution = cleanInput(input).reduce(day1.sumSameAsNext, 0);
  const end = process.hrtime(start);
  t.is(solution, 1182);
  t.log(`Puzzle solution is: ${solution}`);
  t.log(`Completed in ${prettyHrtime(end)}`);
});

test("Day 1, part 2: Example Input", t => {
  testData_p2.map(n => {
    const actual = cleanInput(n.sample).reduce(day1.sumHalfAround, 0);
    t.is(actual, n.answer);
  });
});

test("Day 1, part 2: Puzzle Input", t => {
  const start = process.hrtime();
  const solution = cleanInput(input).reduce(day1.sumHalfAround, 0);
  const end = process.hrtime(start);
  t.is(solution, 1152);
  t.log(`Puzzle solution is: ${solution}`);
  t.log(`Completed in ${prettyHrtime(end)}`);
});
