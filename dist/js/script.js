$( document ).ready(function() {

    const navBtn = $('.mobile-btn'),
    menuItem = $('.header__menu-item'),
    nav = $('.header__wrapper');

    function removeMenu() {
        navBtn.removeClass('mobile-btn_open');
        nav.removeClass('header__wrapper_open');
    }

    navBtn.on('click', function() {
        navBtn.toggleClass('mobile-btn_open');
        nav.toggleClass('header__wrapper_open');
        $(document.body).toggleClass('no-scroll');
    });

    menuItem.on('click', function() {
        removeMenu();
        $(document.body).removeClass('no-scroll');
    });

    $('[data-modal=order-call]').on('click', function() {
        $('#order-call').fadeIn('slow');
        $(document.body).addClass('no-scroll');
        removeMenu();
    });
    $('[data-modal=order-product]').on('click', function() {
        $('#order-production').fadeIn('slow');
        $(document.body).addClass('no-scroll');
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

    $('input[name=phone]').mask("+375 (99) 999-99-99");

    new WOW(
        {offset:200,
        animateClass: 'animate__animated'}
    ).init();

});