require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery",
        "common": "../../js/common",
        // "imagesLoaded": "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd"
    },
    // shim: {
    //     "imagesLoaded": {
    //         deps: ["jquery"]
    //     }
    // }
});
require(["jquery", "common"], function ($, common) {
    var page = 1;

    function morenews() {
        $.ajax({
            type: 'post',
            async: false,
            data: {'page': page},
            url: "http://www.meflourish.com/mfgw.php/Index/getnews",
            success: function (data) {
                if (data == null) {
                    $("#morevideo-box").find("span").html("没有更多了");
                } else {
                    page++;
                    for (var i = 0; i < data.length; i++) {
                        var tpl = '<div class="news-item clearfix">'
                            + '<div class="news-time-box">'
                            + '<div class="news-time">'
                            + '<p class="news-month">' + data[i].month + '月</p>'
                            + '<p class="news-day">' + data[i].day + '</p>'
                            + '</div>'
                            + '</div>'
                            + '<div class="news-msg-box">'
                            + '<p class="news-tag">' + data[i].tag + '</p>'
                            + '<p class="news-title ' + data[i].type + '-box getpop">' + data[i].title + '<span class="video-src">' + data[i].url + '</span></p>'
                            + '<p class="news-intro">' + data[i].intro + '...</p>'
                            + '</div>'
                            + '<div class="news-img-box">'
                            + '<img src="../article/img/chunwan.png" alt=""></div></div>'
                        $("#news-wrapper").append(tpl);
                    }
                }
                common.reloadvideo();
            },
            error: function () {
                alert("发生了点错误，请重新尝试");
            }
        })
    }

    morenews();
    $(".morevideo-icon").click(function () {
        morenews();
    })
});