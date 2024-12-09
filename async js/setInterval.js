x = setInterval(function () {
  console.log("another one");
}, 1000);

y = setInterval(function () {
  console.log("another second");
}, 500);
clearInterval(x);
//can we stop it ?
// intervals have id we can use it
// clearInterval(id); whatever interval started will stop here
clearInterval(y);
