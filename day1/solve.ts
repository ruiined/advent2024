import { countBy, sortBy, sum, zip } from 'lodash';
import { solve } from '../utils/typescript';

type Input = string[][];

function parser(input: string): Input {
  const parts = input.split('\n').map((l) => l.split(/\s+/));
  return zip(...parts);
}

function part1(input: Input) {
  const pairs = zip(...input.map((arr) => sortBy(arr)));
  return sum(pairs.map(([a, b]) => Math.abs(+a - +b)));
}

function part2([left, right]: Input) {
  const counts = countBy(right);
  return sum(left.map((n) => counts[n] * +n || 0));
}

solve({ part1, test1: 11, part2, test2: 31, parser });
