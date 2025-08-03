(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });



    // Header Booking

    $("#checkAvail").on('click', function () {
        var checkIn = $("#date1 input").val().trim();
        var checkOut = $("#date2 input").val().trim();
        var adult = $("#selct1").val();
        var children = $("#selct2").val();


        if (!checkIn || !checkOut || !adult || !children) {
            $("#resultDiv")
                .removeClass("alert-info")
                .addClass("alert-danger")
                .html("<strong>Error!</strong> Please fill in all fields.")
                .fadeIn();

            setTimeout(function () {
                $("#resultDiv").fadeOut();
            }, 10000);
        } else {

            let result = `
            <strong>Booking Details:</strong><br>
            <b>Check-in Date:</b> ${checkIn}<br>
            <b>Check-out Date:</b> ${checkOut}<br>
            <b>Adults:</b> ${adult}<br>
            <b>Children:</b> ${children}
        `;
            $("#resultDiv")
                .removeClass("alert-danger")
                .addClass("alert-info")
                .html(result)
                .fadeIn();


            setTimeout(function () {
                $("#resultDiv").fadeOut();
                window.location.href = "booking.html";
            }, 10000);

        }
    });


    // Booking Form

    $("form").on('submit', function (e) {
        e.preventDefault();

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var checkIn = $("#checkin").val().trim();
        var checkOut = $("#checkout").val().trim();
        var adults = $("#select1").val().trim();
        var children = $("#select2").val().trim();
        var rooms = $("#select3").val().trim();
        var message = $("#message").val().trim();

        if (!name || !email || !checkIn || !checkOut || !adults || !children || !rooms) {
            $("#resultDiv")
                .removeClass("alert-info")
                .addClass("alert-danger")
                .html("<strong>Error!</strong> Please fill in all required fields.")
                .fadeIn();

            setTimeout(function () {
                $("#resultDiv").fadeOut();
            }, 10000);
        } else {
            let result = `
            <strong>Booking Details:</strong><br>
            <b>Name:</b> ${name}<br>
            <b>Email:</b> ${email}<br>
            <b>Check-in:</b> ${checkIn}<br>
            <b>Check-out:</b> ${checkOut}<br>
            <b>Adults:</b> ${adults}<br>
            <b>Children:</b> ${children}<br>
            <b>Rooms:</b> ${rooms}<br>
            <b>Special Request:</b> ${message || 'None'}
        `;
            $("#resultDiv")
                .removeClass("alert-danger")
                .addClass("alert-info")
                .html(result)
                .fadeIn();

            setTimeout(function () {
                $("#resultDiv").fadeOut(function () {
                    window.location.href = "booking.html";
                });
            }, 10000);
        }
    });



})(jQuery);

