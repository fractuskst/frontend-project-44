import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const progression = () => {
  const taskProgress = 'What number is missing in the progression?';

  const answerProgress = () => {
    const firstNum = getRandomInt(15);
    const missingNum = getRandomInt(10);
    const difference = Math.ceil(Math.random() * 5);

    const question = [firstNum];
    for (let i = 1; i < 10; i += 1) {
      question.push(question[i - 1] + difference);
    }
    question[missingNum] = '..';

    let result = 0;
    let i = 0;
    while (i < question.length) {
      if (question[i] === '..') {
        if (i === 0) {
          result = question[i + 1] - difference;
        } else {
          result = question[i - 1] + difference;
        }
      }
      i += 1;
    }
    return [question.join(' '), result.toString()];
  };
  rules(taskProgress, answerProgress);
};

export default progression;
