function batting (player, distance) {

if (distance <= 350 && distance >= 1) {
    document.write (player + " hit the ball");
}
else if (distance <= 0) {
    document.write (player + " STRUCK OUT");
}
else {
    document.write (player + " hit a home run");
}
}

batting("Steve", -1);

function batting2 (player, distance) {
    var more = player + " hit the ball " + distance + " feet";
    document.write(more);
}

batting2 ("Steve",361); //we pass in arguments to parameters