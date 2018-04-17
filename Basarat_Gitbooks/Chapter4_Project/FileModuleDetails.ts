// File Module Details... 

// ES Module Syntax:
// exporting a variable (or type)... prefix with keyword 'export' e.g.

// file 'foot.ts'
export let someVar = 123; 
export type SomeType = {
    foo: string;
};

// exporting a varible or type in a dedicated export statement... 
let someVarTwo = 123; 
type SomeTypeTwo = {
    foo: string;
};
export {
    someVarTwo, 
    SomeTypeTwo
};

// exporting a variable type in a dedicated export statement with renaming... 
export { someVar as aDifferentName }; 

// importing a variable or a type using import...
/*
import { someVar, SomeType } from './FileModuleDetails';
*/

// importing a variable using import with renaming
/*
    import {someVar as aDifferentName } from './foo';
*/ 

// import everything from a module into a name with import * as... 
/*
    import * as foo from './foo';
    // then foo.someVar and foo.SomeTy7pe and anything else that foo exports can be used... 
*/

// import a file ONLY for its side effect with a single import statement
/*
    import 'core-js'; // common polyfill library...
*/

// re-exporting all the items from another module... 
/*
    export * from './foo';
*/

// re-exporting only some items from another module
/* 
    export { someVar } from './foo';
*/

// re-exporting only some items from another module with renaming
/*
    export { someVar as aDifferentName } from './foo';
*/