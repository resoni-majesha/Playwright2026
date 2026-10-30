// 05-hoisting.js

//var
console.log(x);

var x = 10
// console.log(x);

/* //let
console.log(y);

let y = 20

// console.log(y); */

//const
console.log(z);
const z = 30


/* 
Hoisting: Default behaviour in JS - where declaration alone gets hoisted to the top of the scope
Declarations move to top of their scope during the memory creation before execution

Here we have 2 phase, 
1. Memory creation phase - JS prepares variable and functions
2. Execution Phase - JS executes the code line by line

//var 
var is hoisted and if you access it before initialization, JS returns undefined

console.log(x);

var x = 10
// console.log(x); //output: 10

try to acces before it is declared

Internally 
var x
console.log(x)
x=10

//let
let is hoisted but cannot be accessed before it is initialized, resulting in reference error
let=> hoisting takes place but throws reference error

console.log(y);

let y = 20 //TDZ - Temporal Dead Zone

// console.log(y);

Internally, y = 20, try to acces before it is declared 
console.log(y); , now let y will be hoisted

let y 
console.log(y);
y= 20

ReferenceError: Cannot access 'y' before initialization

//const - also same as let

console.log(z);
const z = 30 //TDZ  (command let part)

ReferenceError: Cannot access 'z' before initialization
TDZ - Time period b/w the variable creation and value declaration
TDZ - Time period b/w hoising and intitalization of variable

Output:
undefined
C:\Playwright2026\Week1Day1\Day1\05-hoisting.js:17
console.log(z);
            ^

ReferenceError: Cannot access 'z' before initialization
    at Object.<anonymous> (C:\Playwright2026\Week1Day1\Day1\05-hoisting.js:17:13)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.21.0

*/