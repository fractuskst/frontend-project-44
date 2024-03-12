import startGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const findGcd = (number1, number2) => {
  const smallestNumber = Math.sign(number1 - number2) === 1 ? number2 : number1;
  let output = 0;
  let i = 1;
  while (i <= smallestNumber) {
    if (number1 % i === 0 && number2 % i === 0) {
      output = i;
    }
    i += 1;
  }
  return output;
};

const taskGcd = 'Find the greatest common divisor of given numbers.';

const answerGcd = () => {
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);

  const question = `${number1} ${number2}`;

  const result = findGcd(number1, number2);

  return [question, result.toString()];
};

const gcd = () => {
  startGame(taskGcd, answerGcd);
};

export default gcd;
