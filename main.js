$(document).ready(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');

    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu').removeClass('open');
        $('.top-nav').removeClass('open');

    });
});