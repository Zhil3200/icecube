window.addEventListener('DOMContentLoaded', () => {

    const navBtn = document.querySelector('.mobile-btn'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    nav = document.querySelector('.header__menu');

    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle('mobile-btn_open');
        nav.classList.toggle('header__menu_open');
        document.body.classList.toggle('no-scroll');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            navBtn.classList.toggle('mobile-btn_open');
            nav.classList.toggle('header__menu_open');
        })
    });

});