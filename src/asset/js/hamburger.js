const body = document.querySelector('body');
const globalNav = document.querySelector('#global_nav');
const jsNavCover = document.querySelector('.js-nav-cover');
const lglobalnavitem = document.querySelectorAll('.l-global_nav_item');
const jsButtonHamburger = document.getElementById('js-buttonHamburger');

jsButtonHamburger.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('is-drawerActive');
    const isDrawerActive = document.querySelector('body').classList.contains('is-drawerActive')

    if (isDrawerActive) {
        closeHamburger();
    } else {
        openHamburger();
    }
});

function closeHamburger () {
    globalNav.classList.add('is-hidden');
    jsNavCover.classList.add('is-hidden');
    jsButtonHamburger.setAttribute('aria-expanded', false);
    jsNavCover.style.opacity = 0;
    for (i = 0; i < lglobalnavitem.length; i++) {
        lglobalnavitem[i].style.opacity = 0;
    }
}

function openHamburger () {
    globalNav.classList.remove('is-hidden');
    jsNavCover.classList.remove('is-hidden');
    jsButtonHamburger.setAttribute('aria-expanded', true);
    jsNavCover.style.opacity = 1;
    for (i = 0; i < lglobalnavitem.length; i++) {
        lglobalnavitem[i].style.opacity = 1;
    }
}