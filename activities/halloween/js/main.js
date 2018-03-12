$(function () {
    var lamaImg = $("#lamaImg"),
        topImg = $("#topImg");
    lamaImg.css("top", topImg.height() - lamaImg.width() * 0.2);
    var content = $("#content");

    function init() {
        $.ajax({
            type: 'get',
            url: 'http://www.meflourish.com/activities/shuhua/shds.php/Index/getHalloweenImg',
            async: false,
            success: function (data) {
                var el = "";
                for (var i = 0; i < data.length; i++) {
                    (function (i) {
                        el = '<div class="bubble">';
                        el += '<img class="cell cell-1">';
                        el += '<span class="bubble-title"></span>';
                        el += '<div class="cell-2">';
                        el += '<img class="haibao" src="images/' + data[i].imgURL + '" alt="">';
                        el += '<div class="intro">' + data[i].des + '</div>';
                        el += '</div>';
                        el += '<img class="cell cell-3">';
                        el += '</div>';
                        content.append(el);
                    })(i)
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('加载出了点问题，请重试。');
            }
        });
    }

    init();
    var bubble_l = $(".bubble:even"),
        bubble_r = $(".bubble:odd");
    bubble_l.find(".cell-1").attr("src", "img/qipao-l_01.png").end().find(".cell-3").attr("src", "img/qipao-l_03.png").end().find(".cell-2").css({"background":"url('img/qipao-l_02.png')","background-size":"100%"});
    bubble_r.find(".cell-1").attr("src", "img/qipao-r_01.png").end().find(".cell-3").attr("src", "img/qipao-r_03.png").end().find(".cell-2").css({"background":"url('img/qipao-r_02.png')","background-size":"100%"});
    wx.config(wx_conf);
    wx.ready(function () {
        wx.onMenuShareTimeline({//朋友圈
            title: '万圣节我最上镜 - 辣妈俱乐部',
            link: location.href,
            imgUrl: 'http://i4.bvimg.com/592631/cd29960e6a92e70f.png',
            success: function () {
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({//发送给好友
            title: '万圣节我最上镜 - 辣妈俱乐部',
            desc: '晒出宝贝万圣节主题装扮的照片，发至“辣妈俱乐部plus”公众号，有机会获得江和美海洋生活馆亲子套票一组！',
            link: location.href,
            imgUrl: 'http://i4.bvimg.com/592631/cd29960e6a92e70f.png',
            success: function () {
            },
            cancel: function () {
            }
        });
    });
});
