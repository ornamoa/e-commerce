var Product = (function () {

    var converter = function (form) {
        return {
            name: form.name,
            quantity: form.quantity,
            price: form.price,
            pid: form.pid,
            shortDescription: "Låg energi led-lampa.",
            longDescription: "Grym låg energi led-lampa, lyser upp hela rummet.",
            specs: {
                wat: 99,
                burnTime: 9999,
                environmental: true
            }
        };
    };

    return {
        converter: converter
    };

}());
