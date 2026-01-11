"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let name = "Hello world";
let isuploaded = true;
// any only in extreme scenarios
let x = "pedro"; // true, 1 
// arrays
let ids = [1, 2, 4, 5, 6];
let xArr = ["pedro", 0, true, 'tech'];
function concatenate(a, b) {
    return a + b;
}
concatenate("hello ", "World");
const user = {
    id: 2,
    age: 18, // here email is optional so no error
    greet(message) {
        console.log(message);
    }
};
console.log(user.email); // undefined
user.greet("This is a welcome message"); // This is a welcome message
// function printId(id: string | number | boolean):void
function printId(id) {
    console.log('id: ', id);
}
printId("user343"); // user343
printId(17); // 17
function signContract(employee) {
    console.log(`contract with the name ${employee.name}, with id ${employee.partnerID}`);
}
signContract({
    name: "jeff",
    email: 'jeff@email.com',
    age: 12,
    partnerID: 24
});
// enum 
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
function printErrMsg(error) {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("user does not exits");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("wrong password");
    }
    else {
        console.log("Internal");
    }
}
printErrMsg(LoginError.Internal);
// generic
class StorageContainer {
    contents;
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer(); // this defines the type as string rather than a "any" type
usernames.addItem("Pedro tech");
usernames.addItem("18yuv github");
usernames.getItem(1); // 18yuv github
const moneyCount = new StorageContainer();
moneyCount.addItem(26);
moneyCount.addItem(67);
console.log(moneyCount.getItem(1));
//# sourceMappingURL=index.js.map