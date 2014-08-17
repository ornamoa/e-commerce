var Tax = (function () {

    var tax = 25, // percentage

        getTaxFor = function (items) {
            var i = 0,
                ilen = items.length,
                totalTax = 0,
                totalPrice = 0;

            for(; i < ilen; i += 1) {
                totalPrice += items[i].quantity * items[i].price;
            }

            totalTax = parseInt((totalPrice * tax) / 100, 10);

            return totalTax;
        },

        setTax = function (newTax) {
            tax = newTax;
        };

    return {
        getTaxFor: getTaxFor,
        setTax: setTax
    };

}());
