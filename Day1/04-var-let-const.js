// 04-var-let-const.js

//var

var product = 'mobile'
var product = 'laptop'
console.log(product);
console.log(typeof product);

product = 'carryBag'
console.log(product);

//let
let quantity = 1
// let quantity = 2 // throws compile time error
quantity = 3
console.log(quantity);
console.log(typeof quantity)

//const
const price = 2000 // eg: aadhar number, const declaration must be initialized
price = 4000
console.log(price);



/* var, let, const - keywords used to declare a variable
Variable declaration
variable declaration var compnayName
value assignment to the variable -> companyName ='TestLeaf'
this is called declaration + initialization in a single statement

 var, let, const 

 //var
 Allows both redeclaration & reassignment
 var product = 'mobile' // declaration
 var product = 'laptop' // redeclaration or reinitialization in a single statement
console.log(product);
console.log(typeof product);

// Assign different value
product = 'carryBag' // reassignment - updating new value is also allowed in var
Hereafter we wont use var

//let
Allows reassignment, but redeclaration is not allowed
eg: consider dropdown
testleaf - uname: democsr
pwd: crmsfa

To iterate all the dropdown values, we use for loop to iterate all the dropdown values
for loops, we use let keyword

let quantity = 1
let quantity = 2 // throws compile time error, redeclaration is not allowed

quantity = 3 // Reassignment is allowed

//const
Both redeclaration and reassignment is not possible

const price = 2000 // eg: aadhar number, const declaration must be initialized

price = 4000
console.log(price); // Typeerror: Assignment to constant variable. (error in terminal)


Output:
laptop
string
carryBag
3
number
C:\Playwright2026\Week1Day1\Day1\04-var-let-const.js:22
price = 4000
      ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\Playwright2026\Week1Day1\Day1\04-var-let-const.js:22:7)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.21.0

*/


