# TypeScript (in a nutshell)

It is an open source programming language developed and maintained by microsoft, super form of js, used to type safe js, ddefine each variable with their own type.
When we compile typeScript code it becomes js, but it is helpful for us developers to catch the errors before they even come.
Syntax is mostly same as js just some things different.

## installation

Install globally
```
npm install -g typescript
```

Config file, it includes various compiler options that we can use or not use according to the needs.
```
tsc --init
```

## Compile
to run the ts code we need to compile it into a js file first 
```
tsc
node index.js
```

## Type Annotations
Declaring types

### Variables
```ts
let id:number = 5;
let name:string = "Hello world";
let isuploaded:boolean = true;
let date:Date = new Date() // date must be a Date object

// any only in extreme scenarios
let x: any = "pedro" // true, 1 
```

### arrays
```ts
let ids: number[] = [1, 2, 4, 5, 6];
let xArr : any[] = ["pedro", 0, true, 'tech']
```

### function
```ts
function concatenate(a:string, b:string):string{ // we have string for the function returning value
     return a + b
}

concatenate("hello ", "world") // hello world
```

### Objects
```ts
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
```

### Union
(OR)
if multiple values in one, unexpected data such as id, only one is applicable

```ts
type IdType = string | number | boolean // can be string or number or boolean

// function printId(id: string | number | boolean):void
function printId(id: IdType):void 
{
    console.log('id: ', id)
}

printId("user343") // user343
printId(17) // 17
```

### Intersection
(AND)
Both are applicable 

```ts
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
```

### Enum
an enum is a way to define a set of named constants.
They make your code more readable, type-safe, and self-documenting.

```ts
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
```

### Generic
generics let you write reusable, type-safe code that works with different types, without losing type information.

```ts
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


// another example
function identity<T>(value: T): T {
  return value;
}
```

### Read only variables
Fields that should'nt be changed

```ts
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

workingGuy.guyId = 15 // error
```

### type inference 
when TS figures out types automatically

```ts
let count = 10; // inferred as number
count = 20;     
count = "hi";   // error
```

### Any
any means “I don’t care about the type.”
You can assign anything to it
You can call any method or property on it
TypeScript won’t check anything

```ts
let value: any = 42;
value.toUpperCase();   // No error (but might crash at runtime)
value.foo.bar();       // No error
```

### unknown
unknown — Safe version of any:
unknown means “I don’t know the type yet.”
You can assign anything to it
You cannot use it until you narrow the type
Forces runtime checks

```ts
let value: unknown = "hello";

value.toUpperCase();   // Error

if (typeof value === "string") {
  value.toUpperCase(); // Safe
}
```

### Void
void — No meaningful return value
void is used mainly for functions that don’t return anything.

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

The function may return undefined
You should not rely on any returned value

```ts
const result = logMessage("hi");
// result is void
```

### Never 
never — This should never happen:
never means a value that can’t exist.

Used when a function:
Throws an error
Runs forever
Has unreachable code

```ts
function fail(msg: string): never {
  throw new Error(msg);
}

// Function runs
// Throws an error
// Program flow stops here


function handleValue(x: string | number) {
  if (typeof x === "string") {
    // ...
  } else if (typeof x === "number") {
    // ...
  } else {
    const _exhaustive: never = x; // this cannot be reached
  }
}
```
void = the function finishes, but returns nothing useful
never = the function never finishes at all

### in & typeof

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}


type User = { name: string };
type Admin = { name: string; role: string };

function handle(person: User | Admin) {
  if ("role" in person) {
    console.log(person.role);
  }
}
```

### instance of 
for classes
```ts
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  }
}
```

## Functional Rules
### optional parameters
Important Rules:

Optional parameters are typed as: (type) | (undefined)
Optional parameters must come after required ones

```ts
// correct
function greet(name: string, title?: string) {}

// wrong
function greet(title?: string, name: string) {}
```

### Default parameters
Default values automatically handle undefined.

```ts
// this is more safe

function greet(name: string, title: string = "Mr.") {
  return `Hello ${title} ${name}`;
}



function sendEmail(
    subject: string,
    to?: string,
    urgent: boolean = false // here it is not optional as it value should be true | false rather than boolean | undefined
) {
  if (urgent) {
    console.log("URGENT:", subject);
  }
}
```

Required params → first
Optional params → last
Default params > optional booleans (Default parameters → can be anywhere after required)

### Return Types (When to Write Them)
Let TS infer (most of the time)

```ts

function multiply(a: number, b: number) {
  return a * b;
}
```

Explicit return types (recommended when):
Function is public
Function is complex
Function returns a union

```ts
function parse(input: string): number | null {
  const n = Number(input);
  return isNaN(n) ? null : n;
}
```

### function overload signatures
Overloads let us say:

“If you pass this, you get that.”
Example: String → String, Number → Number

```ts
function format(value: string): string;
function format(value: number): number;

function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

const a = format("hello"); // inferred as string
const b = format(3.1415);  // inferred as number

// Even though implementation uses unions, callers get precise types.



// Implementation must handle all overload cases.
function bad(value: string): string;
function bad(value: number): number;
function bad(value: string) {  // ❌ mismatch
  return value;
}
```

Key Rules (Very Important):
Overload signatures go first
Implementation comes last
Implementation uses union types
Only overloads are visible to callers

### callback typing 
```ts
function run(task: () => void) {
  task();
}
```

What this means:
task is a function
It takes no parameters
It returns nothing (void)

!continue from callbacks (https://chatgpt.com/c/6964e088-39b4-8323-831d-b3e29e64730f) typescipt learning roadmap