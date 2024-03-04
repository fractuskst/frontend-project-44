import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gcdFunc = (num1, num2) => {
  const smallestNum = Math.sign(num1 - num2) === 1 ? num2 : num1;
  let output = 0;
  let i = 1;
  while (i <= smallestNum) {
    if (num1 % i === 0 && num2 % i === 0) {
      output = i;
    }
    i += 1;
  }
  return output;
};

const taskGcd = 'Find the greatest common divisor of given numbers.';

const answerGcd = () => {
  const randNum1 = getRandomInt(1, 50);
  const randNum2 = getRandomInt(1, 50);

  const question = `${randNum1} ${randNum2}`;

  const result = gcdFunc(randNum1, randNum2);

  return [question, result.toString()];
};

const gcd = () => {
  rules(taskGcd, answerGcd);
};

export default gcd;
