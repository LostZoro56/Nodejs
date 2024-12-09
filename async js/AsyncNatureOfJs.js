// function timeConsumingByLoop() {
//   console.log("loop starts");
//   for (let i = 0; i < 10000000; i++) {
//     //some task
//   }
//   console.log("loop ends");
// }

// function timeConsumingByRuntimeFeature0() {
//   console.log("starting timer 0");
//   setTimeout(function exec() {
//     console.log("completed the timer 0");
//     for (let i = 0; i < 1000000; i++) {
//       //some task
//     }
//   }, 5000);
// }

// function timeConsumingByRuntimeFeature1() {
//   console.log("starting timer 1");
//   setTimeout(function exec() {
//     console.log("completed the timer 1");
//   }, 0);
// }

// function timeConsumingByRuntimeFeature2() {
//   console.log("start timer 2");
//   setTimeout(function exec() {
//     console.log("completed the timer 2");
//   }, 200);
// }

// console.log("hi");
// timeConsumingByLoop();
// timeConsumingByRuntimeFeature0();
// timeConsumingByRuntimeFeature1();
// timeConsumingByRuntimeFeature2();
// timeConsumingByLoop();
// console.log("by");

console.log("hello world");

for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    console.log("timer done", i);
  }, 10);
}

for (let i = 0; i < 100000000; i++) {
  //some task
}

console.log("End");
