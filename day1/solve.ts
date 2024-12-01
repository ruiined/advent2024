import { solve } from '../utils';

type Input = { left: number[]; right: number[] };

const sort = (input: number[]) => input.sort((a, b) => a - b);

const mapByIdx = (input: string[][], idx: number) =>
  input.map((line) => Number(line[idx]));

function parser(input: string): Input {
  const arr = input
    .split('\n')
    .map((l) => l.split(' ').filter((l) => l !== ''));

  return { left: sort(mapByIdx(arr, 0)), right: sort(mapByIdx(arr, 1)) };
}

function part1({ left, right }: Input) {
  return left.reduce((acc, num, i) => acc + Math.abs(num - right[i]), 0);
}

function part2({ left, right }: Input) {
  const count = right.reduce((acc, num) => {
    acc[num] = (acc[num] ?? 0) + 1;
    return acc;
  }, {});

  return left.reduce((acc, num) => acc + num * (count[num] ?? 0), 0);
}

solve({ part1, test1: 11, part2, test2: 31, parser });
