import readlineSync from 'readline-sync';

const rules = (task, answer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const questionAndCorrectAnswer = answer();
    console.log(`Question: ${questionAndCorrectAnswer[0]}`);

    const correctAnswer = questionAndCorrectAnswer[1];

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default rules;