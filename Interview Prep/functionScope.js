var username = "sam";
function login() {
  var username = "rik";
}
console.log(username); //sam
but;
var username = "sam";
if (true) {
  var username = "rik";
}
console.log(username); //rik
