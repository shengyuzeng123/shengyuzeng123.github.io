require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery",
        // "Swiper": "echarts.common.min"
    },
    waitSeconds: 100
});
require(["jquery", "common"], function ($, common) {
    init();//初始化页面
    var cases_box = $("#cases-box"),
        short_intro_box = $("#short-intro-box"),
        moreplate = $("#moreplate"),
        video_box = $(".video-box"),
        cover = $(".cover");
    $(".gzh-logo").mouseover(function () {
        $(this).parent().siblings(".ercode").stop().fadeIn(180);
    }).mouseout(function () {
        $(this).parent().siblings(".ercode").stop().fadeOut(180);
    })
    $(window).resize(function () {
        resizeVideo();
    });

    // 浏览器窗口宽度变化事件监听
    function resizeVideo() {
        $("#title-video").height($(window).height() - $("header").outerHeight() - 28);
    }

    // 页面初始化
    function init() {
        resizeVideo();
        common.logoSwiperd();//品牌logo滑动方法初始化
    }

    // 案例
    // function animate(object, findObject, fadeIn, fadeOut) {
    //     object.mouseover(function (e) {
    //             var thiscover = $(this).find(findObject);
    //             if (thiscover.hasClass(fadeOut) == 1) {
    //                 thiscover.removeClass(fadeOut);
    //             }
    //             $(this).find(findObject).addClass(fadeIn).css("opacity", "1");
    //         }
    //     ).mouseout(function () {
    //         $(this).find(findObject).removeClass(fadeIn).addClass(fadeOut);
    //     });
    // }
    //
    // animate(video_box, ".cover", "flipInX", "fadeOut");
});
