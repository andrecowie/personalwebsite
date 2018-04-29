$(document).ready(function() {
    particlesJS.load('particles', './static/js/particle-config.json', function() {
        $('#particles').animate({
            opacity: 1
        }, 1000, function() {})
    });
    $('.parallax').parallax();


})
