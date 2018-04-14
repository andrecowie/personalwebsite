$(document).ready(function() {
  $(".dropdown-trigger").dropdown();
  var opencontact = false;
  $('#contact').click(function() {
    if (opencontact) {
      anime({
        targets: '.contactcard',
        scaleX: {
          value: 0,
          duration: 500,
          easing: 'easeInExpo'
        }
      });
      opencontact = false;
    } else {
      anime({
        targets: '.contactcard',
        scaleX: {
          value: 1,
          duration: 500,
          easing: 'easeInExpo'
        }
      });
      opencontact = true;
    }
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
                }, 1000, function() {
                });
              });
            }
          });
        }
      });
    }
  });
});
