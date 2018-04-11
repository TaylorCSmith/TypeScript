// abstract 

// abstract classes cannot be directly instantiated... user must create some class that inhertifs from the abstract class.
// abstract members cannot be directly accessed and a child class must provide the functionality

// constructor is optional

class Foo {}
var foo = new Foo(); // fine

// defining using constructor

class FooTwo {
    x: number;
    constructor(x: number) {
        this.x = x;
    }
}

// ^^ common and annoying... so below is allowed instead

class FooThree {
    constructor(public x: number) {

    }
}

// any member of the class outside the class constructor can be initialized... useful in providing default...

class FooFour {
    members = [];
    add (x) {
        this.members.push(x);
    }
}

var fooboo = new FooFour();

fooboo.add(5);