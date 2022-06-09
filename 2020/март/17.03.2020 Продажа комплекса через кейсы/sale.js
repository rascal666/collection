let start = 0;

let chart = [];
chart.push(document.getElementsByClassName('chart_1'));
chart.push(document.getElementsByClassName('chart_2'));
chart.push(document.getElementsByClassName('chart_3'));
chart.push(document.getElementsByClassName('chart_4'));
chart.push(document.getElementsByClassName('chart_5'));


let chart_0 = document.getElementById('chart_0');
let chart_01 = document.getElementById('chart_01');
let chart_02 = document.getElementById('chart_02');
let chart_03 = document.getElementById('chart_03');
let chart_04 = document.getElementById('chart_04');

chart_0.innerHTML = chart[0][0].innerHTML;
chart_01.innerHTML = chart[1][0].innerHTML;
chart_02.innerHTML = chart[2][0].innerHTML;
chart_03.innerHTML = chart[3][0].innerHTML;
chart_04.innerHTML = chart[4][0].innerHTML;

console.log(chart);


let img = []
img.push(document.getElementById('img_1'));
img.push(document.getElementById('img_2'));
img.push(document.getElementById('img_3'));
img.push(document.getElementById('img_4'));
img.push(document.getElementById('img_5'));

let img_0 = document.getElementById('img_0');


img_0.src = img[start].src;

function onButtonPrev() {
    start--;
    if (start === -1) {
        img_0.src = img[img.length - 1].src;
        chart_0.innerHTML = chart[0][img.length - 1].innerHTML;
        chart_01.innerHTML = chart[1][img.length - 1].innerHTML;
        chart_02.innerHTML = chart[2][img.length - 1].innerHTML;
        chart_03.innerHTML = chart[3][img.length - 1].innerHTML;
        chart_04.innerHTML = chart[4][img.length - 1].innerHTML;
        chart_04.innerHTML = chart[5][img.length - 1].innerHTML;
        chart_04.innerHTML = chart[6][img.length - 1].innerHTML;
        start = img.length - 1;
    } else {
        img_0.src = img[start].src;
        chart_0.innerHTML = chart[0][start].innerHTML;
        chart_01.innerHTML = chart[1][start].innerHTML;
        chart_02.innerHTML = chart[2][start].innerHTML;
        chart_03.innerHTML = chart[3][start].innerHTML;
        chart_04.innerHTML = chart[4][start].innerHTML;
        chart_04.innerHTML = chart[5][start].innerHTML;
        chart_04.innerHTML = chart[6][start].innerHTML;
    }
}

function onButtonNext() {
    start++;
    if (start === img.length) {
        img_0.src = img[0].src;
        chart_0.innerHTML = chart[0][0].innerHTML;
        chart_01.innerHTML = chart[1][0].innerHTML;
        chart_02.innerHTML = chart[2][0].innerHTML;
        chart_03.innerHTML = chart[3][0].innerHTML;
        chart_04.innerHTML = chart[4][0].innerHTML;
        chart_04.innerHTML = chart[5][0].innerHTML;
        chart_04.innerHTML = chart[6][0].innerHTML;
        start = 0;
    } else {
        img_0.src = img[start].src;
        chart_0.innerHTML = chart[0][start].innerHTML;
        chart_01.innerHTML = chart[1][start].innerHTML;
        chart_02.innerHTML = chart[2][start].innerHTML;
        chart_03.innerHTML = chart[3][start].innerHTML;
        chart_04.innerHTML = chart[4][start].innerHTML;
        chart_04.innerHTML = chart[5][start].innerHTML;
        chart_04.innerHTML = chart[6][start].innerHTML;
    }


}