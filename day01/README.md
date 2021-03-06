# Day 1: [Inverse Captcha][day1]

## Part 1
``` text
The captcha requires you to review a sequence of digits (your puzzle input)
and find the sum of all digits that match the next digit in the list. The
list is circular, so the digit after the last digit is the first digit in
the list.

For example:

  - 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches
    the second digit and the third digit (2) matches the fourth digit.
  - 1111 produces 4 because each digit (all 1) matches the next.
  - 1234 produces 0 because no digit matches the next.
  - 91212129 produces 9 because the only digit that matches the next one
    is the last digit, 9.
```

Part one is a pretty straightforward filter-reduce problem. First, filter the input digits down to only those matching the next digit. Then sum that list. Out of curiosity I did it twice, once as a discrete filter with a simple sum reduce, then as a single reduce.

Filter and reduce:

```js
const sameAsNext = (item, index, arr) => item == arr[(index + 1) % arr.length];
const sum = (total, current) => total + current;

input.filter(sameAsNext).reduce(sum, 0);
```

One compound reduce:
```js
const sumSameAsNext = (total, item, index, arr) => {
  if (item == arr[(index + 1) % arr.length]) {
    total = total + item;
  }
  return total;
};

input.reduce(sumSameAsNext, 0);
```

The single reduce is about 10% faster, though that's only about 50 μs.

## Part 2
``` text
Now, instead of considering the next digit, it wants you to consider the
digit halfway around the circular list. That is, if your list contains 10
items, only include a digit in your sum if the digit 10/2 = 5 steps forward
matches it. Fortunately, your list has an even number of elements.

For example:

  - 1212 produces 6: the list contains 4 items, and all four digits match
    the digit 2 items ahead.
  - 1221 produces 0, because every comparison is between a 1 and a 2.
  - 123425 produces 4, because both 2s match each other, but no other
    digit has a match.
  - 123123 produces 12.
  - 12131415 produces 4.
```

Part two was just a small change. Since I handled the index wrapping with a modulo opreration, it was just a matter of changing the increment from 1 to `arr.length/2`.

The conditional changed from this in part 1:

``` js
if (item == arr[(index + 1) % arr.length]) {
```

to this in part 2:

``` js
if (item == arr[(index + arr.length / 2) % arr.length]) {
```

I still remember learning about the [modulo operator][mod] for the first time. [Asteroids][] made sense. I'm still amazed it's not taught outside of computer science. 




[day1]: http://adventofcode.com/2017/day/1
[Asteroids]: https://en.wikipedia.org/wiki/Asteroids_(video_game)
[mod]: https://stackoverflow.com/questions/17524673/understanding-the-modulus-operator
