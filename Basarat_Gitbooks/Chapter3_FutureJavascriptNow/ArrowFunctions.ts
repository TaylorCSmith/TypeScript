// Arrow functions aka... lambda functions woot woot

var inc = (x) => x+1; //lambda... syntax a little different

// pure javascript class...
/*
function Person(age) {
    this.age = age;
    this.growOld = function() {
        this.age++;
    }
}
var person = new Person(1); 
setTimeout(person.growOld, 1000); 

setTimeout(function() {console.log(person.age); }, 2000);
*/

// same using lambda

function Person(age) {
    this.age = age; 
    this.growOld = () => {
        this.age++;
    }
}

var person = new Person(1); 
setTimeout(person.growOld, 1000);

setTimeout(function() {console.log(person.age); }, 2000); // 2 woot woot

// important to note that using lambda functions is only really useful if other people are going to be using the function... if not... might as well use 'this' i.e.: 

let _self = this; 
something.each(function() {
    console.log(_self);         // lexically scoped value
    console.log(this);          // library passed value
});

// arrow functions and inheritance

class Adder {
    constructor (public a: number) {}
    // function safe to pass around...
    add = (b: number): number => {
        return this.a + b;
    }
}

class ExtendedAder extends Adder {
    // creating a copy of the parent...
    private superAdd = this.add;
    // create override
    add = (b: number): number => {
        return this.superAdd(b);
    }
}

// quick object return

// need a function that returns a simple object literal... the following is the WRONG WAY to do it... 
var food = () => {
    bar: 123                // vs code is intelligent enough to notify that this is bad bad bad
};

// CORRECT WAY:
var foo = () => ({
    bar: 123
});