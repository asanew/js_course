function countLetters(word) {
  if (typeof word === 'string') {
    return word.trim().length;
  }
  else {
    return null;
  }
}
