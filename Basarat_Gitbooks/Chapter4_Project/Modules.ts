// Modules 

// helps avoid putting code into the global namespace... dangerous... leads to naming conflicts... (external) modules recommended. 

// adding an import or export at the root level of a ts file creates a local scope within the file... example: 
export var foo = 123; 
// therefor, foo is no longer in the global namespace... for example... in another file called bar.ts... the following would result in an error
// var bar = foo // ERROR: "cannot find name 'foo'"

// to use files from original file (foo.ts) in (bar.ts), need to explicitly import it... example (in bar.ts):
/*
    import { foo } from "./foo"; 
    var bar = foo;

    using an import in bar.ts allows you to both bring stuff in from other files and marks the file bar.ts as a module... and therefore... declarations in bar.ts will not 'pollute' the global namespace

*/