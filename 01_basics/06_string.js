const name = "Amit"  
//ye ek tarika hua string declare karne ka
const roll = 21

//console.log( name + roll + " value")

//ths is not modern way of writing code instead

console.log(` hello my name is ${name}and my roll no is ${roll} `)

const gameName = new String ('Velorant')    // (new syntax)  javascript object 
console.log(gameName)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));