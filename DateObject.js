//new is keyword, then Date is the object you want to copy
//the system will give u a copy of Date object
//() is contructor, it build a copy of the Date global object for us
//It pull it from the system clock on your computer
var todayDate = new Date();
var todayDate2 = new Date();

//Set the year to 17, instead of FullYear
todayDate2.setYear(17);

//use the method "toDateString"
//convert the output to a more readable string
var useString = todayDate.toDateString();

document.write(useString);
document.write(todayDate2);