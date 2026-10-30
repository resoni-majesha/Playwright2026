// 06-scoping.js

//Scope defines where a variable is accessible in your code. 

//###Global scope: If you declare something globally, it can be accessed anywhere

let y = 60
var a = 10

// to create a function in JS use function keyword, function is the reusable block of code

function test() { // function name user defined name
    console.log(a);
    console.log(y);
}

test()
console.log(a);

// ###Function scope
// var is the function scope
// let & const is block scope

function demo() { // create a function using func keyword

    var x = 20
    console.log('Inside the function accessing var',x);

    if(true) { // explicitly making the consdition as true
       let z = 50
       const c = 30
       console.log('Accesssing z inside a block',z);
       console.log('Accesssing c inside a block',c);
       console.log('Accesssing x inside a block',x); // Possible as it is inside
    }

    console.log('Accessing z inside the function and outside the block',z); // Not possible, throws reference error
    // ReferenceError: z is not defined
}
//Try to acces var inside function - possible

demo()
console.log('Accessing x outside the function',x); // Accessing outside the function is not possible
   // ReferenceError: x is not defined

   // When you declare anything outside the block, outside the function, it can be accessed

/*
Output
10
60
10
Inside the function accessing var 20
Accesssing z inside a block 50
Accesssing c inside a block 30
Accesssing x inside a block 20
C:\Playwright2026\Week1Day1\Day1\06-scoping.js:37
    console.log('Accessing z inside the function and outside the block',z); // Not possible, throws reference error
                                                                        ^

ReferenceError: z is not defined
    at demo (C:\Playwright2026\Week1Day1\Day1\06-scoping.js:37:73)
    at Object.<anonymous> (C:\Playwright2026\Week1Day1\Day1\06-scoping.js:42:1)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.21.0
*/