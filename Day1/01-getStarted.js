//01-getStarted.js

console.log("Welcome to TestLeaf");


/* 
* Foundation of JS
Asynchronous
Allows the task to run in the background. It will not block the execution of the next task. eg: when giving timer as 2 secs, 
it will not wait. It will execute the next line of code.
* We have client & server in javascript.
*We say Java is synchronous and multi threaded. If client sends the request, it will wailt for the response , then only the next
request will be send and we can receive the response. 
* But JS is asynchronous and single threadedwith non-blocking i/o
If we send one request, it wont wait for the response, the next line of code will be executed.

Event Driven Architecture:
If u type some msg , it will listen for the event then perform the action.
eg: Cooking happens in the background, while other works continues like serving the customer, responding to their queries etc.,
This is event driven approach. It will listen for the event and perform the action.


VS code: IDE, install node.js
Java is a compiler based programming langugae. When u write src code, and compile, .class file is created, which is a bytecode,
which is a machine understandable langugae. When we run the .class file, it will be executed in the JVM.
JS is an interpreted programming langugae. It is a scripting langugae. When we write the code, it will read the code line by
line and be executed.
Browser and node.js reads the code line by line. Interpretor - browser. 

Create a folder in local, go to VS code, file - open folder, select folder, folder will be added to VS code.
Always give the extension as .js for JS file.
Always use camelcase for variable name and file name. First - lower, second: Upper
To print in console, use console.log("Hello")
To execute, right click, open in integrated terminal. or ctrl + ~
To execute, use command: node .\filename.js - node .\01-getStarted.js 
To command single line of code, use ctrl+/, also use //
To command multiple line of code, use alt+shift+a, also, /* star/
; is not mandatory.

Output
Welcome to TestLeaf


*/