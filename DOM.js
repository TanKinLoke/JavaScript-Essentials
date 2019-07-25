function changeText() {

    var parent = document.getElementById('main');
    //childNodes target all the nodes
    //first and last
    var child = parent.lastElementChild;
    child.style.color ="blue";

//var child = parent.childNodes[3];
}

function changeText2() {

    var child = document.getElementById('p1');
    //target child's parent Node which is 'main'
    var parent = child.parentNode;
    parent.style.color ="blue";

}

function changeText3() {

    var para2 = document.getElementById('p2');
    var sibling = para2.previousElementSibling;
    sibling.style.color ="blue";

//var sibling = para2.nextElementSibling;
}