$(document).ready(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open')
    })
});