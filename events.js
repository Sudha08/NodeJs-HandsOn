var events = require('events');
// var util = require('util'); // module to inherit things from NodeJs objects

// javascript events eg: onClick, onLoad, onchange, onmouseover, onmouseout, onkeydown

// we can create custom events in Node JS

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(msg) { // event listener
    console.log(msg);
});

myEmitter.emit('someEvent', 'The event was emitted'); // event emitter

// var Person = function(name) {
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var sudha = new Person('Sudha');
// var thils = new Person('Thils');
// var jay = new Person('Jay');
// var people = [sudha, thils, jay];

// people.forEach(function(person) {
//     person.on('speak', function(msg) {
//         console.log(person.name + ' said: ' + msg);
//     });
// });

// sudha.emit('speak', 'Hey dudes');
// thils.emit('speak', 'I want curry');