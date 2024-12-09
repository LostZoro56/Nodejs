// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(50));

// function createPromiseWithLoop() {
//   return new Promise(function executor(resolve, reject) {
//     for (let i = 0; i < 100000; i++) {}
//     let num = getRandomInt(10);
//     if (num % 2 == 0) {
//       //if random number is even we fulfill
//       resolve(num);
//     } else {
//       //
//       reject(num);
//     }
//   });
// }

// let x = createPromiseWithLoop();
// console.log(x);

// function createPromise() {
//   return new Promise(function execute(resolve, reject) {
//     let x = setTimeout(function giveValue() {
//       return 2;
//     }, 3000);
//     if (x % 2 == 0) {
//       resolve("successfull");
//     } else {
//       resolve("rejected");
//     }
//   });
// }

//x is timer id sent immediatly no blocking or async code here
