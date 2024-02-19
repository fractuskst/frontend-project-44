#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const answer = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 99);
    console.log(`Question: ${randomNum}`);
    const reply = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && reply === 'yes') || (randomNum % 2 !== 0 && reply === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${randomNum % 2 === 0 ? 'yes' : 'no'}'`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

answer();
