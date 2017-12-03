# [Day 2: Corruption Checksum][day]

## Part 1
``` text
The spreadsheet consists of rows of apparently-random numbers. To make sure
the recovery process is on the right track, they need you to calculate the
spreadsheet's checksum. For each row, determine the difference between the
largest value and the smallest value; the checksum is the sum of all of
these differences.

For example, given the following spreadsheet:

5 1 9 5
7 5 3
2 4 6 8

  - The first row's largest and smallest values are 9 and 1, and their
    difference is 8.
  - The second row's largest and smallest values are 7 and 3, and their
    difference is 4.
  - The third row's difference is 6.
  In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.
```

So far, this year could be called Advent of Map-Reduce. Part one was pretty simple, after some mildly yucky text splitting, the checksum was nearly a one-line reduce function. The fun part was getting to use the [ES6 Spread Operator][spread] to call Math.min and Math.max with each item in the row as a sequential argument. Made for a very quick solution:

``` js
arr.reduce((total, row) => total + Math.max(...row) - Math.min(...row), 0);
```

I do kind of hate the dangling `0` before the end of the reduce call. Very easy to overlook. 

[day]: http://adventofcode.com/2017/day/2
[spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
