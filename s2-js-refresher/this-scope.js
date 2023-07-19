const person = {
  name: 'Max',
  age: 33,
  // this is not available in arrow functions, it refers to the global scope
  /*greet: () => {
    console.log('Hi, I am ' + this.name);
  }*/

  //to fix the above issue, we can use old function syntax
  /*
  greet: function() {
    console.log('Hi, I am ' + this.name);
  }*/

  //or we can use the new syntax
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

person.greet();