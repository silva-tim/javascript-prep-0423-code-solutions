/* exported getWords */
function getWords(string) {
  let array = [];
  if (!string) {
    return array;
  }
  array = string.split(' ');
  return array;
}
