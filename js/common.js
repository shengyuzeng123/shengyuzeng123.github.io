/*
*米花公社官网公共JS设置及方法库,
* @作者：盛宇增
* @更新：2017-11-30
* @方法：
*/
define(["jquery"], function ($) {
    //公共配置
    $(function () {
        // 链接跳转声明
        $(".href-intro").click(function () {
            window.location.href = "http://www.meflourish.com/intro/";
        });
        $(".href-media").click(function () {
            window.location.href = "http://www.meflourish.com/media/";
        });
        $(".href-creative").click(function () {
            window.location.href = "http://www.meflourish.com/creative/";
        });
        $(".href-service").click(function () {
            window.location.href = "http://www.meflourish.com/service/";
        });
        $(".href-case").click(function () {
            window.location.href = "http://www.meflourish.com/cases/";
        });
        $(".href-index").click(function () {
            window.location.href = "http://www.meflourish.com/";
        });
        $(".href-contact").click(function () {
            window.location.href = "http://www.meflourish.com/contact/";
        });
        $(".href-job").click(function () {
            window.location.href = "http://www.meflourish.com/recruit/";
        });
        $(".href-news").click(function () {
            window.location.href = "http://www.meflourish.com/news/";
        });
        // 常规设置
        $("img").attr("draggable", "false");

        // 弹出框声明
        var pop_outer_box = $(".pop-outer-box"), //弹出框外层盒子
            pop_box_close = $(".pop-box-close"), //弹出框关闭按钮
            pop_box = $(".pop-box");//弹出框内层

        // 弹出框
        // pop_outer_box.hide();
        $(".getpop").parent().on("click", ".getpop", function () {
            pop_outer_box.height($(document).height());
            if (pop_box.hasClass("fadeOut") == 1) {
                pop_box.removeClass("fadeOut");
            }
            pop_outer_box.fadeIn(210);
            pop_box.css("visibility", "visible").addClass("fadeInUp");
        });

        //视频播放
        $(".video-box").parent().on("click", ".video-box", function () {
            $(".pop-box").css("margin-top", $(window).height() * 0.2 + "px");
            $(".pop-article").hide();
            $(".pop-video").show();
            var video_src = $(this).find(".video-src").text();
            $(".pop-box-close").on("click", function () {
                document.getElementById("video_html5_api").pause();
                $(".pop-box").removeClass("fadeInUp").addClass("fadeOut");
                setTimeout(function () {
                    $(".pop-outer-box").fadeOut(200);
                }, 100);
            });

            videojs("#video", {}, function () {
                var myPlayer = this;
                // myPlayer.poster(posterSrc); //插入缩略图
                myPlayer.src(video_src);//插入视频地址
            })
        });

        // 文章阅读
        $(".article-box").parent().on("click", ".article-box", function () {
            $(".pop-box").css({"margin-top": "40px", "width": "860px"});
            $(".pop-article").height($(window).height() * 0.9);
            $(".pop-article").show();
            $(".pop-video").hide();
            pop_box_close.on("click", function () {
                pop_box.removeClass("fadeInUp").addClass("fadeOut");
                setTimeout(function () {
                    pop_outer_box.fadeOut(200);
                }, 100);
            });
            var article_src = $(this).find(".video-src").text();
            $(".pop-article").find(".article-text").prop("src", "").prop("src", article_src);
        });
    });

    //图文弹窗回到顶部
    $(".pop-article").scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $(".pop-totop").fadeIn();
        } else {
            $(".pop-totop").fadeOut();
        }
    });
    $(".pop-totop").click(function () {
        $(".pop-article").scrollTop(0);
    });

    //每个页面需要重新加载的方法
    function init() {
        $('body').append('<div class="totop"><img src="http://www.meflourish.com/img/totop.png" alt=""></div>');
        // 滚动事件
        $(window).scroll(function () {
            var wt = $(window).scrollTop();
            if (wt > 1000) {
                $(".totop").fadeIn();
            } else {
                $(".totop").fadeOut();
            }
        });

        // 回顶部
        $(".totop").click(function () {
            $('html,body').animate({scrollTop: 0}, 500, 'swing');
        });
    }

    init();
    // 供调用的回调函数
    return {
        logoSwiperd: function () { //合作品牌logo的swiper方法
            var mySwiper = new Swiper('.swiper-container', {
                grabCursor: true,
                slidesPerView: 6,
                // centeredSlides : true,
                mousewheel: {
                    releaseOnEdges: false,
                    sensitivity: 4,
                },
                // slidesOffsetBefore : 0,
                speed: 300,
            });
        },
        reloadvideo: function () {
            // 弹出框声明
            var pop_outer_box = $(".pop-outer-box"), //弹出框外层盒子
                pop_box_close = $(".pop-box-close"), //弹出框关闭按钮
                pop_box = $(".pop-box");//弹出框内层

            // 弹出框
            // pop_outer_box.hide();
            $(".getpop").parent().on("click", ".getpop", function () {
                pop_outer_box.height($(document).height());
                if (pop_box.hasClass("fadeOut") == 1) {
                    pop_box.removeClass("fadeOut");
                }
                pop_outer_box.fadeIn(210);
                pop_box.css("visibility", "visible").addClass("fadeInUp");
                pop_box.css("margin-top", $(window).height() * 0.2 + "px");
            });

            //视频播放
            $(".video-box").parent().on("click", ".video-box", function () {
                $(".pop-box").css("margin-top", $(window).height() * 0.2 + "px");
                $(".pop-article").hide();
                $(".pop-video").show();
                var video_src = $(this).find(".video-src").text();
                $(".pop-box-close").on("click", function () {
                    document.getElementById("video_html5_api").pause();
                    $(".pop-box").removeClass("fadeInUp").addClass("fadeOut");
                    setTimeout(function () {
                        $(".pop-outer-box").fadeOut(200);
                    }, 100);
                });

                videojs("#video", {}, function () {
                    var myPlayer = this;
                    // myPlayer.poster(posterSrc); //插入缩略图
                    myPlayer.src(video_src);//插入视频地址
                })
            });

            // 文章阅读
            $(".article-box").parent().on("click", ".article-box", function () {
                $(".pop-box").css({"margin-top": "40px", "width": "860px"});
                $(".pop-article").css("max-height", $(window).height() * 0.9 + "");
                $(".pop-article").show();
                $(".pop-video").hide();
                pop_box_close.on("click", function () {
                    pop_box.removeClass("fadeInUp").addClass("fadeOut");
                    setTimeout(function () {
                        pop_outer_box.fadeOut(200);
                    }, 100);
                });
                var article_src = $(this).find(".video-src").text();
                $(".pop-article").find(".article-text").prop("src", "").prop("src", article_src);
            });
        }
    }
});

