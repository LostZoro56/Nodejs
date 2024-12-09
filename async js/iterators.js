function fetchNextElement(arr) {
  let idx = 0;
  function next() {
    if (idx >= arr.length) {
      return undefined;
    }
    const newElement = arr[idx];
    idx++;
    return newElement;
  }
  return next;
}

const autoFetcher = fetchNextElement([1, 2, 3, 4, 5]);
console.log(autoFetcher.next());
console.log(autoFetcher.next());
