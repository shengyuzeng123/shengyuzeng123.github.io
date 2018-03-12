$(function () {
    wx.config(wx_conf);
    wx.ready(function () {
        wx.onMenuShareTimeline({//朋友圈
            title: '500年后，晶晶约你中秋一起……',
            link: 'http://www.meflourish.com/activities/chaye',
            imgUrl: 'http://i2.bvimg.com/592631/50fe7bcfce5a49a2t.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({//发送给好友
            title: '500年后，晶晶约你中秋一起……',
            desc: '曾经，有一份爱情摆在我的面前，我没有珍惜，失去后才后悔莫及。',
            link: 'http://www.meflourish.com/activities/chaye',
            imgUrl: 'http://i2.bvimg.com/592631/50fe7bcfce5a49a2t.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });
    });

    var video = $("#video"),
        player = $("#player"),
        poster = $("#poster"),
        video_box = $("#video_box");
    video_box.height((video_box.width()) * 0.562);

    player.on('click', function () {
        video[0].play();
        // $("#Jaudio")[0].pause();
        poster.fadeOut(100);
        player.fadeOut(100);
        setInterval(function () {
            if (video[0].ended == 1) {
                player.fadeIn(300);
                // poster.fadeOut(300);
            }
        }, 100)
    })

     //音频播放
    // function audioAutoPlay(id) {
    //     var audio = document.getElementById(id),
    //         play = function () {
    //             audio.play();
    //             document.removeEventListener("touchstart", play, false);
    //         };
    //     audio.play();
    //     document.addEventListener("WeixinJSBridgeReady", function () {
    //         play();
    //     }, false);
    //     document.addEventListener('YixinJSBridgeReady', function () {
    //         play();
    //     }, false);
    //     document.addEventListener("touchstart", play, false);
    // }
    // audioAutoPlay('Jaudio');


    var width = $("body").width();
    var height = width * 1.78;
    var introImg = $(".introImg"),
        xing = $(".xing"),
        intro = $(".intro");
    introText = $(".introText");
    $("body").height(height);
    $("footer").css("top", height - 160 + 'px');
    var url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) {
        var str = url.substr(4);
        switch (str) {
            case "kh":
                introImg.attr("src", "img/kouhong.png");
                xing.text("推荐指数 ♥♥");
                introText.text("口红颜色多，不知道她喜欢哪个颜色，没本事买一套还不如不买 :)");
                // intro.append('<br><span><a href="https://h5.youzan.com/v2/showcase/goods?alias=3nsxvcqi7s14a">点击有惊喜</a></span>')
                break;
            case "hu":
                introImg.attr("src", "img/hu.png");
                xing.text("推荐指数 ♥♥♥♥♥");
                introText.text("取材景德镇高岭土，匠人小山全手工制作，壶体通透、薄如蝉翼，平淡、素雅、宁静。\n" +
                    "中秋将至，饮茶赏月，美哉美哉！");
                intro.append('<br><span class="dianji"><a class="btn btn-danger" href="https://h5.youzan.com/v2/goods/3f42fejm2p8ze">点击有惊喜</a></span>')
                break;
            case "cy":
                introImg.attr("src", "img/chaye.png");
                xing.text("推荐指数 ♥♥♥♥♥");
                introText.text(" 成功get到了晶晶的心意。秋葵罐和茶叶的组合，和晶晶的秋葵茶具也更配喔！点击连接即可得到！");
                intro.append('<br><span class="dianji"><a class="btn btn-danger" href="https://h5.youzan.com/v2/showcase/goods?alias=3nsxvcqi7s14a">点击有惊喜</a></span>')
                break;
        }
    }

})