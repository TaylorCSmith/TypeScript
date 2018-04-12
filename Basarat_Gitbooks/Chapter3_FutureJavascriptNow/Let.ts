// variables in js are function scoped... the following is a problem with this
var foo = 123;
if (true) {
    var foo = 456;
}

console.log(foo); // 456 (expecting 123 because in other languages, such as C#, setting foo to 456 in the if statement is limited to the scope of the statement)


// 'let' allows you to 'block scope' variables as such: 

var bar = 123;
if (true) {
    let foo = 456;
}

console.log(foo); // results in 123


// another example of 'let' usage... 

var index = 0;
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++ ) {
    console.log(array[index]); // results in 1 2 3
}
console.log(index); // results in 0


// functions actually create a new variable scope... for example: 

var bad = 123; 
function test() {
    var bad = 456; 
}
test();

console.log(bad); // results in 123