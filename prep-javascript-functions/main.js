function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 4);
console.log('Add two numbers: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(10);
console.log('Convert hours to minutes: ', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello, ' + name + '!';
}

var getGreetingResult = getGreeting('Tim');
console.log('Greeting: ', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(2, 3);
console.log('Add and multiply by 5: ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(10, 6);
console.log('Multiply and divide by 5: ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(16, 9);
console.log('Subtract two numbers: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * radius * 3.14159;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('Circumference: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Tim', 'Silva');
console.log('Full name: ', getFullNameResult);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(3);
console.log('Cube: ', cubeResult);
