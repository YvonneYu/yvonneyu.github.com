
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 320) {
            $('#navSection').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 320) {
            $('#navSection').removeClass('navbar-fixed');
        }
    });
});