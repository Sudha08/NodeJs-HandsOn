
// covers how to use a module & different module patterns

module.exports.counter = function(arr) {
    return 'There are ' + arr.length + ' elements in the array';
};

module.exports.adder = function(a,b){
  return `The sum of 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi
// };