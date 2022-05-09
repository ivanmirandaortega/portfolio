let container = document.getElementsByClassName('container');
let nav = document.getElementsByTagName('nav')

// 
function mobilecontainer() {
    if (nav.style.display === 'BLOCK') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}