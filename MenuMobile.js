let OpenBtn = document.getElementById('mobileButtonOpen');

let CloseBtn = document.getElementById('mobileButtonClose');

let Menu = document.querySelector('.mobileMenu');
let menuOpen = false

function OpenMenu() {
    menuOpen = true
    OpenBtn.style.opacity = '0'
    Menu.style.marginTop = '0vh';
    Menu.style.animationName = 'OpenMenu';
}

function CloseMenu() {
    menuOpen = false
    Menu.style.marginTop = '-500vh';
    Menu.style.animationName = 'CloseMenu';
    OpenBtn.style.opacity = '1';
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 565 && menuOpen === true) {
        CloseMenu();
    }
});
