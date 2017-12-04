const fs = require("fs");
const test = require("ava");
const prettyHrtime = require("pretty-hrtime");

const day2 = require("./day02");

process.chdir(__dirname);

const cleanInput = str =>
  str
    .toString()
    .split("\n")
    .filter(n => n.length)
    .map(i => i.trim().split(/\s+/));

const testData_p1 = {
  sample: `
5 1 9 5
7 5 3
2 4 6 8
`,
  answer: 18
};

const testData_p2 = {
  sample: `
  5 9 2 8
9 4 7 3
3 8 6 5
`,
  answer: 9
};

const input = fs.readFileSync("input.txt");

test("Day 2 Profile Functions", t => {
  day2.profile(t, cleanInput(input[0]));
  t.pass();
});

test("Day 2, part 1: Example Input", t => {
  const actual = day2.checksum(cleanInput(testData_p1.sample));
  t.is(actual, testData_p1.answer);
});

test("Day 2, part 1: Puzzle Input", t => {
  const start = process.hrtime();
  const solution = day2.checksum(cleanInput(input));
  const end = process.hrtime(start);
  t.log(`Puzzle solution is: ${solution}`);
  t.log(`Completed in ${prettyHrtime(end)}`);
  t.pass();
});

test("Day 2, part 2: Example Input", t => {
  const actual = day2.divChecksum(cleanInput(testData_p2.sample));
  t.is(actual, testData_p2.answer);
});

test("Day 2, part 2: Puzzle Input", t => {
  const start = process.hrtime();
  const solution = day2.divChecksum(cleanInput(input));
  const end = process.hrtime(start);
  t.log(`Puzzle solution is: ${solution}`);
  t.log(`Completed in ${prettyHrtime(end)}`);
  t.pass();
});
