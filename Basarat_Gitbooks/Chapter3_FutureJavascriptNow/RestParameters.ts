// rest parameters

function iTakeItAll(first, second, ...allOthers) {
    console.log(allOthers);
}

iTakeItAll('foo', 'bar'); // results in [] blank
iTakeItAll('foo', 'bar', 'bass', 'qux'); // results in ['bas', 'qux']... 

// allows you to accept multiple arguments and get them as an array... 