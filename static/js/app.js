particlesJS.load('particles', './static/js/particle-config.json', function() {});

function personalAnswered(x) {
    $.ajax({
        url: "/personal",
        type: "POST",
        data: JSON.stringify({
            answer: x ? 1 : 0
        }, null, '\t'),
        contentType: "application/json",

        success: function(response) {
            console.log(response);
        }
    })
}

$("#personalno").click(function() {
    personalAnswered(false);
    $('#welcomebody').addClass("hide");

    // Someone doesnt know me welcome

    $('#whyyouhere').removeClass("hide");
});

$("#personalyes").click(function() {
    personalAnswered(true);
    $('#welcomebody').addClass("hide");
    $('#howpersonal').removeClass("hide");
});

$("#howclose").click(function() {
    console.log("clicked");
});

$("#howclose").hover(function(e) {
    var parentOffset = $(this).offset();
    var parentWidth = $(this).width();
    //or $(this).offset(); if you really just want the current element's offset
    var relX = e.pageX - parentOffset.left;
    console.log(relX);
    console.log(relX / parentWidth);
    console.log("" + (relX / parentWidth) * 100 + "%");
    $("#thatclose").css("width", "" + Math.floor(relX / parentWidth * 100) + "%");
});

$("#howclose").mousemove(function(e) {
    var parentOffset = $(this).offset();
    var parentWidth = $(this).width();
    //or $(this).offset(); if you really just want the current element's offset
    var relX = e.pageX - parentOffset.left;
    console.log(relX);
    console.log(relX / parentWidth);
    console.log("" + (relX / parentWidth) * 100 + "%");
    $("#thatclose").css("width", "" + Math.floor(relX / parentWidth * 100) + "%");
});

$("#whyhere").click(function() {
    var why = $("#whytextinput").val();
    if (why.length > 0) {
        $("#whathererow").addClass("hide");
        $("#whyyouhereloading").removeClass("hide");
        $.ajax({
            url: "/whatHereFor",
            type: "POST",
            data: JSON.stringify({
                answer: why
            }, null, '\t'),
            contentType: "application/json",
            dataType: "json",
            success: function(data) {

            }
        })
    }
})

//Btc Prices
var financePrices;
//variable for keeping track of current btc view
var financeCount;

function setBTCFinanceText(x, y) {
    $("#currentBtcExc").get(0).innerHTML = "$" + x;
    $("#currentBtcCur").get(0).innerHTML = y;
}

var nzdToExchange;
var exchangeCount;

function financeReady() {
    console.log("My Finance Calls");
    $.ajax({
        dataType: "json",
        url: 'http://api.coindesk.com/v1/bpi/currentprice/NZD.json',
        type: "GET",
        success: function(response) {
            financePrices = [{
                "amount": parseInt(response["bpi"]["NZD"]["rate"].replace(/,/g, '')),
                "name": "NZD"
            }, {
                "amount": parseInt(response["bpi"]["USD"]["rate"].replace(/,/g, '')),
                "name": "USD"
            }];
            financeCount = 0;
             setBTCFinanceText(financePrices[financeCount]["amount"],financePrices[financeCount]["name"] );
             $.ajax({
                 dataType: "json",
                 url: 'http://api.coindesk.com/v1/bpi/currentprice/AUD.json',
                 type: "GET",
                 success: function(response) {
                     financePrices.push({"amount":  parseInt(response["bpi"]["AUD"]["rate"].replace(/,/g, '')), "name":"AUD"});
                 }
             });
        }

    });
    $.ajax({
        dataType: "json",
        url: 'http://api.fixer.io/latest?base=NZD',
        type: "GET",
        success: function(response) {
            nzdToExchange = [];
            Object.keys(response['rates']).forEach(function(each){
                nzdToExchange.push({"amount" : response['rates'][each], "name": each});
            });
            exchangeCount = 0;
            $("#nzdtoCur").get(0).innerHTML = nzdToExchange[exchangeCount]['amount'] + " " + nzdToExchange[exchangeCount]['name'];
        }
    })
}

function changeCur(x) {
    if(x){
        exchangeCount++;
        if(exchangeCount >= nzdToExchange.length){
            exchangeCount=0;
        }
    }else{
        if(exchangeCount==0){
            exchangeCount = nzdToExchange.length;
        }
        exchangeCount--;
    }
    $("#nzdtoCur").get(0).innerHTML = nzdToExchange[exchangeCount]['amount'] + " " + nzdToExchange[exchangeCount]['name'];
}

function changeBtcCur(x) {
    if(x){
        financeCount++;
        if(financeCount >= financePrices.length){
            financeCount=0;
        }
    }else{
        if(financeCount==0){
            financeCount = financePrices.length;
        }
        financeCount--;
    }
    setBTCFinanceText(financePrices[financeCount]["amount"],financePrices[financeCount]["name"] );
}
