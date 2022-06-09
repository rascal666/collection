
const scrollThermometer = document.querySelector('.scrollThermometer');
const scrollThermometerFull = document.querySelector('.scrollThermometerFull');
const scrollThermometer1 = document.querySelector('.scrollThermometer1');
const textThermometer = document.querySelector('.textThermometer');
const textThermometer1 = document.querySelector('.textThermometer1');
const num15 = document.querySelector('.num15');
const num30 = document.querySelector('.num30');
const block = document.querySelector('.block');

let v = 0;
let b = 0;
let vw = 0;
let bw = 0;


window.addEventListener('scroll', function() {
  let a = pageYOffset/20;
  console.log(a);
  if (a>=31 && a<65 ) {
    v = 40;
    b = 0;
    textThermometer.innerHTML = 'Теплее! Скидку можно разогреть';
    textThermometer1.innerHTML = 'Теплее! Скидку можно разогреть';
    scrollThermometer.style.height =b + v +  a  + 'px';
     num15.style.display = 'none';
    // block.style.marginTop = 85 + 'px';

  } else if (a>=65 && a<94) {
    v = 40;
    b = 70;
    textThermometer.innerHTML = 'Горячо! Скидка запредельно разогрета!';
    textThermometer1.innerHTML = 'Горячо! Скидка запредельно разогрета!';
 // num15.style.display = 'grid';
    scrollThermometer.style.height =b + v + a +'px';
    // block.style.marginTop = 85 + 'px';


  }else if(a>97){
    // scrollThermometer.style.height = 280  + 'px';
    // block.style.marginTop = -15 + 'px';
  }

   else if (a<=30 ) {
    v = 40;
    b = 0;
    textThermometer.innerHTML = 'Прохладно! Скидку можно разогреть';
      textThermometer1.innerHTML = 'Прохладно! Скидку можно разогреть';
    // block.style.marginTop = 0 + 'px';
     num15.style.display = 'none';

    scrollThermometer.style.height =b + v +  a  + 'px';
  }
});


window.addEventListener('scroll', function() {
  let top = pageYOffset/30;
  console.log(top);
  if (top>=22   && top<51 ) {
    vW = 25;
    bW = 0;
    textThermometer1.innerHTML = 'Теплее! Скидку можно разогреть';
    scrollThermometer1.style.width =bW + vW +  top  + 'px';
  } else if (top>=51 && top<57) {
    bW = 20;
    textThermometer1.innerHTML = 'Горячо! Скидка запредельно разогрета!';
    scrollThermometer1.style.width =bW + vW +  top  + 'px';
  } else if (top>57) {
    scrollThermometer1.style.width =100  + 'px';
  }
   else if (top<=24 ) {
    vW = 0;
    bW = 0;
    textThermometer1.innerHTML = 'Прохладно! Скидку можно разогреть';
    scrollThermometer1.style.width =bW + vW +  top  + 'px';
  }
});




// document.addEventListener("scroll",function(){
//         var scrolled = window.pageYOffset;
//         var myBlock = document.getElementById('block');
//         if(scrolled>=  0 && scrolled<= 1500){ myBlock.style.position = "fixed"; myBlock.style.top="100px";}
//         else{ myBlock.style.position = "absolute"; myBlock.style.top="200%";}
//         console.log(scrolled);
//     });




// $(document).ready(function () {
//     $("a").click(function () {
//         var elementClick = $(this).attr("href");
//         var destination = $(elementClick).offset().top - 125;
//         if ($.browser.safari) {
//             $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
//         } else {
//             $('html').animate({ scrollTop: destination }, 1100);
//         }
//         return false;
//     });
// });



// $(document).ready(function() {
// $('.scrollBlock-20').click(function(){
// var el = $(this).attr('href');
// el = el.replace(/[^\#]*/, '');
// $('body,html').animate({
// scrollTop: $(el).offset().top - 300}, 1000);
// return false;
// });
// });


  //
  //
  // $(document).ready(function() {
  //
  // $('.scrollBlock-top').click(function(){
  // var el = $(this).attr('href');
  //
  // el = el.replace(/[^\#]*/, '');
  // $('body,html').animate({
  // scrollTop: $(el).offset().top-100}, 1000);
  // return false;
  // });
  // });




  // $(document).ready(function() {
  //    $(".scrollBlock").click(function() { // тут пишите условия, для всех ссылок или для конкретных
  //       $("html, body").animate({
  //          scrollTop: $($(this).attr("href")).offset().top   // .top+margin - ставьте минус, если хотите увеличить отступ
  //       }, {
  //          duration: 1600, // тут можно контролировать скорость
  //          easing: "swing"
  //       });
  //       return false;
  //    });
  // });

  // $(document).ready(function() {
  // $('.scrollBlock').click(function(){
  // var el = $(this).attr('href');
  // el = el.replace(/[^\#]*/, '');
  // $('body,html').animate({
  // scrollTop: $(el).offset().top}, 1000);
  // return false;
  // });
  // });
