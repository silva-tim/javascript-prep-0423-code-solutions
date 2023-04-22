function whileLoop1() {
  const numbers = [];
  let i = 0;

  while (i < 10) {
    numbers.push(i);
    i++;
  }

  return numbers;
}
console.log('whileLoop1:', whileLoop1());

function whileLoop2() {
  const numbers = [];
  let i = 0;

  while (i < 10) {
    numbers.push(i * 2);
    i++;
  }

  return numbers;
}
console.log('whileLoop2:', whileLoop2());

function forLoop1() {
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }

  return numbers;
}
console.log('forLoop1:', forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const array = [];

  for (const property in object) {
    array.push(property);
  }

  return array;
}
const object = {
  name: 'Tim Silva',
  age: 21,
  hobby: 'skiing',
};
console.log('forInLoop1:', forInLoop1(object));

function forInLoop2(object) {
  const array = [];

  for (const property in object) {
    array.push(object[property]);
  }

  return array;
}
console.log('forInLoop2:', forInLoop2(object));
