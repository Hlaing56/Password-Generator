//only when you click the word generate the prompt pops up
var generateBtn = document.querySelector("#generate");

// var randomFun = {
//     lower: randomLower,
//     upper: randomUpper,
//     num: randomNum,
//     sym: randomSym
// };


// //give a random lowercase letter
// function randomLower() {
//     var result = " ";
//     var characters = "abcdefghijklmnopqrstuvwxyz";
//     result = characters.charAt(Math.floor(Math.random()*26) );
//     return result;
// }

// //give a random uppercase letter
function randomUpper() {
    var result = " ";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    result = characters.charAt(Math.floor(Math.random()*26) );
    return result;
}

// //give a random number
// function randomNum() {
//     var result = " ";
//     var characters = "0123456789";
//     result = characters.charAt(Math.floor(Math.random()*10) );
//     return result;
// }

// //give a random symbol
// function randomSym() {
//     var result = " ";
//     var characters = "!@#$%^&*()";
//     result = characters.charAt(Math.floor(Math.random()*10) );
//     return result;
// }

function makePassword() {

    var generatedPassword = "";

    var howLong = window.prompt("choose a length of at least 8 characters and no more than 128 characters for your password");
    //this would be how long my password is 
    howLong = parseInt(howLong);
    
    for(var i = 0; i < howLong; i++){
        generatedPassword += randomUpper();
    }

    return generatedPassword;
}


function writePassword(){
    var generatedPass = makePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = generatedPass;
}


//listens for the word generate to be clicked
generateBtn.addEventListener("click", writePassword);