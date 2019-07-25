var name="Henry"; //global variable

function printName() {
//only this function can access this variable
//you can say only when u use this function, system will use this variable
var name2="Sarah"; //local variable
name3="Vento";

}

printName(); //call function

document.write (name);
document.write(name3);
document.write(name2); //there will be nothing printed, because not using the function
