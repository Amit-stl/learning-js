//singleton
// literal are not formes in literal
//object.create singleton formed by constructor method

const mySym = Symbol("key1")
    
const JsUser = {
    name: "Hitesh",
    "full name": "Racer",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Racer@moogle.com",
    isLoggedIn: false,
    lastLoginDays: ["friday", "Sunday"]
}

//two ways of access 
// 1
console.log(JsUser.age);
//2
console.log(JsUser["email"]);
console.log(JsUser["location"])


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
