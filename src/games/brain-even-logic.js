import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isEven = (num) => {
  const result = (num % 2 === 0 ? 'yes' : 'no');
  return result;
};

const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const answerEven = () => {
  const randomNum = getRandomInt(0, 100);

  const result = isEven(randomNum);

  return [randomNum, result];
};

const even = () => {
  rules(taskEven, answerEven);
};

export default even;
