import startGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const operators = ['+', '-', '*'];

const calculate = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const taskCalc = 'What is the result of the expression?';

const answerCalc = () => {
  const number1 = getRandomInt(0, 25);
  const number2 = getRandomInt(0, 11);

  const operator = operators[getRandomInt(0, 2)];

  const question = `${number1} ${operator} ${number2}`;

  const result = calculate(number1, number2, operator);

  return [question, result.toString()];
};

const calc = () => {
  startGame(taskCalc, answerCalc);
};

export default calc;
