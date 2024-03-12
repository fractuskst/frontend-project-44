import startGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const progress = (firstNumber, difference, progressionLength = 10) => {
  const arr = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(arr[i - 1] + difference);
  }
  return arr;
};

const taskProgress = 'What number is missing in the progression?';

const answerProgress = () => {
  const firstNumber = getRandomInt(0, 15);
  const difference = getRandomInt(1, 5);

  const question = progress(firstNumber, difference);
  const missingNumber = getRandomInt(0, question.length - 1);

  const result = question[missingNumber];
  question[missingNumber] = '..';

  return [question.join(' '), result.toString()];
};

const progression = () => {
  startGame(taskProgress, answerProgress);
};

export default progression;
