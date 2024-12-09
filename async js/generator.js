// function* mygenerator() {
//   console.log("inside generator");
//   yield 100;
//   yield 87;
//   yield 90;
//   yield -1;
// }

// const i = mygenerator();
// i.next();

function* gen() {
  console.log("inside generator");
  const x = yield 10;
  const y = x + 30;
  yield y;
}

const it = gen();
console.log(it.next());
console.log(it.next(20));
