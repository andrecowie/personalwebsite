particlesJS.load('particles', './static/js/particle-config.json', function() {});

var setDashoffset = function(el) {
    var l = el.getTotalLength();
    el.setAttribute('stroke-dasharray', l);
    return [l,0];
  }

var timeline = anime.timeline();
timeline.add({
   targets: '.linez',
   opacity: [0, 1],
   duration: 500,
   easing: 'linear'
 });
 timeline.add({
      targets: '#abc .linez path',
    strokeDashoffset: {
      value: setDashoffset,
      duration: 1700,
      easing: 'easeInOutQuad'
    },
    transform: ['translate(0 256)', 'translate(0 0)'],
    offset: "-=500"
  });
timeline.add({
  targets: '#abc .linez path',
  strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    loop: false,
    offset: "-=1800"
});





var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
var fireworks = (function() {

  var getFontSize = function() {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  var canvas = document.querySelector('.fireworks');
  var ctx = canvas.getContext('2d');
  var numberOfParticules = 24;
  var distance = 200;
  var x = 0;
  var y = 0;
  var animations = [];

  var setCanvasSize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  var updateCoords = function(e) {
    x = e.clientX || e.touches[0].clientX;
    y = e.clientY || e.touches[0].clientY;
  }

  var colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99', '#11AE00', '#9200AE'];

  var createCircle = function(x,y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.color = colors[Math.floor(Math.random()*colors.length)];;
    p.radius = 0;
    p.alpha = 1;
    p.lineWidth = 6;
    p.draw = function() {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.lineWidth = p.lineWidth;
      ctx.strokeStyle = p.color;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    return p;
  }

  var createParticule = function(x,y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(getFontSize(), getFontSize() * 2);
    p.draw = function() {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    return p;
  }

  var createParticles = function(x,y) {
    var particules = [];
    for (var i = 0; i < numberOfParticules; i++) {
      var p = createParticule(x, y);
      particules.push(p);
    }
    return particules;
  }

  var removeAnimation = function(animation) {
    var index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
  }

  var animateParticules = function(x, y) {
    setCanvasSize();
    var particules = createParticles(x, y);
    var circle = createCircle(x, y);
    var particulesAnimation = anime({
      targets: particules,
      x: function(p) { return p.x + anime.random(-distance, distance); },
      y: function(p) { return p.y + anime.random(-distance, distance); },
      radius: 0,
      duration: function() { return anime.random(1200, 1800); },
      easing: 'easeOutExpo',
      complete: removeAnimation
    });
    var circleAnimation = anime({
      targets: circle,
      radius: function() { return anime.random(getFontSize() * 8.75, getFontSize() * 11.25); },
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: function() { return anime.random(400, 600); }
      },
      duration: function() { return anime.random(1200, 1800); },
      easing: 'easeOutExpo',
      complete: removeAnimation
    });
    animations.push(particulesAnimation);
    animations.push(circleAnimation);
  }

  var mainLoop = anime({
    duration: Infinity,
    update: function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animations.forEach(function(anim) {
        anim.animatables.forEach(function(animatable) {
          animatable.target.draw();
        });
      });
    }
  });

  document.addEventListener(tap, function(e) {
    updateCoords(e);
    animateParticules(x, y);
  }, false);

  window.addEventListener('resize', setCanvasSize, false);

  return {
    boom: animateParticules
  }

})();

//
// function personalAnswered(x) {
//     $.ajax({
//         url: "/personal",
//         type: "POST",
//         data: JSON.stringify({
//             answer: x ? 1 : 0
//         }, null, '\t'),
//         contentType: "application/json",
//
//         success: function(response) {
//             console.log(response);
//         }
//     })
// }
//
// $("#personalno").click(function() {
//     personalAnswered(false);
//     $('#welcomebody').addClass("hide");
//
//     // Someone doesnt know me welcome
//
//     $('#whyyouhere').removeClass("hide");
// });
//
// $("#personalyes").click(function() {
//     personalAnswered(true);
//     $('#welcomebody').addClass("hide");
//     $('#howpersonal').removeClass("hide");
// });
//
// $("#howclose").click(function() {
//     console.log("clicked");
// });
//
// $("#howclose").hover(function(e) {
//     var parentOffset = $(this).offset();
//     var parentWidth = $(this).width();
//     //or $(this).offset(); if you really just want the current element's offset
//     var relX = e.pageX - parentOffset.left;
//     console.log(relX);
//     console.log(relX / parentWidth);
//     console.log("" + (relX / parentWidth) * 100 + "%");
//     $("#thatclose").css("width", "" + Math.floor(relX / parentWidth * 100) + "%");
// });
//
// $("#howclose").mousemove(function(e) {
//     var parentOffset = $(this).offset();
//     var parentWidth = $(this).width();
//     //or $(this).offset(); if you really just want the current element's offset
//     var relX = e.pageX - parentOffset.left;
//     console.log(relX);
//     console.log(relX / parentWidth);
//     console.log("" + (relX / parentWidth) * 100 + "%");
//     $("#thatclose").css("width", "" + Math.floor(relX / parentWidth * 100) + "%");
// });
//
// $("#whyhere").click(function() {
//     var why = $("#whytextinput").val();
//     if (why.length > 0) {
//         $("#whathererow").addClass("hide");
//         $("#whyyouhereloading").removeClass("hide");
//         $.ajax({
//             url: "/whatHereFor",
//             type: "POST",
//             data: JSON.stringify({
//                 answer: why
//             }, null, '\t'),
//             contentType: "application/json",
//             dataType: "json",
//             success: function(data) {
//
//             }
//         })
//     }
// })
//
// //Btc Prices
// var financePrices;
// //variable for keeping track of current btc view
// var financeCount;
//
// function setBTCFinanceText(x, y) {
//     $("#currentBtcExc").get(0).innerHTML = "$" + x;
//     $("#currentBtcCur").get(0).innerHTML = y;
// }
//
// var nzdToExchange;
// var exchangeCount;
//
// function financeReady() {
//     console.log("My Finance Calls");
//     $.ajax({
//         dataType: "json",
//         url: 'http://api.coindesk.com/v1/bpi/currentprice/NZD.json',
//         type: "GET",
//         success: function(response) {
//             financePrices = [{
//                 "amount": parseInt(response["bpi"]["NZD"]["rate"].replace(/,/g, '')),
//                 "name": "NZD"
//             }, {
//                 "amount": parseInt(response["bpi"]["USD"]["rate"].replace(/,/g, '')),
//                 "name": "USD"
//             }];
//             financeCount = 0;
//              setBTCFinanceText(financePrices[financeCount]["amount"],financePrices[financeCount]["name"] );
//              $.ajax({
//                  dataType: "json",
//                  url: 'http://api.coindesk.com/v1/bpi/currentprice/AUD.json',
//                  type: "GET",
//                  success: function(response) {
//                      financePrices.push({"amount":  parseInt(response["bpi"]["AUD"]["rate"].replace(/,/g, '')), "name":"AUD"});
//                  }
//              });
//         }
//
//     });
//     $.ajax({
//         dataType: "json",
//         url: 'http://api.fixer.io/latest?base=NZD',
//         type: "GET",
//         success: function(response) {
//             nzdToExchange = [];
//             Object.keys(response['rates']).forEach(function(each){
//                 nzdToExchange.push({"amount" : response['rates'][each], "name": each});
//             });
//             exchangeCount = 0;
//             $("#nzdtoCur").get(0).innerHTML = nzdToExchange[exchangeCount]['amount'] + " " + nzdToExchange[exchangeCount]['name'];
//         }
//     })
// }
//
// function changeCur(x) {
//     if(x){
//         exchangeCount++;
//         if(exchangeCount >= nzdToExchange.length){
//             exchangeCount=0;
//         }
//     }else{
//         if(exchangeCount==0){
//             exchangeCount = nzdToExchange.length;
//         }
//         exchangeCount--;
//     }
//     $("#nzdtoCur").get(0).innerHTML = nzdToExchange[exchangeCount]['amount'] + " " + nzdToExchange[exchangeCount]['name'];
// }
//
// function changeBtcCur(x) {
//     if(x){
//         financeCount++;
//         if(financeCount >= financePrices.length){
//             financeCount=0;
//         }
//     }else{
//         if(financeCount==0){
//             financeCount = financePrices.length;
//         }
//         financeCount--;
//     }
//     setBTCFinanceText(financePrices[financeCount]["amount"],financePrices[financeCount]["name"] );
// }
