// declaration spaces

/* 
    two type of declaration spaces in TypeScript...
     - variable
     - type
*/ 

// -------------------- type declaration space ---------------------

// constains stuff that can be used as a type annotation... examples:
class Foo {};
interface Bar {}; 
type Bas = {}; 

// therefor... foo, bar, and bas can be used as a type annotation... 
var foo: Foo;
var bar: Bar;
var bas: Bas;

// even though there is an interface 'Bar'.... it can't be used as a variable because it doesn't contribute to the variable declaration space: 
/*
    interface Bar {}; 
    var bar = Bar; // ERROR... cannot find name 'Bar'

    error due to the fact that 'Bar' is not defined in the variable declaration space... 
*/


// ----------------- Variable Declaration Space -------------------

/*
    includes stuff that you can use as a variable... **surprise** 

    classes contribute to BOTH the type and variable declaration spaces

    examples below
*/

class FooTwo {}; 
var someVar = FooTwo;
var someOtherVar = 123; 

// useful because sometimes you would like to pass variables around as classes... 

// things declared with var is ONLY in the variable declaration space... 
/*
    var foo = 123;
    var bar: foo; // error 
*/
