const mstring = "Hello, World!";

function reverseString(text){
    let nstring = "";
    for(let i=text.length-1; i>=0; i--){
        nstring+= text[i];
    }
    return nstring;
}

console.log(mstring.toUpperCase());
console.log(mstring.indexOf("World"));
console.log(reverseString(mstring));
console.log(mstring.replace("World!", "Planet"));