//Replace content using innerHTML
// function changeStyle() {

//     var paragraph = document.getElementsByClassName('para5');

//     var changeText = paragraph[0].innerHTML = "New Text 1";
//     var changeText = paragraph[1].innerHTML = "New Text 2";

// }

//Reading content using innerHTML
function changeStyle() {

    var confirmation = confirm("These changes are final");
    
    if (confirmation == true) {

    var paragraph = document.getElementsByClassName('para5');

    //Combine both paragraph
    var FirstParaText = paragraph[0].innerHTML;
    var SecondParaText = paragraph[1].innerHTML;
    var addThem = paragraph[2].innerHTML = FirstParaText + SecondParaText;

    //Replace both paragraph to nothing
    //For second click, it will replace everything to blank
    var FirstParaText = paragraph[0].innerHTML = "";
    var SecondParaText = paragraph[1].innerHTML = "";

    document.getElementById("test").style.visibility = "hidden";

}
}
