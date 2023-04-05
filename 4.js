const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Виберіть число 1 або 2 (орел або решка): ', (answer) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;

  if (answer === randomNumber.toString()) {
    console.log('Вітаємо! Ви вгадали!');
  } else {
    console.log('Нажаль, ви програли. Спробуйте ще раз.');
  }

  rl.close();
});