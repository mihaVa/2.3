const chalk = require('colors');
const player = require('play-sound')();

console.log('Hello'.rainbow)
player.play('./sample-3s.wav', (err) => {
    if (err) {
      console.error(`Помилка відтворення звуку: ${err}`);
    }
  });
