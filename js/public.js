/*
功能：公共函数库
制作人：盛宇增
最近维护时间：2017-12-20 16：00
*/
var public = {
    touppercase: function (str) { //转大写
        return str.toUpperCase();
    },
    tolowercase: function (str) {//转小写
        return str.toLowerCase();
    },
    trim: function (str) { //去除所有空格
        var result;
        result = str.replace(/\s/g, '');
        return result;
    },
    addbookquotes: function (str) {//添加书引号
        var result = str.indexOf("《");
        if (result) {
            str2 = str.replace(str, "《" + str + "》");
        } else {
            str2 = str;
        }
        return str2;
    },
    isphone: function (num) {//判断是否为手机
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(num)) {
            return false;
        } else {
            return true;
        }
    },
    ismail: function (str) {//判断是否为邮箱
        var myreg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }
}