var hello = "Hello how are you doing";

hello6 = hello.toUpperCase();
//23 means there are 23 character in the string, space are included too
//Its actually 22, but the system automatically add one as ending
hello2 = hello.length;
//the 4th character, counting by array
hello3 = hello.charAt(4);
//replaces "doing" with "today"
hello4 = hello.replace('doing','today');
hello5 = hello.bold();

document.write(hello6);
document.write(hello2);
document.write(hello3);
document.write(hello4);
document.write(hello5);