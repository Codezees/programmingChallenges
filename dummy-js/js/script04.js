function handleClick(callback) {
    alert('You clicked me!');
    if (callback) {
        callback();
    }
}
function more() {
    alert('Do you need more?');
}
function andMore() {
    document.writeln('Test Message');
}
function handleClickAgain() {
    document.getElementById("date").innerHTML = Date();
}