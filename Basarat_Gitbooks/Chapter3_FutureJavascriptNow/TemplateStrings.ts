// template strings

/*
template strings: 
 - String Interpolation 
 - Multiline Strings 
 - Tagged Templates
*/


var lyrics = 'Never gonna give you up'; 
var htmlNoTemplate = '<div>' + lyrics + '</div>';
var htmlWithTemplate = '<div>${lyricsTwo}</div>';

// any expression inside the interpolation is treated as a js expression... ex: 
console.log ('1 and 1 make ${1 + 1}');


// tagged templates
var say = 'a bird in hand > two in the bush'; 
var html = htmlEscape '<div> I would just like to say: ${say}</div>';

function htmlEscape(literals, ...placeholders) {
    let result = ''; 

    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot')
        .replace(/'/g, '&#39')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    result += literals[literals.length - 1];
    return result;
}