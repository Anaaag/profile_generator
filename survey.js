const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (answer) => {
  console.log(`Your name is ${answer}.`);
  rl.question('What is your favorite hobby? ', (answer) => {
    console.log(`Your favorite hobby is ${answer}.`);
    rl.question('What is your favorite food? ', (answer) => {
      console.log(`Your favorite food is ${answer}.`);
      rl.question('Which sport is your absolute favorite? ', (answer) => {
        console.log(`Your favorite sport is ${answer}.`);
        rl.question('What is your superpower? ', (answer) => {
          console.log(`Your super is ${answer}.`);
          rl.close()
        });
      });
    });
  });
});



