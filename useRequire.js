// covers how to require a module & different module patterns

var op = require('./modulesRequire');

console.log(op.counter(['str1', 'str2', 'str3']));

console.log(op.adder(3,5));

console.log(op.adder(op.pi,5));