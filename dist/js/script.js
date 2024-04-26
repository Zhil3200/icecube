window.addEventListener('DOMContentLoaded', () => {

    const navBtn = document.querySelector('.mobile-btn'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    nav = document.querySelector('.header__wrapper');

    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle('mobile-btn_open');
        nav.classList.toggle('header__wrapper_open');
        document.body.classList.toggle('no-scroll');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            navBtn.classList.toggle('mobile-btn_open');
            nav.classList.toggle('header__wrapper_open');
            document.body.classList.toggle('no-scroll');
        })
    });

    // const callButton = document.querySelectorAll('[data-modal=order-call]'),
    // productButton = document.querySelectorAll('[data-modal=order-product]'),
    // overlay = document.querySelectorAll('.overlay'),
    // modalClose = document.querySelectorAll('.overlay__close');

    // callButton.forEach(item => {
    //     item.addEventListener('click', () => {
    //         overlay[0].classList.toggle('overlay_open');
    //         document.body.classList.toggle('no-scroll');
    //     });
    // });
    // productButton.forEach(item => {
    //     item.addEventListener('click', () => {
    //         overlay[1].classList.toggle('overlay_open');
    //         document.body.classList.toggle('no-scroll');
    //     });
    // });
    // modalClose.forEach(item => {
    //     item.addEventListener('click', () => {
    //         overlay[0].classList.remove('overlay_open');
    //         overlay[1].classList.remove('overlay_open');
    //         overlay[2].classList.remove('overlay_open');
    //         document.body.classList.toggle('no-scroll');
    //     });
    // });

    // const forms = document.querySelectorAll('.order-form');

    // forms[1].addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     e.currentTarget.querySelectorAll('input').forEach(function(field){
    //         console.log(field.name+"="+field.value);
    //     });
    //     e.target.reset();
    //     overlay[0].classList.remove('overlay_open');
    //     overlay[1].classList.remove('overlay_open');
    //     overlay[2].classList.toggle('overlay_open');
    // });

    $('[data-modal=order-call]').on('click', function() {
        $('#order-call').fadeIn('slow');
        $(document.body).toggleClass('no-scroll');
    });
    $('[data-modal=order-product]').on('click', function() {
        $('#order-production').fadeIn('slow');
        $(document.body).toggleClass('no-scroll');
    });
    $('.overlay__close').on('click', function() {
        $('#order-call, #order-production, #order-thanks').fadeOut('slow');
        $(document.body).removeClass('no-scroll');
    });

    const forms = $('.order-form');

    function sendForm(form, flag = true) {
        $(form).submit(function(e) {
            e.preventDefault();
    
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                if (flag) {
                    $('#order-call, #order-production, #order-thanks').fadeOut('slow');
                    $(document.body).removeClass('no-scroll');
                }
                $('#order-thanks').fadeIn('slow');
                $(document.body).toggleClass('no-scroll');
            });
            $(this).trigger('reset');
        });
    }
    
    sendForm(forms[0], false);
    sendForm(forms[1]);
    sendForm(forms[2]);
    


});