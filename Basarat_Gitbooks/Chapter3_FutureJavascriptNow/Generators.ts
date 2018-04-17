// generators 

// lazy iterators
function* infiniteSequence() {
    var i = 0;
    while(true) {
        yield i++; 
    }
}

var iterator = infiniteSequence(); 
while(true) {
    console.log(iterator.next()); // {value: xxxx, done: false } the never ending story... 
}

function* idMaker() {
    let index = 0;
    while(index < 3)
        yield index++; 
}

let gen = idMaker();

console.log(gen.next()); // { value: 0, done: false } 
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { done: true } -- doesn't return or display value... since it is done... 

function* generator(){
    console.log('Execution started');
    yield 0; 
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}

var iteratorTwo = generator(); 
console.log('Starting iterator');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// node.js (command prompt)

/*
$ node outside.js
Starting iteration
Execution started
{ value: 0, done: false }
Execution resumed
{ value: 1, done: false }
Execution resumed
{ value: undefined, done: true }
*/

// function only starts execution once next is called on the generator object
// function pauses as soon as a yield statement is encountered
// function resumes when next is called
// --------- i.e. execution of the generator function is controllable by the generator object


// generators allow two way communication
// control the resulting value of the yield expression using iterator.next(valueToInject)
// can throw an exception at the point of the yield expression using iterator.throw(error)

// iterator.next(valueToInject) example:
function* generatorTwo() {
    var bar = yield 'foo'; 
    console.log(bar); // results in bar
}

const iteratorYield = generator(); 
// start execution till first yield value enountered
const foo = iteratorYield.next(); 
console.log(foo.value); // result is foo
// resume execution injecting bar
const nextThing = iteratorTwo.next('bar'); // value of bar injected...

// iterator.throw(error) example:
function* generatorError() {
    try {
        yield 'foo';
    }
    catch (err) {
        console.log(err.message); // bar!
    }
}

var iteratorError = generatorError(); 
var fooError = iteratorError.next(); 
console.log(fooError.value); 
var nextThingError = iteratorError.throw(new Error('bar')); 

/*
summary

 - yield allows generator function to pause communication and pass control to an external system (will be important) 
 - external system can push a value into the generator function body
 - external system can throw an exception into the generator function body

useful for async/await

*/
