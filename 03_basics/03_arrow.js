const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage(); // Amit , welcome to website
user.username = "Gagan"
user.welcomeMessage(); //Gagan , welcome to website beacuse current context change

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } isme return use karna padta hai explict 

// const addTwo = (num1, num2) =>  num1 + num2 ; // 7

// const addTwo = (num1, num2) => ( num1 + num2 ); // 7 . isme return use nahi hota  implict

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

