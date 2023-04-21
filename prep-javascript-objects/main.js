const person = {
  firstName: 'Joe',
  lastName: 'Smith',
  hobby: 'Pickleball',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is: ", fullName);

person.job = 'Janitor';
console.log("The person's job is: ", person.job);

person['previousJob'] = 'Car Salemans';
console.log('Their previous job was: ', person['previousJob']);

console.log(person);
