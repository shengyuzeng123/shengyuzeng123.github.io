$(function () {
    $(".swiper-container").height($(window).height());
    var pop_outer_box = $(".pop-outer-box"), //弹出框外层盒子
        pop_box_close = $(".pop-box-close"), //弹出框关闭按钮
        pop_text = $(".pop-text"), //弹出框关闭按钮
        pop_box = $(".pop-box");//弹出框内层
    pop_outer_box.hide();

    // 初始化分页器
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        initialSlide: 0,
        loop: false,
        lazy: {
            loadPrevNext: true,
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            renderProgressbar: function (progressbarFillClass) {
                return '<span style="background-color:#f5903f;" class="' + progressbarFillClass + '"></span>';
            }
        },
    });


    // 开始答题
    $("#start").click(function () {
        mySwiper.slideNext(1000, 'ease');
        $(".swiper-pagination").fadeIn(1200);
    });

    // 提交答案
    $("#subbtn").click(function () {
        var q_1 = $('input[name="q_1"]:checked').val(),
            q_2 = $('input[name="q_2"]:checked').val(),
            q_3 = $('input[name="q_3"]:checked').val(),
            q_4 = $('input[name="q_4"]:checked').val(),
            q_5 = $('input[name="q_5"]:checked').val(),
            q_6 = $('input[name="q_6"]:checked').val(),
            q_7 = $('input[name="q_7"]:checked').val();
        var q = [q_1, q_2, q_3, q_4, q_5, q_6, q_7];
        if (IsInArray(q, 'd') == 1) {
            getpop();
            pop_text.html('<p>您还有未作答的题哦！</p><p>作为一个学霸怎么可以轻易放弃呢！</p>');
        } else {
            sub(q);
        }
    });

    // 选项按钮
    $(".q-btn-c").click(function () {
        $(this).find("input").attr('checked', 'true').end().css("filter", "brightness(0.6)").siblings().css("filter", "brightness(1)");
    });
    wx.config(wx_conf);
    wx.ready(function () {
        wx.onMenuShareTimeline({//朋友圈
            title: '麦当劳3.14派DAY数学能力考试',
            link: location.href,
            imgUrl: 'http://www.meflourish.com/activities/mdlmath/img/share.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({//发送给好友
            title: '麦当劳3.14派DAY数学能力考试',
            desc: '麦当劳3.14派DAY数学能力考试,等你来战！',
            link: location.href,
            imgUrl: 'http://www.meflourish.com/activities/mdlmath/img/share.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });
    });

    // 弹出框方法
    function getpop() {
        pop_outer_box.height($(document).height());
        if (pop_box.hasClass("fadeOut") == 1) {
            pop_box.removeClass("fadeOut");
        }
        pop_outer_box.fadeIn(210);
        pop_box.css("visibility", "visible").addClass("bounceIn");
        $(".ensure").on("click", function () {
            pop_box.removeClass("bounceIn").addClass("fadeOut");
            setTimeout(function () {
                pop_outer_box.fadeOut(200);
            }, 100);
        });
    }

    //图片放大
    lightbox.option({
        'fadeDuration': 200,
        'alwaysShowNavOnTouchDevices': true,
        'imageFadeDuration': 200,
        'showImageNumberLabel': false
    });

    // 音频
    audioAutoPlay("bgsound");
    var bgsoundImg = $("#bg-img"),
        bgsound = $("#bgsound")[0];
    bgsoundImg.click(function () {
        if (bgsound.paused) {
            bgsound.play();
            bgsoundImg.css("animation", "spin 8s linear infinite");
        } else {
            bgsound.pause();
            bgsoundImg.css("animation", "none");
        }
    });

    // 公共提交方法
    function sub(arr) {
        $.ajax({
            type: "post",
            url: "http://www.meflourish.com/mfgw.php/Index/mdl",
            // data: {"q_1": q_1, "q_2": q_2, "q_3": q_3, "q_4": q_4, "q_5": q_5, "q_6": q_6, "q_7": q_7},
            data: {'q': arr},
            success: function (data) {
                $("#loading").fadeIn(100);
                var grade = data[data.length - 1];
                var errorTpl = "错题：第&nbsp;";
                // $.each(data, function (index, value) {
                //         var i = value;
                //         errorTpl += i;
                // });
                for (var i = 0; i < data.length - 1; i++) {
                    var er = data[i];
                    errorTpl += er + '&nbsp;';
                }
                errorTpl += "题";
                var tpl = "";
                if (grade == 7) {
                    tpl = '<p class="grade">满分！</p><div><span class="tag">派大神</span>：在班里以优异的成绩遥遥领先，在数学方面对π几乎达到了痴迷的程度，据他分享的学习经验，因天天吃“派”而变得越来越聪明迷人，并且表示要坚持天天吃派。</div>';
                } else if (grade >= 4 && grade <= 6) {
                    tpl = '<p class="grade">' + grade * 10 + '分！</p><div><span class="tag">潜力派</span>：成绩不上不下，有时忽高忽低，老师与上司一刻都不敢松懈，但本身存有巨大的潜力，建议补充：<font color="#ff69b4">蜜桃派</font>激发体中能量，挖掘潜力。</div>'
                } else {
                    tpl = '<p class="grade">' + grade * 10 + '分~</p><div><span class="tag">派小白</span>：对派的力量一无所知，体内急需补充“派”元素来洗脑，建议补充所有派来充实大脑，同时加强身体素质锻炼。</div>'
                }
                $(".pop-text").html(tpl);
                if (grade != 7) {
                    $(".pop-text").append('<p class="error-tag">' + errorTpl + '</p>');
                }
                setTimeout(function () {
                    $("#loading").fadeOut();
                    getpop();
                }, 600)

            },
            error: function () {
                alert("发生了点小错误，请重新尝试~");
            }
        });
    }

});

// 判断是否有空未填
function IsInArray(arr, val) {

    var testStr = ',' + arr.join(",") + ",";

    return testStr.indexOf("," + val + ",") != -1;

}


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



