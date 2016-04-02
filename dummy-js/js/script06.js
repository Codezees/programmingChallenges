var 
  findMe = "",
  watchMe = "";

// get the user's current position
function getPositionResult(position) {
  findMe = position.coords.latitude + ' ' + position.coords.longitude;
  //localStorage object stores data that does not expire
  localStorage.setItem("currentPosition", findMe);
}
navigator.geolocation.getCurrentPosition(getPositionResult);

function currentPosition() {
  document.getElementById("currentPosition").innerHTML = localStorage.getItem("currentPosition");
}

// invokes the callback function as the user moves 
function refreshPosition(position) {
    watchMe = position.coords.latitude + ' ' + position.coords.longitude;
    localStorage.setItem("lastPosition", watchMe);
}
navigator.geolocation.watchPosition(refreshPosition);

function lastPosition() {
  document.getElementById("lastPosition").innerHTML = localStorage.getItem("lastPosition");
}

// stop watching the user's position
// clearWatch(); 