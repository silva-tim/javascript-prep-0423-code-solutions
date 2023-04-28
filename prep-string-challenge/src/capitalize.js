/* exported capitalize */
function capitalize(word) {
  const newWord = word.toLowerCase();
  const firstLetter = newWord.charAt(0).toUpperCase();
  const restOfWord = newWord.slice(1);

  return firstLetter + restOfWord;
}
