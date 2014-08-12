var Payment = (function () {
    var paymentModes = { "klarna" : {price: 49} },

    getPrice = function (id) {
        if(typeof(paymentModes[id]) == "undefined") {
            return 59;
        }

        return paymentModes[id].price;
    };

    return {
        getPrice: getPrice
    };

}());
