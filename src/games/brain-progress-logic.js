import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const progress = (firNum, diff, progressLength = 10) => {
  const arr = [firNum];
  for (let i = 1; i < progressLength; i += 1) {
    arr.push(arr[i - 1] + diff);
  }
  return arr;
};

const taskProgress = 'What number is missing in the progression?';

const answerProgress = () => {
  const firstNum = getRandomInt(0, 15);
  const missingNum = getRandomInt(0, 9);
  const difference = getRandomInt(1, 5);

  const question = progress(firstNum, difference);
  question[missingNum] = '..';

  let result;
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

const progression = () => {
  rules(taskProgress, answerProgress);
};

export default progression;
