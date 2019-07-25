var number = 4.3;
var number2 = 4.7;
//sqrt means squareroot
var number3 =Math.sqrt(16);

//It will round to the nearest integer
var newNumber = 26 + Math.round(number);
//Ceiling method round 4.3 to 5, round up
var newNumber2 = 26 + Math.ceil(number);
//Floor method round 4.7 to 4, round down
var newNumber3 = 26 + Math.floor(number);

document.write(newNumber);
document.write(newNumber2);
document.write(newNumber3);
document.write(number3);