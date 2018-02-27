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
    // $("#video-wrapper").imagesLoaded().progress(function (instance, image) {
    //     $(image.img).css('opacity', 1);
    // });

    //加载作品案例方法
    var page = 1; //默认初始为第一页
    var src = "";
    morevideo_icon.click(function () {
        $(this).attr({"src": "../../img/loading.png", "id": "loader"});
        for (var i = 0; i < 2; i++) {
            loadvideo();
        }
        $(this).attr({"src": "../img/add.png", "id": " "});
    });

    function loadvideo(pagesize) {
        $.ajax({
            type: "post",
            url: 'http://www.meflourish.com/mfgw.php/Index/index',
            async: false,
            data: {'page': page},
            success: function (data) {
                if (data == null) {
                    $("#morevideo-box").find("span").html("没有更多了");
                } else {
                    page++;
                    for (var i = 0; i < data.length; i++) {
                        var tpl = '<div class="' + data[i].caseType + '-box getpop animated fadeIn">'
                            + '<div class="master">'
                            + '<p class="master-intro">' + data[i].caseName + '</p>'
                            + '<p class="master-tag">' + data[i].caseTag + '</p>'
                            + '</div>'
                            + '<div class="poster-box">'
                            + '<img class="poster" src="video/poster/' + data[i].poster + '" alt="">'
                            + '</div>'
                            + '<span class="video-src">' + data[i].url + '</span>'
                            + '</div>';
                        $("#video-outer-box").append(tpl);
                    }
                }
                common.reloadvideo();
            },
            error: function () {
                alert("加载出错，请重新尝试。")
            }
        });
    }

    for (var i = 0; i < 3; i++) {
        loadvideo();
    }

});