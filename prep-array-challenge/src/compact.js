/* exported compact */
function compact(array) {
  const arrayToReturn = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arrayToReturn.push(array[i]);
    }
  }
  return arrayToReturn;
}
