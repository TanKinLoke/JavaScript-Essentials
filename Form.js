function validateTextbox() {

    var box = document.getElementById("name");
    var box2 = document.getElementById("address");

     if (box.value == "" || box2.value == "") {
         alert("The field cannot be blank");
         //return can only be true or false
         //return false and stop the onSubmit
         box.focus();
         box.style.border = "solid 3px red";
         return false;
        
     }

     if (box.value.length < 5 || box2.value < 5) {
        alert("Please enter at least 5 characters");
        box.focus();
        box.style.border = "solid 3px red";
        return false;
       
    }

}