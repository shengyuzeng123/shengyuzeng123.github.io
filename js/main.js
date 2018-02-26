require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery"
    }
});
require(["jquery", "common"], function ($, common) {
    $(function () {
        var cases_box = $(".cases-box");
        var video = $("#video");
        var src = "";
        var pop_video_title = $(".pop-video-title");
        var pop_outer_box = $(".pop-outer-box"), //弹出框外层盒子
            pop_box_close = $(".pop-box-close"), //弹出框关闭按钮
            pop_box = $(".pop-box"); //弹出框内层

        // 链接跳转绑定
        $.ajax({
            type: "get",
            url: 'http://www.meflourish.com/mfgw.php/Index/index',
            async: false,
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    var video_tpl = "";
                    video_tpl += '<div class="video-box">';
                    video_tpl += '<img class="player-img" src="img/player2-s.png"></img>'
                    video_tpl += '<div class="video-box-excludeInfo">';
                    video_tpl += '<div class="video-title">' + data[i].videoName + '</div>';
                    video_tpl += '<div class="video-poster">';
                    video_tpl += '<img class="video-img" src="video/poster/' + data[i].videoName + '.jpg" alt="">';
                    video_tpl += '<span class="video-src">' + data[i].videoName + '.mp4</span>';
                    video_tpl += '</div>';
                    video_tpl += '<div class="video-intro">' + data[i].video_intro + '</div>';
                    video_tpl += '</div>';
                    video_tpl += '<div class="video-info">' + data[i].player_s;
                    video_tpl += '</div>'
                    video_tpl += '</div>';
                    cases_box.append(video_tpl);
                }
            },
            error: function () {
                alert("error");
            }
        });
        $(".video-box").click(function () {
            pop_box.css("margin-top", $(window).height() * 0.2 + "px");
            pop_video_title.html($(this).find(".video-title").text());
            var posterSrc = $(this).find(".video-img").attr("src");
            // video.attr("poster",posterSrc);
            var video_src = $(this).find(".video-src").html();
            videojs("#video", {}, function () {
                var myPlayer = this;
                myPlayer.poster(posterSrc); //插入缩略图
                myPlayer.src("video/" + video_src);//插入视频地址
                if ($(window).width() <= 416) { //如果是小屏幕就直接播放
                    myPlayer.play();
                }
            })
        });

        // --弹出框--
        pop_box_close.click(function () {
            video[0].pause();
        });
        pop_outer_box.height($(document).height());
        // pop_box.css("margin-top", "200px");
        pop_outer_box.hide();
        $(".video-box").on("click", function () {
            if (pop_box.hasClass("fadeOutDownBig") == 1) {
                pop_box.removeClass("fadeOutDownBig");
            }
            pop_outer_box.fadeIn(210);
            pop_box.css("visibility", "visible").addClass("fadeInUp");
        });
        pop_box_close.on("click", function () {
            pop_box.removeClass("fadeInUp").addClass("fadeOutDownBig");
            setTimeout(function () {
                pop_outer_box.fadeOut(200);
            }, 300);
        });
    });
})
