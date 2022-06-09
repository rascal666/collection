let outside_region_complex = document.querySelectorAll('.outside_region_complex');
let popapClose = document.querySelectorAll('.popapClose');
let content1 = document.querySelectorAll('.content');

console.log(outside_region_complex);


for (let index = 0; index < outside_region_complex.length; index++) {
    const item = outside_region_complex[index];
    item.addEventListener('click', function() {
        let openPopap = item.getAttribute('data-popap');
        document.getElementById(openPopap).style.display = 'grid';
        console.log(openPopap);
    })
}

for (let index = 0; index < popapClose.length; index++) {
    const item = popapClose[index];
    item.addEventListener('click', function() {
        let contentName = item.closest('.menu_region_complex');
        contentName.style.display = 'none';
        console.log(contentName);
    })
}



// window.onclick = function(e) {
//     if (!e.target.classList.contains('content')) {
//         e.target.style.display = 'none';
//         console.log("алоха");
//     }
// }

// button.forEach(function(item) {
//     item.addEventListener('click', function() {
//         let openPopap = item.getAttribute('data-popap');
//         document.getElementById(openPopap).style.display = 'block';
//         console.log(openPopap);
//     })
// });

// button.forEach(function(item) {
//     item.addEventListener('click', function() {
//         let closePopap = item.closest('.content');
//         closePopap.style.display = 'none';
//     })
// });