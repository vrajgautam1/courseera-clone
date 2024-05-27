// scripts.js
$(window).on('load', function () {
    $('#loader').fadeOut('slow', function () {
        $('#content').fadeIn('slow');
    });
});