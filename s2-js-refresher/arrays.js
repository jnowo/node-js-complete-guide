const person = {
  name: 'Max',
  age: 33,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

/*const printName = (personData) => {
  console.log(personData.name);
}*/
//above approach is fine, but we can use destructuring to make it better
const printName = ({name}) => {
  console.log(name);
}
printName(person);

//we can also use destructuring to pull out properties from an object and store them in variables
const {name, age} = person;
console.log(name, age);



const hobbies = ['Sports', 'Cooking'];
//we can also use destructuring to pull out properties from an array and store them in variables
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/*
//for loop syntax
for (let hobby of hobbies) {
  console.log(hobby);
}*/

//map return a new array!
/*
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);*/

//it it not true copying, it is just a reference to the original array
const copiedArray = [hobbies];
console.log(copiedArray); // [ [ 'Sports', 'Cooking' ] ] we have an array inside an array

//to fix this, we can use the spread operator
const copiedArray2 = [...hobbies]; //pull out all the elements of hobbies array
console.log(copiedArray2); // [ 'Sports', 'Cooking' ]

//spread operator works with objects too
const copiedPerson = {...person}; //pull out all the properties and values of person object
console.log(copiedPerson); // { name: 'Max', age: 33, greet: [Function: greet] }


//we can pass arguments to function, but it is totally not flexible
const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
}
console.log(toArray(1, 2, 3)); // [ 1, 2, 3 ]

//we can use the rest operator to make it flexible
//rest operator is the same as the spread operator, but it is used in function arguments
const toArray2 = (...args) => {
  return args;
}
console.log(toArray2(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]