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
        entry = parseInt(entry, 10);
        if(typeof(basket[entry]) != "undefined"){
            basket.splice(entry, 1);
        }
    },

    update = function (entry, value) {
        var currentItem = basket[entry];

        if(typeof(currentItem) != "undefined"){
            currentItem.quantity += value;
            currentItem.totalPrice = currentItem.quantity * currentItem.price;
            if(currentItem.quantity <= 0) {
                remove(entry);
            }
        }
    },

    summary = function () {
        var getTotalPrice = function () {
            var i = 0,
                ilen = basket.length,
                totalPrice = 0;

            for(; i < ilen; i += 1) {
                totalPrice += parseInt(basket[i].quantity * basket[i].price, 10);
            }

            return totalPrice;
        },

        getTotalItems = function () {
            var i = 0,
                ilen = basket.length,
                totalItems = 0;

            for(; i < ilen; i += 1){
                totalItems += parseInt(basket[i].quantity, 10);
            };

            return totalItems;
        },

        getDeliveryCost = function (deliveryType) {
            return Delivery.getPrice(deliveryType);
        },

        getPaymentCost = function (paymentType) {
            return Payment.getPrice(paymentType);
        },

        getTotalEntries = function () {
            return basket.length;
        },

        getTotalTax = function () {
            return Tax.getTaxFor(basket);
        };

        return {
            totalPrice: getTotalPrice(),
            totalItems: getTotalItems(),
            deliveryCost: getDeliveryCost,
            paymentCost: getPaymentCost,
            totalEntries: getTotalEntries(),
            totalTax: getTotalTax()
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

    refresh = function () {
        var basketRowsHtml = generateBasketRows(),
            basketSummaryHtml = generateBasketSummary();

        $("#basket-entries").html(basketRowsHtml);
        $("#basket-summary").html(basketSummaryHtml);
    },

    generateBasketRows = function () {
        var i = 0,
            ilen = basket.length,
            html = "",
            currency = Currency.get().long;

            for(; i < ilen; i += 1){
                html += "<tr data-entry='"+i+"'>";
                html += "<td>"+basket[i].pid+"</td>";
                html += "<td>"+basket[i].name+"</td>";
                html += "<td>"+basket[i].quantity+"</td>";
                html += "<td>"+basket[i].totalPrice+currency+"</td>";
                html += "<td><button class='remove-from-cart'>Remove</button></td>";
                html += "</tr>";
            }

            return html;
    },

    generateBasketSummary = function () {
        var currency = Currency.get().long,
            html = "";
            html += "<p>Antal produkter "+Basket.summary().totalItems+"</p>";
            html += "<p>Antal rader "+Basket.summary().totalEntries+"</p>";
            html += "<p>Total kostnad "+Basket.summary().totalPrice+currency+"</p>";

        return html;
    },


    basket = [];

    return {
        add: add,
        remove: remove,
        update: update,
        refresh: refresh,
        summary: summary,
        self: getBasket()
    };

}());
