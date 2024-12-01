import { solve } from '../utils';

type Input = string[][];

function parser(input: string): Input {
  return input.split('\n').map((l) => l.split(''));
}

function part1(input: Input) {
  return input;
}

function part2(input: Input) {
  return input;
}

solve({ part1, test1: [], part2, test2: [], parser });
