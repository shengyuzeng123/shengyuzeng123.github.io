require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/2.1.1/jquery",
        "common": "../../js/common",
        "echarts": "../../js/echarts.common.min",
        "imagesLoaded": "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd"
    },
    shim: {
        "imagesLoaded": {
            deps: ["jquery"]
        }
    }
});
require(["jquery", "common", "echarts", "imagesLoaded"], function ($, common, echarts) {
    common.logoSwiperd();
});