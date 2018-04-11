// closure examples

function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction);
    }

    bar();
}

outerFunction("hello closure");

// functions can access variables from the outer scope even after the outer function has returned 
// variables still bound in the inner function and not dependent on the outer function...

function outerFunctionTwo(arg) {
    var variableInOuterFunctionTwo = arg;
    return function() {
        console.log(variableInOuterFunctionTwo);
    }
}

var innerFunction = outerFunctionTwo("hello closure!!");

innerFunction(); 

// applies to the "revealing module pattern"

function createCounter() {
    let val = 0;
    return {
        increment() {val++},
        getVal() { return val }
    }
}

let counter = createCounter(); 
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());

// side note... 
// NaN stands for Not a Number... 