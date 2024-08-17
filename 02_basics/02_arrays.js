const phone = [ "apple", "samsung" , "vivo" , "realme", "poco" ]
const city = [ "tokyo" , "seol" , "berlin" , "vegas"]

//method 1 merge two arrays in single array

const merged = [...phone ,...city]
//console.log(merged) ;

//method 2

const merge = phone.concat( city)
//console.log(merge)

//explore more on arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)               //flat : create a new array with all sub-arrays elements 
//console.log(real_another_array);                                       // concated into it recursively up to specified depth.

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));

console.log(Array.isArray("gurukul"))
console.log(Array.from("gurukul"))
console.log(Array.from({name: "gurukul"})) // interesting