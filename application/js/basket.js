var Basket = (function () {

    var add = function (form) {
        var product = Product.converter(form),
            existInCartAtPosition = isProductExistInBasket(product);

        if(existInCartAtPosition !== false){
            update(existInCartAtPosition, product.quantity);
        } else {
            basket.push(product);
        }
    },

    remove = function (entry) {
        basket.splice(entry, 1);
    },

    update = function (entry, value) {
        basket[entry].quantity += value;

        if(basket[entry].quantity <= 0) {
            remove(entry);
        }
    },

    summary = function () {
        var getTotalPrice = function () {
            var i = 0,
                ilen = basket.length,
                totalPrice = 0;

            for(; i < ilen; i += 1) {
                totalPrice += basket[i].quantity * basket[i].price;
            }

            return totalPrice;
        },

        getTotalItems = function () {
            return basket.length;
        },

        getDeliveryCost = function (deliveryType) {
            return Delivery.getPrice(deliveryType);
        },

        getPaymentCost = function (paymentType) {
            return Payment.getPrice(paymentType);
        };

        return {
            totalPrice: getTotalPrice(),
            totalItems: getTotalItems(),
            deliveryCost: getDeliveryCost,
            paymentCost: getPaymentCost
        };
    },

    getBasket = function () {
        return basket;
    },

    isProductExistInBasket = function (product) {
        var i = 0,
            ilen = basket.length,
            productAlreadyInCart = false;

        for(; i < ilen; i += 1) {
            if(basket[i].pid == product.pid) {
                productAlreadyInCart = true;
                break;
            }
        }

        if(productAlreadyInCart) {
            return i;
        } else {
            return false;
        }
    },

    basket = [];

    return {
        add: add,
        remove: remove,
        update: update,
        summary: summary,
        self: getBasket()
    };

}());
