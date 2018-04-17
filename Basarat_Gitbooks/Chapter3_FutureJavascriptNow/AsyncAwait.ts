// Async Await

/*
"Thought experiment" (simplified)

async function foo() {
    try {
        var val = await getMeAPromise(); 
        console.log(val); 
    }
    catch (err) {
        console.log('Error: ', err.message);
    }
}

Generated JS: 
const foo = wrapToReturnPromise(function* () {
    try {
        var val = yield getMeAPromise(); 
        console.log(val);
    }
    catch(err) {
        console.log('Error: ', err.message);
    }
});



 - when Promise execution continues...
    - if fulfilled... then await will return the value
    - if rejected... an error will be thrown synchronously which can be caught

Magical because it makes async programing as easy as sync... three things needed for the 'thought experiment': 

 - Ability to pause function execution
 - Ability to put a value inside the function
 - Ability to throw an exception inside the function
 
 */


 // await notation example: 

 function delay(milliseconds: number, count: number): Promise<number> {
     return new Promise<number>(resolve => {
         setTimeout(() => {
             resolve(count);
         }, milliseconds)
     });
 }

 // async function always returns a Promise... 
 async function dramaticWelcome(): Promise<void> {
     console.log("hello"); 

     for (let i = 0; i < 5; i++) {
         // await is coverting Promise<number> into a number... 
         const count:number = await delay(500, i);
         console.log(count); 
     }

     console.log("World!");
 }

 dramaticWelcome(); 

// sidenote... mentioned before but put here to avoid possible confusion...
// a double underscore (i.e. __await) is sometimes used to avoid name collisions... since not all browsers are defined by ECMAScript