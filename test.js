var readObj = require('./main.js');


var object = {
  person_one: {
    name: 'james',
    age: 13,
    friends: [{name: 'johann'}, 'steve']
  },
  person_two: {
    name: 'bob',
    age: 13
  }
};

var steps = readObj(object)
console.log(steps.next());
console.log(steps.next());
console.log(steps.next());
console.log(steps.next());
console.log(steps.next());
console.log(steps.next());
console.log(steps.next());