import { countBy, sortBy, sum, zip } from 'lodash';
import { solve } from '../utils/typescript';

type Input = string[][];

function parser(input: string): Input {
  const parts = input.split('\n').map((l) => l.split(/\s+/));
  return zip(...parts);
}

function part1(input: Input) {
  const sortedLists = input.map((arr) => sortBy(arr));
  const pairs = zip(...sortedLists);
  return sum(pairs.map(([a, b]) => Math.abs(+a - +b)));
}

function part2(input: Input) {
  const [left, right] = input;
  const counts = countBy(right);
  console.log(left.map((n) => counts[n] ** 2 || 0));
  return sum(left.map((n) => counts[n] * +n || 0));
}

solve({ part1, test1: 11, part2, test2: 31, parser });
