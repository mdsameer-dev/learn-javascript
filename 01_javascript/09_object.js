// Object
// object literals
// Singleton  syntax       // Object.create
// object syntax           // const profile = {}
// object key access       // console.log(profile.email)
// ====== another way      // console.log(profile["age"])
// change the value        // profile.location = "Mumbai"
// freezed object          // Object.freeze(profile) value does't change
// inside the object use :


// object literals
const profile = {
    userId: "mdsam@18",
    age: 23,
    email: "sammer@google.com",
    password: "hcud84hg9",
    location: "Maharashtra",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Friday"]
}

profile.location = "Mumbai"
// console.log(profile);              // 'Mumbai'

// Object.freeze(profile)             // value does't change
profile.userId = "attushaikh90"       
// console.log(profile);              // 'mdsam@18'  (old value)

profile.greeting = function() {
    console.log("Hello JavaScript Users");
}
console.log(profile.greeting());

profile.greetingtwo = function() {
    console.log(`Hello JS user, ${this.userId}`);
}
console.log(profile.greetingtwo());


// Singleton Object
// const snapUser = new Object()     // print {}     // Singleton Object
// const snapUser = {}                               // Non Singleton Object

const snapUser = {}

snapUser.id = "shaikh-44"
snapUser.name = "Shaikh Attu"
snapUser.age = 25
snapUser.isFollwed = true
snapUser.location = "india"

// console.log(snapUser);

const instaUser = {
    email: "xyz@insta.com",
    fullName: {
        userName: {
            firstName: "Mohd",
            lastName: "Saffan",
        }
    }
}

// console.log(instaUser);
// console.log(instaUser.fullName);
// console.log(instaUser.fullName.userName)
// console.log(instaUser.fullName.userName.lastName);


// Object Merge

const object1 = {
    userId: "zakwan" ,
    age1: 10,
    isFollwed: true
}

const object2 = {
    userId: "Saffan",
    age2: "5",
    isFollwed: false,
}

const object3 = { object1, object2 }
console.log(object3);
