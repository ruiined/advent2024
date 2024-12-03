import { solve } from '../utils';

type Input = string;

function parser(input: string): Input {
  return input;
}

const mulRegex = /mul\(\d+,\d+\)/g;
const conditionalMulRegex = /(?:mul\(\d+,\d+\)|do(?:n't)?\(\))/g;

const multiply = (str: string): number => {
  return str.match(/\d+/g).reduce((mul, n) => mul * Number(n), 1);
};

function part1(input: Input) {
  return input.match(mulRegex).reduce((m, s) => (m += multiply(s)), 0);
}

function part2(input: Input) {
  let allowCalculation = true;

  return input.match(conditionalMulRegex).reduce((acc, str) => {
    if (str === 'do()') {
      allowCalculation = true;
      return acc;
    }

    if (str === "don't()") {
      allowCalculation = false;
      return acc;
    }

    if (!allowCalculation) {
      return acc;
    }

    acc += multiply(str);
    return acc;
  }, 0);
}

solve({ part1, test1: 161, part2, test2: 48, parser });
