// Statics

class Something {
    static instances = 0;
    constructor() {                     // odd how constructors are used in ts but i'll take it
        Something.instances++;
    }
}

var s1 = new Something(); 
var s2 = new Something();
console.log(Something.instances);      