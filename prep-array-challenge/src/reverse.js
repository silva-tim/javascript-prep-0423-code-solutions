/* exported reverse */
function reverse(array) {
  const arrayToReturn = [];

  for (let i = array.length - 1; i >= 0; i--) {
    arrayToReturn.push(array[i]);
  }
  return arrayToReturn;
}
