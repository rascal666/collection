$(document).ready(function () {
	$('.flexslider').flexslider({
		animation: 'slide',/*fade*/
		controlsContainer: '.flexslider'
	});
});
        document.getElementById("mySwitch").onchange = function() {
  var priceA = document.getElementById("priceA");
  var priceB = document.getElementById("priceB");
  var priceC = document.getElementById("priceC");
  var priceD = document.getElementById("priceD");
var priceE = document.getElementById("priceE");
  if (priceA.classList.contains("hidden")) {
    priceA.className = "shown";
      priceE.className = "shown";
    priceB.className = "hidden";
  } else if (priceB.classList.contains("hidden")) {
    priceB.className = "shown";
    priceA.className = "hidden";
      priceE.className = "hidden";
  }

var priceC = document.getElementById("priceC");
var priceD = document.getElementById("priceD");
    if (priceC.classList.contains("hidden")) {
    priceC.className = "shown_2";
    priceD.className = "hidden";
  }
   else if (priceD.classList.contains("hidden")) {
    priceD.className = "shown_2";
    priceC.className = "hidden";
}
}