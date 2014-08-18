var BaseStore = (function () {

    var element = $("html"),

    get = function () {
        return element.attr("data-store");
    },

    set = function (store) {
        element.attr("data-store", store);
    },

    currentBaseStore = get();

    return {
        get: get,
        set: set
    };

}());
