// getElementByid () - Select elements by their id - <p id="para"> text </p>
// getelementsByTagName () - Select elements by their tag name - "<p" id="para"> text </p>
// getElementsByClassName ()- Select elements by their class name - <p class="para"> text </p>
function changeStyle() {
    //get the element by ID, ID paral, change the color style to blue when click
    //var text = document.getElementById ("paral").style.color = "blue"

    //Javascript don't use - like CSS, it is case sensitive so "C" must be capital
    //var text = document.getElementById ("paral").style.backgroundColor = "red"
    var text = document.getElementById ("para1").style.fontStyle = "italic";

}

// color, border, margin, backgroundColor, fontStyle,textDecoration
// padding-left, border-left