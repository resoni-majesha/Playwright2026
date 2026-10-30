// 02-dataTypes.js

/* Primitive Datatypes in JS
1. number
2. boolean
3. string
4. undefined
5. null */

//numbers

var phoneNumber = 9876543210
var num = 0.5
console.log(phoneNumber);
console.log(typeof phoneNumber);



//string

var empName = 'Resoni'
empName = 'Maje'
console.log(empName);
console.log(typeof empName);

//boolean
var hasPlaywright = true
console.log(hasPlaywright);
console.log(typeof hasPlaywright);


//undefined
var accountNumber
console.log(accountNumber);
console.log(typeof accountNumber);


//null
var landlineNumber = null
landlineNumber = 1234567890 // latest value will be considered
console.log(landlineNumber);
console.log(typeof landlineNumber);


//bigint
var transactionId = 1234567890123456789012345678901234567890n
console.log(Number(transactionId)); // will convert to number, but it will be rounded off as it is more than 16 digits  
console.log(transactionId);
console.log(typeof transactionId);

/* Data Types:
Value can be stored in a variable.
Specifies the type of data the variable is holding is called as data type.
2 types:
*Primitive Data Types: number, string, boolean, undefined, null
*Non-Primitive Data Types: object, array, function

Datatypes are immutable, once the value is assigned to a variable, it cannot be changed.

Variable declaration
var x
assigning value
x = 10
var x = 10 , this 10 will be stored in a memory location, and the variable x will point to that memory location.
Now, try to change the value of x as 50, it will create a new memory location for 50 and the variable x will point to that memory location. The previous memory location will be garbage collected.
var x = 50
So, the latest value will be printed as the x value will get updated and the previous value will be removed from memory and 
moved to garbage collection. 
This is called as immutability of data types.  

Primitive Data Types:
Inbuilt datatypes, once created it cannot be changed and it is immutable. Eg: number, string, boolean, undefined, null, bigint

Variable declaration:
keyword is var
var companyName
Value assignment to the variable:
companyName is the variable name, and "CTS" is the value assigned to the variable.
var companyName = "CTS"
This is called declaration and initialization in a single statement.

// number dataType:
To store decimal or integer values or numbers, 16 digits can be stored, if it is moe than 16 number, use bigint
var phoneNumber = 9876543210
var num = 0.5

// string: represent using '', "", ``(key above your tab key - backticks)
var empName = 'Resoni'
console.log(empName);

Change the name:
empName = 'Maje'
console.log(empName); 
New name will be printed.
If '' or "", not provided, it will consider it as any datatype. 

// boolean: true or false
Used to check the condition
var hasPlaywright = true

// undefined: when a variable is declared but not assigned any value, it will be undefined
variable is declared but it is not assigned with any value. Maybe assigned lated at runtime
var accountNumber
eg: For banking app, filling application form, you won't know the acc nuber at that time. Yu will leave the field blank,
later it will be filled. Till that it is an undefined value. 

// null:
If we want to explicitly say a variable as empty, we don't want to assign any value, use null
Landline number, we won't have it, so we can use null, for non mandatory things.
var landlineNumber = null

//bigint
Used to store large numbers, more than 16 digits, use bigint - very large integers beyond the JS number limit.
(2^53-1)
var transactionId = 1234567890123456789012345678901234567890n
use n at the end of the number to specify it as bigint.

To know th etype of data, console.log(typeof variabeName)

Output:
9876543210
number
Maje
string
true
boolean
undefined
undefined
1234567890
number
1.2345678901234568e+39
1234567890123456789012345678901234567890n
bigint

Non-Primitive Data Types:
User defined datatypes, once created it can be changed and it is mutable. Eg: object, array, function
*/