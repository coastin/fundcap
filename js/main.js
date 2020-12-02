$(document).ready(function () {
    $("#nav__toggle").on("click", function () {
        $(this).toggleClass("nav__toggle--active");
        $(".navbar").toggleClass("header__nav--active");

        if (!$.contains($(".navbar"), $("header__btns"))) {
            $(".header__btns").show();
            $(".header__btns").appendTo(".navbar");
        }
    });
});
