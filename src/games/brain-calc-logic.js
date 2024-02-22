import rules from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calc = () => {
  const taskCalc = 'What is the result of the expression?';

  const answerCalc = () => {
    const num1 = getRandomInt(25);
    const num2 = getRandomInt(11);

    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(3)];

    const question = `${num1} ${operator} ${num2}`;

    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }

    return [question, result.toString()];
  };

  rules(taskCalc, answerCalc);
};

export default calc;
