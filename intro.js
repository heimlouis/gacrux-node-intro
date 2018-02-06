console.log('Hello from the server');

// Move people to module
//let people = ['Dev', 'Ally', 'Mary', 'Chris'];

// Import what you want to use with require
let peopleModule = require('./people-module');
console.log(peopleModule);
peopleModule.displayPeople();

//Don't have access to anything not exported
//console.log(people);