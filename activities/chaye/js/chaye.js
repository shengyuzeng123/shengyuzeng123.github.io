$(function () {
    wx.config(wx_conf);
    wx.ready(function () {
        wx.onMenuShareTimeline({//朋友圈
            title: '500年后，晶晶约你中秋一起……',
            link: location.href,
            imgUrl: 'http://i2.bvimg.com/592631/50fe7bcfce5a49a2t.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({//发送给好友
            title: '500年后，晶晶约你中秋一起……',
            desc: '曾经，有一份爱情摆在我的面前，我没有珍惜，失去后才后悔莫及。',
            link: location.href,
            imgUrl: 'http://i2.bvimg.com/592631/50fe7bcfce5a49a2t.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });
    });

    var btnImg = $(".btn_box>img"),
        intro = $(".intro"),
        ensure = $(".ensureBtn"),
        tanchuang = $(".qipao");
    btnImg.click(function (e) {
        switch ($(this).index()) {
            case 0:
                tanchuang.fadeIn();
                tanchuang.addClass("bounceIn");
                intro.html("女孩子的礼物就是好选，不知道送什么的时候一支口红总不会错！晶晶这么棒，我送十支！");
                ensure.attr("href", "info01.html?id=kh");
                break;
            case 1:
                tanchuang.fadeIn();
                tanchuang.addClass("bounceIn");
                intro.html("女神邀我喝茶，必是喜欢茶的人。送这套匠人全手工“秋葵”系列茶具，釉色给人安定的亲近，这样的谦虚平和的清淡，却轻轻藏好了绵口悠远的圆润。");
                ensure.attr("href", "info01.html?id=hu");
                break;
            case 2:
                tanchuang.fadeIn();
                tanchuang.addClass("bounceIn");
                intro.html("晶晶请我喝茶，爱茶的人一定心有灵犀！就送这款手工秋葵罐和茶叶礼盒吧！绿茶龙井、红茶晚香、岩茶水仙、桂花茶，她一定喜欢！");
                ensure.attr("href", "info01.html?id=cy");
                break;
        }
        event.stopPropagation();
    });
    $('html,body').click(function () {
        tanchuang.fadeOut(200);
    })

    //音频播放
    function audioAutoPlay(id) {
        var audio = document.getElementById(id),
            play = function () {
                audio.play();
                document.removeEventListener("touchstart", play, false);
            };
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function () {
            play();
        }, false);
        document.addEventListener("touchstart", play, false);
    }

    //遮罩页
    var video=$("#bg"),
        master=$("#master"),
        leap=$("#leap"),
        master_text=$("#master_text"),
        click=$(".click");
    master.click(function () {
            video[0].play();
            click.attr("src","img/loading.gif");
            master_text.text("即将到达");
            setInterval(function () {
                if(video[0].currentTime>0){
                    master.fadeOut(200);
                }
                if (video[0].ended == 1) {
                    leap.fadeOut(200);
                    // video.fadeOut(1000);
                    setTimeout(function () {
                        video.addClass("animated zoomOutDown");
                        audioAutoPlay('Jaudio');
                    },1000)
                }
            }, 100)
        }
    )
    leap.click(function () {
        video.fadeOut(200);
        video[0].pause();
        $(this).hide();
        audioAutoPlay('Jaudio');
    })


    //屏幕与元素尺寸调节
    var tips=$(".tips");
    var width = $("body").width();
    var height = width * 1.78;
    var top = height*0.75;
    $("body").height(height);
    $(".btn_box").css("top", top + 'px');
    tips.css("padding-top",height*0.54+"px");

});