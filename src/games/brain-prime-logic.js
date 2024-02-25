import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';
import isPrime from '../isPrime.js';

const prime = () => {
  const taskPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const answerPrime = () => {
    const randomNum = getRandomInt(23);

    const question = randomNum;

    let result;

    const primeInt = isPrime(question);
    if (primeInt === true) {
      result = 'yes';
    } else {
      result = 'no';
    }

    return [question, result];
  };
  rules(taskPrime, answerPrime);
};

export default prime;
