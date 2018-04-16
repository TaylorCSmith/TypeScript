// iterators

// not a typescript or es6 feature... 
// in general... is the following: 

interface Iterator<T> {
    next(value?: any): IteratorResult<T>; 
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

// iterator result is simply a key value pair (value + done boolean):
interface IteratorResult<T> {
    done: boolean;
    value: T; 
}

class Component {
    constructor (public name: string) {}
}

class Frame implements Iterator<Component> {
    private pointer = 0; 

    constructor(public name: string, public components: Component[]) {}

    public next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false, 
                value: this.components[this.pointer++]
            }
        } else {
            return {
                done: true, 
                value: null
            }
        }
    }
}

let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
let iteratorResult1 = frame.next(); //{ done: false, value: Component { name: 'top' } }
let iteratorResult2 = frame.next(); //{ done: false, value: Component { name: 'bottom' } }
let iteratorResult3 = frame.next(); //{ done: false, value: Component { name: 'left' } }
let iteratorResultFour = frame.next(); //{ done: false, value: Component { name: 'right' } }
let iteratorResultFive = frame.next(); //{ done: true, value: mull }