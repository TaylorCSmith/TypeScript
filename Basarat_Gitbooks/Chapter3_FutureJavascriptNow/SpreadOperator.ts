// spread operator... spreads the elements of an array or object... 

// apply7
// spread an array into function arguments... previously would need to use Function.prototype.apply
function foo(x: number, y: number, z: number) { };
var args = [0, 1, 2];
foo.apply(null, args);

// now can currently just do this...
function foob(x: number, y: number, z: number) { };
var args = [0, 1, 2];
foob(...args); 


// array assignment
// easily place an expanded version of an array into another array...
var list = [1, 2]; 
list = [...list, 3, 4];
console.log(list); // [1, 2, 3, 4]

// can put expanded array into any postition...
var list = [1, 2,];
list = [0, ...list, 4];
console.log(list); // [0, 1, 2, 4]


// object spreading
/*
const point2D = {x: 1, y:2};
const point3D = {...point2D, z: 3};
*/

// for objects... where you put the spread matters... what comes first is overriden by what comes later... example: 
const point2D = {x: 1, y: 2};
const anotherPoint3D = {x: 4, z: 4, ...point2D};
console.log(anotherPoint3D); // {x: 1, y: 2, z:4 }
const yetAnotherPoint3D = {...point2D, x: 5, z:4 }
console.log(yetAnotherPoint3D); // {x: 5, y: 2, z: 4 } point2D's x was overriden by yetAnotherPoint3D's x... 


// another common use is a simple shallow extend: 

const fooz = {a: 1, b: 2, c: 0};
const barz = {c: 1, d: 2};
/** merge foo and bar */
const foobar = {...fooz, ...barz};
// foobar is now {a: 1, b: 2, c: 1, d: 2} <-- what comes first is overwritten by what comes last... 

