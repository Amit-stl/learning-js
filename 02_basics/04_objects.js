//const tinderuser = new Object()           =>         this is singleton
const tinderuser = {}                    // =>         this is non-singleton

tinderuser.Id = "123qwer"
tinderuser.name = "Todoroki"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Amit",
            lastname: "kumar"
        }
    }
}

//console.log( regularUser.fullname.userfullname.firstname)
//console.log(regularUser.lastname)

/*here last name print undefined in terminal because last name is a property of first name .
first name is a string and string donot have a last name propert.hats why it return undefined
*/

//If you want to print using template literal , this is my own

//console.log(`${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.lastname}`);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// i want to merge, 3 methods

//const obj3 = { obj1 , obj2}
// this method merge sepertely so instead 

// const obj3 = {...obj1,...obj2}     => we use spread operator more.

// console.log(obj3); 

const obj3 = Object.assign({}, obj1, obj2)
// {} => target , obj are source 
// this is good but less we use

// console.log(obj3);


//console.log(tinderuser);

// console.log(Object.keys (tinderuser));
// console.log(Object.values (tinderuser));
// console.log(Object.entries (tinderuser));  =>thes are are very important helpfull while using loop



