console.log('Hello World');

setTimeout(function(){
    console.log('Message after 3 secs');
}, 3000);

var time = 0;

setInterval(function(){
    time += 2;
    console.log( time + 'have passed');
}, 2000);

// Mention how to end a process = ctrl + c

var timer = setInterval(function(){
    time += 2;
    console.log( time + 'have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

console.log(__dirname);

console.log(__filename);

// require, exports





