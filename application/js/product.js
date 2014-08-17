var Product = (function () {

    var converter = function (form) {
        var name = $("input[name='name']", form).val(),
            quantity = parseInt($("input[name='quantity']", form).val(), 10),
            price = parseInt($("input[name='price']", form).val(), 10),
            pid = $("input[name='pid']", form).val();

        product = {
            name: name,
            quantity: quantity,
            price: price,
            totalPrice: parseInt(quantity * price, 10),
            pid: pid,
            shortDescription: "Låg energi led-lampa.",
            longDescription: "Grym låg energi led-lampa, lyser upp hela rummet.",
            specs: {
                wat: 99,
                burnTime: 9999,
                environmental: true
            },
            discount: {
                hasDiscount: false,
                discountedPrice: undefined
            }
        };

        return product;
    };

    return {
        converter: converter
    };

}());
