
//give a random lowercase letter
function randomLower() {
    var result = " ";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    result = characters.charAt(Math.floor(Math.random()*26) );
    return result;
}

//give a random uppercase letter
function randomUpper() {
    var result = " ";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    result = characters.charAt(Math.floor(Math.random()*26) );
    return result;
}

//give a random number
function randomNum() {
    var result = " ";
    var characters = "0123456789";
    result = characters.charAt(Math.floor(Math.random()*10) );
    return result;
}

//give a random symbol
function randomSym() {
    var result = " ";
    var characters = "!@#$%^&*()";
    result = characters.charAt(Math.floor(Math.random()*10) );
    return result;
}





console.log(randomSym());