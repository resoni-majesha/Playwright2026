// 11-HomeAssignment.js

var genderType = "Female";

function printGender() {

    let color = "Brown";

    if(genderType.startsWith("Female")) {

        var age = 30;

        let color = "pink";

        console.log(color);
        
    }

    console.log(color);
}

printGender()

console.log(genderType);

// Change gender type to male

genderType = "Male";

printGender(); // Brown is printed again for the 2nd time, as we call the function again 

console.log(genderType);

/* 
Output
pink
Brown
Female
Brown
Male
*/