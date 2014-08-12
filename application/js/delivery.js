var Delivery = (function () {
    var deliveryModes = {
        "dhl": {price: 49},
        "schenker": {price: 49},
        "cod": {price: 69}
    },

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
