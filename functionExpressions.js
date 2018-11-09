// normal function
function sample() {
    console.log('Hi');
}

sample();

// function expression
var sample2 = function() {
    console.log('Hello');
};

sample2();

// function inside a function
function callFunction(fun) {
    fun();
}

callFunction(sample2);