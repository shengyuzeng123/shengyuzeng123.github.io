require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery",
        "common": "../../js/common"
    }
});
require(["jquery", "common"], function ($, common) {
    //服务选择
    var service_plate_left = $("#service-plate-left"),
        service_plate_right = $("#service-plate-right");
    service_plate_right.find("li").mouseover(function () {
        var index = $(this).index();
        $(this).css({
            'background-color': '#f8f8f8',
            'color': 'black'
        }).siblings().css({'background-color': 'rgb(183, 79, 159)', 'color': 'white'});
        service_plate_left.find("li").eq(index).css('opacity', 1).siblings().css('opacity', 0);
    });
    service_plate_right.find("li").eq(1).trigger('mouseover');
});