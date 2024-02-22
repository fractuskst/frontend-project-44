import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const even = () => {
  const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const answerEven = () => {
    const randomNum = getRandomInt(100);

    const question = randomNum;
    let result;
    if (question % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [question, result];
  };
  rules(taskEven, answerEven);
};

export default even;
