import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

const taskPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const answerPrime = () => {
  const randomNum = getRandomInt(0, 23);

  const primeInt = isPrime(randomNum);
  const result = (primeInt === true ? 'yes' : 'no');

  return [randomNum, result];
};

const prime = () => {
  rules(taskPrime, answerPrime);
};

export default prime;
