// #HomeAssignment3.js

function launchBrowser(browserName) {

    if(browserName==="Chrome") {
        
        console.log("The browser is Chrome");
    } else {

        console.log("The browser is not Chrome")
    }
}

function runTests(testType) {

    switch(testType) {
       
        case "Smoke": 
            console.log("Smoke");
            break;

        case "Sanity":
            console.log("Sanity");
            break;

        case "Regression":
            console.log("Regression");
            break;

        default:
            console.log("Smoke");
    }

}

launchBrowser("Chrome")
runTests("Unit")

/* 
Output
The browser is Chrome
Smoke
*/