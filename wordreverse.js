function wordReverse(word) {
  let str = '';
  for (let i = 1; i <= word.length; i++) {
    str += word.at(-i);
  }
  return str;
}

