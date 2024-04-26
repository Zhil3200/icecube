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