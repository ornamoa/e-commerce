var Currency = (function () {

    var element = $("html"),

    map = {
        "se": {
            long: "SEK",
            short: ";-"
        },
        "no":{
            long: "NOK",
            short: ";-"
        },
        "da":{
            long: "DK",
            short: ";-"
        },
        "fi":{
            long: "EUR",
            short: "€"
        },
        "es":{
            long: "EUR",
            short: "€"
        },
        "it":{
            long: "EUR",
            short: "€"
        },
        "de":{
            long: "EUR",
            short: "€"
        }
    },

    get = function () {
        return map[element.attr("data-country")];
    },

    set = function (country) {
        element.attr("data-country", country);
    },

    currentCurrency = get();

    return {
        get: get,
        set: set
    };

}());
