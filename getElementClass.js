// getElementByid () - Select elements by their id - <p id="para"> text </p>
// getelementsByTagName () - Select elements by their tag name - "<p" id="para"> text </p>
// getElementsByClassName ()- Select elements by their class name - <p class="para"> text </p>
function changeStyle() {

    var paragraph = document.getElementsByClassName('para5');

    var changeText = paragraph[0].style.color = "red";
    var changeText = paragraph[1].style.color = "red";

}