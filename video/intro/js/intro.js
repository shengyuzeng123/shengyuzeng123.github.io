require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery",
        "common": "../../js/common",
        "echarts": "../../js/echarts.common.min",
        // "Swiper": "https://cdn.bootcss.com/Swiper/4.1.0/js/swiper.min",
        "imagesLoaded": "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd"
    },
    shim: {
        "imagesLoaded": {
            deps: ["jquery"]
        }
    }
});
require(["jquery", "common", "echarts", "imagesLoaded"], function ($, common, echarts) {

    //滚动条行为
    // var areaTop = $("#area").offset().top;
    // $(window).scroll(function () {
    //     var dt = $(document).scrollTop(),
    //         wt = $(window).height();
    //     if (dt > areaTop - wt + 250) {
    //         setTimeout(function () {
    //             // 使用刚指定的配置项和数据显示图表。
    //             myChart.setOption(option);
    //             $("#area-table").css('transform', 'scale(1.0)');
    //         }, 200);
    //     }
    // });

    common.logoSwiperd();//合作品牌初始化
    $("#about-img-img").imagesLoaded(function () {
        $("#about-img .picloading").fadeOut(10);
        setTimeout(function () {
            $("#about-img-img").css('opacity', 1);
        }, 50);
    });

    // 绘制view的折现图
    function strokeview(object, width, height, movetoX, movetoY, linetoX, linetoY, lineto2X, lineto2Y) {
        object.width = width;
        object.height = height;
        var context = object.getContext("2d");
        context.strokeStyle = "purple";
        context.beginPath();
        context.moveTo(movetoX, movetoY);
        context.lineTo(linetoX, linetoY);
        context.lineTo(lineto2X, lineto2Y);
        context.stroke();
    }

    strokeview(document.getElementById("view-top-canvas"), 80, 50, 80, 0, 50, 25, 0, 25);
    strokeview(document.getElementById("view-left-canvas"), 80, 50, 80, 0, 50, 25, 0, 25);
    strokeview(document.getElementById("view-right-canvas"), 80, 50, 0, 0, 40, 25, 80, 25);


    var trcanvas = document.getElementById("trcanvas");
    var trcxt = trcanvas.getContext("2d");
    trcxt.strokeStyle = "purple";
    trcxt.beginPath();
    trcxt.moveTo(0, 70);
    trcxt.lineTo(70, 0);
    trcxt.lineTo(300, 0)
    trcxt.stroke();

    var tlcanvas = document.getElementById("tlcanvas");
    var tlcxt = tlcanvas.getContext("2d");
    tlcxt.strokeStyle = "purple";
    tlcxt.beginPath();
    tlcxt.moveTo(300, 70);
    tlcxt.lineTo(230, 0);
    tlcxt.lineTo(0, 0)
    tlcxt.stroke();

    var blcanvas = document.getElementById("blcanvas");
    var blcxt = blcanvas.getContext("2d");
    blcxt.strokeStyle = "purple";
    blcxt.beginPath();
    blcxt.moveTo(300, 0);
    blcxt.lineTo(230, 70);
    blcxt.lineTo(0, 70)
    blcxt.stroke();

    var brcanvas = document.getElementById("brcanvas");
    var brcxt = brcanvas.getContext("2d");
    brcxt.strokeStyle = "purple";
    brcxt.beginPath();
    brcxt.moveTo(0, 0);
    brcxt.lineTo(70, 70);
    brcxt.lineTo(300, 70)
    brcxt.stroke();

    //tl
    $("#tl").hover(function () {
        $(this).css({
            'left': '-20px',
            'top': '-20px',
            'background': 'url("images/tlc.png") no-repeat'
        });
        $(this).find(".area-intro").fadeIn();
    }, function () {
        $(this).css({
            'left': '0',
            'top': '0',
            'background': 'url("images/tl.png") no-repeat'
        });
        $(this).find(".area-intro").fadeOut();
    });

    //tr
    $("#tr").hover(function () {
        $(this).css({
            'left': '315px',
            'top': '-20px',
            'background': 'url("images/trc.png") no-repeat'
        });
        $(this).find(".area-intro").fadeIn();
    }, function () {
        $(this).css({
            'left': '295px',
            'top': '0px',
            'background': 'url("images/tr.png") no-repeat'
        });
        $(this).find(".area-intro").fadeOut();
    });

    //bl
    $("#bl").hover(function () {
        $(this).css({
            'left': '-20px',
            'top': '260px',
            'background': 'url("images/blc.png") no-repeat'
        });
        $(this).find(".area-intro").fadeIn();
    }, function () {
        $(this).css({
            'left': '0',
            'top': '240px',
            'background': 'url("images/bl.png") no-repeat'
        });
        $(this).find(".area-intro").fadeOut();
    });

    //br
    $("#br").hover(function () {
        $(this).css({
            'left': '253px',
            'top': '314px',
            'background': 'url("images/brc.png") no-repeat'
        });
        $(this).find(".area-intro").fadeIn();
    }, function () {
        $(this).css({
            'left': '233px',
            'top': '294px',
            'background': 'url("images/br.png") no-repeat'
        });
        $(this).find(".area-intro").fadeOut();
    });

    $("#area-table>div:not(#tr)").hover(function () {
        $("#tr").trigger("mouseout");
    });

    $("#tr").trigger("mouseover");
});