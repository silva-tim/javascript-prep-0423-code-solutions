/* exported tail */
function tail(array) {
  const arrayToReturn = [];

  for (let i = 1; i < array.length; i++) {
    arrayToReturn.push(array[i]);
  }
  return arrayToReturn;
}
