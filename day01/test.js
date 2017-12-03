const fs = require("fs");
const test = require("ava");
const prettyHrtime = require("pretty-hrtime");

const day1 = require("./day01");

process.chdir(__dirname);

const cleanInput = str => str.toString().split("").map(n => parseInt(n, 10));
const sum = (total, current) => total + current;

const testData = [
  { sample: "1122", answer: 3 },
  { sample: "1111", answer: 4 },
  { sample: "1234", answer: 0 },
  { sample: "91212129", answer: 9 }
];

const input = fs.readFileSync("input.txt");

test("Day 1, part 1: Example Input", t => {
  testData.map(n => {
    const actual = cleanInput(n.sample).reduce(day1.sumSameAsNext, 0);
    t.is(actual, n.answer);
  });
});

test("Day 1, part 1: Puzzle Input", t => {
  const start = process.hrtime();
  const solution = cleanInput(input).reduce(day1.sumSameAsNext, 0);
  const end = process.hrtime(start);
  t.log(`Puzzle solution is: ${solution}`);
  t.log(`Completed in ${prettyHrtime(end)}`);
  t.pass();
});