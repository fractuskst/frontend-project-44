import startGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isEven = (number) => {
  const result = (number % 2 === 0);
  return result;
};

const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const answerEven = () => {
  const number = getRandomInt(0, 100);

  const result = isEven(number) ? 'yes' : 'no';

  return [number, result];
};

const even = () => {
  startGame(taskEven, answerEven);
};

export default even;
