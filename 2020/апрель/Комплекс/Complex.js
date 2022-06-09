document.getElementById('wrapper_region_complex').onmouseover = function(event) {
    let target = event.target;
    if (target.className == 'blocks_region_complex') {
        let s = target.getElementsByClassName('menu_region_complex');
        closeMenu();
        s[0].style.display = 'grid';
    }
}

if (window.matchMedia("(max-width: 1024px)")) {
    document.onmouseover = function(event) {
        let target = event.target;
        if (target.className != 'blocks_region_complex' && target.className != 'menu_region_complex' &&
            target.className != 'heading_region_complex' &&
            target.className != 'subtitle_region_complex' &&
            target.className != 'submenu_region_complex') {
            closeMenu();
        }
    }
}



// document.onmouseover = function(event) {
//     let heading_region_complex = document.getElementById('heading_region_complex');
//     let target = event.target;
//     if (target.className == menu_region_complex) {
//         heading_region_complex.className.add('red');
//     }
// }

function closeMenu() {
    let menu = document.getElementById('wrapper_region_complex');
    let subm = document.getElementsByClassName('menu_region_complex')
    for (let index = 0; index < subm.length; index++) {
        subm[index].style.display = 'none';

    }
}