var orc = {

hair: "green",
age: 26,
stomachFull: true,
};

//change the property of the object
orc.age = 25;
//add a property outside of the object
orc.age2 = 28;
var newAge = orc.age + 2;

document.write (orc.age2);
document.write(newAge);

//delete the property
delete orc.age2;

var arc = {

    hair: "green",
    age: 26,
    stomachFull: true,
    eat: function () {
        document.write("YUM YUM");
    }

//if and function on object
    };
if (orc.stomachFull == true) {
    arc.eat();
}
else {
    document.write("not eating");
}