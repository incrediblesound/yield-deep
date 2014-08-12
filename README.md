Yield Deep
==========
This function takes advantage of generators to return key value pairs of an object where the value is a primitive. Yield deep uses recursion to find the deepest level in nested objects and arrays, yielding the key and value only for primitive values.  

<strong>Use example:</strong>
```javascript
var yd = require('yield-deep');

var object = {
  person_one: {
    name: 'james',
    age: 13,
    friends: [{name: 'johann'}, 'steve']
  },
  person_two: {
    name: 'bob',
    age: 24
  }
};

var objectData = yd(object);

objectData.next() //=> { value: { key: 'name', value: 'james' }, done: false }
objectData.next() //=> { value: { key: 'age', value: 13 }, done: false }
objectData.next() //=> { value: { key: 'name', value: 'johann' }, done: false }
objectData.next() //=> { value: { key: '1', value: 'steve' }, done: false }
objectData.next() //=> { value: { key: 'name', value: 'bob' }, done: false }
objectData.next() //=> { value: { key: 'age', value: 24 }, done: false }
objectData.next() //=> { value: undefined, done: true }
```