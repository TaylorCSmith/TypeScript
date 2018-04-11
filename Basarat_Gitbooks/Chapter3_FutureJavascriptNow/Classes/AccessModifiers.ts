// Access Modifiers

// IMPORTANT !-- access modifier is by default public if not specified
// will result in compile time errors if used incorrectly... 

class FooBase {
    public x: number;
    private y: number; 
    protected z: number;
}

var foo = new FooBase();
foo.x;  // okay
foo.y;  // error
foo.z;  // error 

class FooChild extends FooBase {
    constructor() {
        super ();
        this.x; // okay
        this.y; // error
        this.z; // okay
    }
}