require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery",
        "common": "../../js/common",
        "imagesLoaded": "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd"
    },
    shim: {
        "imagesLoaded": {
            deps: ["jquery"]
        }
    }
});
require(["jquery", "common", "imagesLoaded"], function ($, common) {
    var video_outer_box = $("#video-outer-box"),
        morevideo_icon = $(".morevideo-icon");
    $("#video-wrapper").imagesLoaded().progress(function (instance, image) {
        $(image.img).css('opacity', 1);
    });

    morevideo_icon.click(function () {
        for (var i = 0; i < 3; i++) {
        }
    })
});