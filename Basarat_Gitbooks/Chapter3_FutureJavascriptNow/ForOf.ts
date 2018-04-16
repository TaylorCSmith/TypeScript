// for... of 

// the following would return the index but not the value...
var someArray = [9, 2, 5];
for (var item in someArray) {
    console.log(item); // 0, 1, 2
}


// this is why for...of exists in TS... the following iterates over the array correctly...
for (var items of someArray) { // someArray defined on line 4
    console.log(items); // 9, 2, 5
}

// the JS generated
for (var _i = 0; _i <someArray.length; _i++) {
    var items = someArray[_i];
    console.log(items);
}


// typescript also has no trouble going through a string character by character...
var hello = "is it me you're looking for? of course!"; 
for (var char of hello) {
    console.log(char); 
}


// limitations
// not targeting ES6 or above will cause problems with type...of 