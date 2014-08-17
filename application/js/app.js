$(document).ready(function () {
    Basket.refresh(); // Incase there is something in the cart on pageload
    
    $("body").on("click", ".add-to-cart", function (e) {
        e.preventDefault();
        Basket.add($(this).closest("form"));
        Basket.refresh();
    });

    $("body").on("click", ".remove-from-cart", function (e) {
        e.preventDefault();
        Basket.remove($(this).closest("tr").attr("data-entry"));
        Basket.refresh();
    });
});
