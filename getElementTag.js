// getElementByid () - Select elements by their id - <p id="para"> text </p>
// getelementsByTagName () - Select elements by their tag name - "<p" id="para"> text </p>
// getElementsByClassName ()- Select elements by their class name - <p class="para"> text </p>
function changeStyle() {

    var paragraph = document.getElementsByTagName("p");

    //i = index, =0 so the loop start from 0
    //parapgraph 0-3 is the paragraph length
    for (var i = 0; i < paragraph.length; i++) {

        paragraph[i].style.fontStyle="italic";

    }

    //the [1] works like array
    // var changeParaText = paragraph[0].style.fontStyle = "italic";
    // var changeParaText = paragraph[1].style.fontStyle = "italic";
    // var changeParaText = paragraph[2].style.fontStyle = "italic";
    // var changeParaText = paragraph[3].style.fontStyle = "italic";

}