import { solve } from '../utils';

type Input = {
  rules: Record<number, number[]>;
  production: number[][];
};

function parser(input: string): Input {
  const [rulesArr, production] = input.split('\n\n').map((s) => s.split('\n'));

  const rules = rulesArr.reduce((acc, curr) => {
    const [before, after] = curr.split('|');

    if (!acc[before]) {
      acc[before] = [];
    }

    acc[before].push(Number(after));

    return acc;
  }, {});

  return {
    rules,
    production: production.map((p) => p.split(',').map((n) => Number(n))),
  };
}

const middleOf = (arr: number[]) => arr[Math.floor(arr.length / 2)];

function part1({ rules, production }: Input) {
  return production.reduce((acc, curr) => {
    const incorrectNumbers = [];

    for (let i = curr.length - 1; i >= 0; i--) {
      const num = curr[i];

      if (incorrectNumbers.includes(num)) {
        return acc;
      }

      incorrectNumbers.push(...(rules[num] ?? []));
    }

    acc += middleOf(curr);
    return acc;
  }, 0);
}

function part2({ rules, production }: Input) {
  return production.reduce((acc, nums) => {
    let isIncorrect = false;

    for (let i = nums.length - 1; i >= 0; i--) {
      for (let idx = 0; idx < i; idx++) {
        if (rules[nums[i]]?.includes(nums[idx])) {
          nums.splice(i, 0, ...nums.splice(idx, 1));
          isIncorrect = true;
          i++;
        }
      }
    }

    if (isIncorrect) {
      acc += middleOf(nums);
    }

    return acc;
  }, 0);
}

solve({ part1, test1: 143, part2, test2: 217, parser });
