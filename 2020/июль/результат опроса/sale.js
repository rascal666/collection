let blog_case_0 = document.getElementById('blog_case_0');
let img_case0 = document.getElementById('img_case0');
let js_what_0 = document.getElementById('js_what_0');
let blog_case = document.getElementsByClassName('blog_case');
let img_case = document.getElementsByClassName('img_case');
let js_what = document.getElementsByClassName('js_what');



let start = 0;

blog_case_0 = blog_case[start].style.display = 'grid';
js_what_0 = js_what[start].style.display = 'grid';
img_case0.src = img_case[start].src;


function displayNone() {
    for (let index = 0; index < blog_case.length; index++) {
        const element = blog_case[index].style.display = 'none';
    }
    for (let index = 0; index < js_what.length; index++) {
        const element = js_what[index].style.display = 'none';
    }
}

function onNext() {
    start++
    if (start > blog_case.length - 1) {
        start = 0;
        displayNone()
        blog_case_0 = blog_case[start].style.display = 'grid';
        js_what_0 = js_what[start].style.display = 'grid';
        img_case0.src = img_case[start].src;
    } else {
        blog_case_0 = blog_case[start].style.display = 'grid';
        js_what_0 = js_what[start].style.display = 'grid';
        blog_case_0 = blog_case[start - 1].style.display = 'none';
        js_what_0 = js_what[start - 1].style.display = 'none';
        img_case0.src = img_case[start].src;
    }
}

function onPrev() {
    start--
    if (start < 0) {
        start = blog_case.length - 1;
        displayNone()
        blog_case_0 = blog_case[start].style.display = 'grid';
        js_what_0 = js_what[start].style.display = 'grid';
        img_case0.src = img_case[start].src;
    } else {
        displayNone()
        blog_case_0 = blog_case[start].style.display = 'grid';
        js_what_0 = js_what[start].style.display = 'grid';
        img_case0.src = img_case[start].src;
    }

}