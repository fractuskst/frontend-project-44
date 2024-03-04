import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calculate = (num1, num2, sign) => {
  let expression = 0;
  switch (sign) {
    case '+':
      expression = num1 + num2;
      break;
    case '-':
      expression = num1 - num2;
      break;
    case '*':
      expression = num1 * num2;
      break;
    default:
      expression = null;
  }
  return expression;
};

const taskCalc = 'What is the result of the expression?';

const answerCalc = () => {
  const randNum1 = getRandomInt(0, 25);
  const randNum2 = getRandomInt(0, 11);

  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, 2)];

  const question = `${randNum1} ${operator} ${randNum2}`;

  const result = calculate(randNum1, randNum2, operator);

  return [question, result.toString()];
};

const calc = () => {
  rules(taskCalc, answerCalc);
};

export default calc;
