// destructuring makes code more readable and maintainable by reducing line count and making intent clear... array destruction allows you to use arrays as though they were tuples


// structuring in JS is the object literal...

var foo = {
    bar: {
        bas: 123
    }
};


// destructuring example

var rect = { x: 0, y: 10, width: 15, height: 20 };
//destructuing assignment
var {x, y, width, height } = rect; 
console.log(x, y, width, height); // 0, 10, 15, 20

rect.x = 10; 
({x, y, width, height} = rect); 
console.log(x, y, width, height); // 10, 10, 15, 20
// destructing allows you to change only x without having to pick off x, y, width, height one by one from rect; 


// assign an extracted variable to a new variable name... 
// structure
const obj = {'some property': 'some value'};

// destructure
const {'some property': someProperty } = obj;
console.log(someProperty === 'some value'); // true


// can get 'deep' data as well... 
// using foo from line 6
var {bar: {bas}} = foo; // same as saying 'var bas foo.bar.bas;'


// object destructing with rest

var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};
console.log(w, x, remaining); // results in 1, 2, {y: 3, z:4}

// rest can also be used to ignore certain properties: 
function goto(point2D: {x: number, y: number}) {
    // code that will break if you pass in an object with more items than desired
}
const point3D = {x: 1, y: 2, z: 3}; 
const {z, ...point2D} = point3D;    // effectively ignoring point3D's x and y that was defined a line above
goto(point2D);


// array destruction
// how to swap two variables without using a third one? typescript solution: 
var x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // results in 2, 1               that's pretty fly


// array destructuring with rest...

var [x, y, ...remaining] = [1, 2, 3, 4]; 
console.log(x, y, remaining); // results in 1, 2, [3,4]


// can ignore any index by simply leaving its location empty (i.e. ' ') in the left hand side of the assignment, ex: 
var [x, , ...remaining] = [1, 2, 3, 4];
console.log(x, remaining); // results in 1, [3, 4]