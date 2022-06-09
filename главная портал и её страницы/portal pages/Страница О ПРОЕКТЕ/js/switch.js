document.getElementById("mySwitch").onchange = function() {
  var priceA = document.getElementById("priceA");
  var priceB = document.getElementById("priceB");
var priceR = document.getElementById("priceR");
    var priceH = document.getElementById("priceH");
    var priceM = document.getElementById("priceM");
    var priceL = document.getElementById("priceL");
    var priceS = document.getElementById("priceS");
    
  if (priceA.classList.contains("hidden")) {
    priceA.className = "shown";
    priceR.className = "shown";
    priceH.className = "shown";
    priceM.className = "shown";   
    priceB.className = "hidden";
    priceL.className = "hidden";
    priceS.className = "hidden";   
  } else if (priceB.classList.contains("hidden")) {
    priceB.className = "shown";
    priceL.className = "shown";
    priceS.className = "shown";   
    priceA.className = "hidden";
    priceR.className = "hidden";
    priceH.className = "hidden";
    priceM.className = "hidden";  
  }
}