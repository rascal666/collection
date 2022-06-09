function hiddenTO() {
  let text = document.getElementById("denefit_list_js");
  let benefit = document.getElementById("benefit");
  if (text.style.display === "none") {
    text.style.display = "block";
    benefit.innerHTML = "Ваша выгода: &#9650;";
  } else {
    text.style.display = "none";
    benefit.innerHTML = "Ваша выгода: &#9660;";
  }
}

function hiddenTO_red() {
  let text = document.getElementById("denefit_list_js_red");
  let benefit = document.getElementById("benefit_js_red");
  if (text.style.display === "none") {
    text.style.display = "block";
    benefit.innerHTML = "Ваша выгода: &#9650;";
  } else {
    text.style.display = "none";
    benefit.innerHTML = "Ваша выгода: &#9660;";
  }
}

function hiddenTO_fiol() {
  let text = document.getElementById("denefit_list_js_fiol");
  let benefit = document.getElementById("benefit_js_fiol");
  if (text.style.display === "none") {
    text.style.display = "block";
    benefit.innerHTML = "Ваша выгода: &#9650;";
  } else {
    text.style.display = "none";
    benefit.innerHTML = "Ваша выгода: &#9660;";
  }
}
