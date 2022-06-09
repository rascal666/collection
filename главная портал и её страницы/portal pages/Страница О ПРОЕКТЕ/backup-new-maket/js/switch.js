document.getElementById("mySwitch").onchange = function() {
  var priceA = document.getElementById("priceA");
  var priceB = document.getElementById("priceB");
  if (priceA.classList.contains("hidden")) {
    priceA.className = "shown";
    priceB.className = "hidden";
  } else if (priceB.classList.contains("hidden")) {
    priceB.className = "shown";
    priceA.className = "hidden";
  }
}