$(document).ready(function() {
    var visualisations = function(mycallback) {
        $("#visualisations").typed({
            strings: ["visualisations"],
            typeSpeed: 50,
            loop: false,
            showCursor: false,
            callback: function(mycallback) {}
        });
    }
    var posts = function(mycallback) {
        $("#posts").typed({
            strings: ["posts"],
            typeSpeed: 50,
            loop: false,
            showCursor: false,
            callback: function(mycallback) {}
        });
    }
    var gallery = function(mycallback) {
        $("#gallery").typed({
            strings: ["gallery"],
            typeSpeed: 50,
            loop: false,
            showCursor: false,
            callback: function(mycallback) {}
        });
    }
    var done = false;

    $('#more').click(function() {
        if (!done) {
            visualisations(posts(gallery(function() {
                done = true;
            })));
        }
    });
    $('#contact').click(function() {

    });
    $("#andrecowie").typed({
        strings: ["Andre Cowie"],
        typeSpeed: 50,
        loop: false,
        showCursor: false,
        callback: function() {
            $("#contact").typed({
                strings: ["CONTACT"],
                typeSpeed: 50,
                loop: false,
                showCursor: false,
                callback: function() {
                    $("#more").typed({
                        strings: ["MORE"],
                        typeSpeed: 50,
                        loop: false,
                        showCursor: false,
                        callback: function() {
                            particlesJS.load('particles', './static/js/particle-config.json', function() {
                                $('#particles').animate({
                                    opacity: 1
                                }, 1000, function() {});
                            });
                        }
                    });
                }
            });
        }
    });
});
