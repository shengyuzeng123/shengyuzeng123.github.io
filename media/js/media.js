require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery",
        "common": "../../js/common",
        "echarts": "../../js/echarts.common.min",
        // "Swiper": "https://cdn.bootcss.com/Swiper/4.1.0/js/swiper.min",
        "imagesLoaded": "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd"
    },
    shim: {
        "imagesLoaded": {
            deps: ["jquery"]
        }
    },
    waitSeconds: 100
});
require(["jquery", "common", "echarts", "imagesLoaded"], function ($, common, echarts) {
    if (location.search) {
        var idfromehome = location.search;
        var id = idfromehome.substring(4);
        var st = $("#" + id).offset().top;
        $(window).scrollTop(st - 280);
        $("#" + id).find("label").css("animation", "shine 4s infinite");
        // $(window).scroll(function () {
        //     if ($(window).scrollTop() != st - 280) {
        //         $("#" + id).find("label").css("animation", "none").siblings().css("animation", "none");
        //     }
        // });
    }

});