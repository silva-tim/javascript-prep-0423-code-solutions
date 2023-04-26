/* exported initial */
function initial(array) {
  const arrayToReturn = [];

  for (let i = 0; i < array.length - 1; i++) {
    arrayToReturn.push(array[i]);
  }
  return arrayToReturn;
}
