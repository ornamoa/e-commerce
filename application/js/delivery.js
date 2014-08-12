var Delivery = (function () {
    var deliveryModes = { "invoice" : {price: 49} },

    getPrice = function (id) {
        if(typeof(deliveryModes[id]) == "undefined") {
            return 59;
        }

        return deliveryModes[id].price;
    };

    return {
        getPrice: getPrice
    };

}());
