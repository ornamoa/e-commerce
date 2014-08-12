var Product = (function () {

    var converter = function (form) {
        return {
            name: form.name,
            quantity: form.quantity,
            price: form.price,
            pid: form.pid
        };
    };

    return {
        converter: converter
    };

}());
