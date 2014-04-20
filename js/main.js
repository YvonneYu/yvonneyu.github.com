
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 330) {
            $('#navSection').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 330) {
            $('#navSection').removeClass('navbar-fixed');
        }
    });
});