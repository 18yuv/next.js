let id:number = 5;
let name:string = "Hello world";
let isuploaded:boolean = true;
let date:Date = new Date() // date must be a Date object

// any only in extreme scenarios
let x: any = "pedro" // true, 1 

// arrays
let ids: number[] = [1, 2, 4, 5, 6];
let xArr : any[] = ["pedro", 0, true, 'tech']

function concatenate(a:string, b:string):string{ // we have string for the function returning value
    return a + b
}

concatenate("hello ", "World")



// objects
interface UserInterface { // it is a blueprint for an object
    id: number;
    age: number;
    email?:string; // optional (?), if not defined it will be undefined not null
    greet(message:string):void // not returning anything (void)
}

const user: UserInterface = {
    id: 2,
    age: 18, // here email is optional so no error
    greet(message){
        console.log(message)
    }
}

console.log(user.email) // undefined
user.greet("This is a welcome message") // This is a welcome message



// if multiple values in one, unexpected data such as id
// union 
type IdType = string | number | boolean // can be string or number or boolean

// function printId(id: string | number | boolean):void
function printId(id: IdType):void 
{
    console.log('id: ', id)
}

printId("user343") // user343
printId(17) // 17



// intersection
interface BusinessPartner {
    partnerID: number | boolean;
    email:string;
}

interface userIdentity {
    name: string;
    age: number;
}

type employee = BusinessPartner & userIdentity // can be BusinessPartner and userIdentity, can be both

function signContract(employee: employee): void {
    console.log(`contract with the name ${employee.name}, with id ${employee.partnerID}`)
}

signContract({
    name: "jeff",
    email: 'jeff@email.com',
    age: 12,
    partnerID: 24
})



// enum 
enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "nouser",
    WrongCredentials = "wrongcredentials",
    Internal = "internal"
}

function printErrMsg(error: LoginError):void {
    if (error == LoginError.Unauthorized){
        console.log("User not authorized")
    } else if (error == LoginError.NoUser){
        console.log("user does not exits")
    } else if (error == LoginError.WrongCredentials){
        console.log("wrong password")
    } else {
        console.log("Internal")
    }
}

printErrMsg(LoginError.Internal)


// generic
class StorageContainer<T>{
    private contents : T[];

    constructor(){
        this.contents = [];
    }

    addItem(item : T):void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }
}

const usernames = new StorageContainer<string> (); // this defines the type as string rather than a "any" type
usernames.addItem("Pedro tech")
usernames.addItem("18yuv github")
usernames.getItem(1) // 18yuv github

const moneyCount = new StorageContainer<number> ();
moneyCount.addItem(26)
moneyCount.addItem(67)
moneyCount.getItem(1) // 67

// ReadOnly

interface SomeWorkingGuy{
    readonly guyId:number;
    readonly startDate:Date;

    name:string;
    workingFeild:string;
}

const workingGuy:SomeWorkingGuy =  {
    guyId:10,
    startDate: new Date(),

    name:"pedro",
    workingFeild:"CS"
}

// workingGuy.guyId = 15 // error




// question
// function sendEmail(
//   to?: string,
//   subject: string,
//   urgent?: boolean
// ) {
//   if (urgent) {
//     console.log("URGENT:", subject);
//   }
// }

// sol
// function sendEmail(
//     subject: string,
//     to?: string,
//     urgent: boolean = false
// ) {
//   if (urgent) {
//     console.log("URGENT:", subject);
//   }
// }

// overload
function analyze(input: string):number;
function analyze(input: number):boolean;

function analyze(input : string | number){
    if(typeof input === "string"){
        return Number(input)
    } else {
        return Boolean(input)
    }
}

