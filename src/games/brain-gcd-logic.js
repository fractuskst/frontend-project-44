import rules from '../index.js';

const getRandomInt = (range) => {
  const randomInt = Math.ceil(Math.random() * range);
  return randomInt;
};

const gcd = () => {
  const taskGcd = 'Find the greatest common divisor of given numbers.';

  const answerGcd = () => {
    const randNum1 = getRandomInt(50);
    const randNum2 = getRandomInt(50);
    const smallestInt = Math.sign(randNum1 - randNum2) === 1 ? randNum2 : randNum1;
    const question = `${randNum1} ${randNum2}`;

    let result = 0;
    let i = 1;
    while (i <= smallestInt) {
      if (randNum1 % i === 0 && randNum2 % i === 0) {
        result = i;
      }
      i += 1;
    }
    return [question, result.toString()];
  };
  rules(taskGcd, answerGcd);
};

export default gcd;
