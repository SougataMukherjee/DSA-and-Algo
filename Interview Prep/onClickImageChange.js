const bulbSwitch = document.querySelector("#bulbSwitch");
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener("click", function (e) {
  console.log(bulb.src);
  //if(e.target.match("li"))

  if (bulb.src.match("off")) {
    bulb.src = "./bulb-on.gif";
  } else {
    bulb.src = "./bulb-off.gif";
  }
});
