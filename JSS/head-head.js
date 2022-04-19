/* 
*此js用作导航栏形态控制
*请勿写入其他内容
*创建时间2022年4月19日
*版本:1.0
*创建人：简同学
*/


/* 
*此部分意为当客户选择不同页面时给不同页面标签加下划线
*创建时间2022年4月19日
*版本:1.0
*创建人：简同学
*/

var Hhead = {};
Hhead.SetIndexPlaceFalse = function(InSetfalse1,InSetfalse2,InSetfalse3){
    var needmiddiv = document.getElementById("head-head-div-mid");
    var ulindiv = needmiddiv.getElementsByTagName("a");
    function Begintest(delets){
        var realneeda = ulindiv[delets];
        realneeda.className = "";
        var i = 4;
        return function(n){
            n+i++;
        };
    };
    Begintest(InSetfalse1);
    Begintest(InSetfalse2);
    Begintest(InSetfalse3);
    var i = 1;
    return function(n){
        n+i++;
    };
};
Hhead.PlaceOfPlace = function(HheadInPlacemustplace){
    var needmiddiv = document.getElementById("head-head-div-mid");
    var ulindiv = needmiddiv.getElementsByTagName("a");
    switch(HheadInPlacemustplace){
        case 0:
            var realneeda = ulindiv[0];
            realneeda.className = "Check";
            Hhead.SetIndexPlaceFalse(1,2,3);
            break;
        case 1:
            var realneeda = ulindiv[1];
            realneeda.className = "Check";
            Hhead.SetIndexPlaceFalse(0,2,3);
            break;
        case 2:
            var realneeda = ulindiv[2];
            realneeda.className = "Check";
            Hhead.SetIndexPlaceFalse(1,0,3);
            break;
        case 3:
            var realneeda = ulindiv[3];
            realneeda.className = "Check";
            Hhead.SetIndexPlaceFalse(1,2,0);
            break;
    };
};


/* 
*此部分意为改变当客户选择不同页面时给不同页面标签加下划线
*创建时间2022年4月19日
*版本:1.0
*创建人：简同学
*/
Hhead.ChangePlace = function(ChangepPlacee){
    place = ChangepPlacee;
    Hhead.PlaceOfPlace(ChangepPlacee);
    var i = 3;
    return function(n){
        n+i++;
    };
};


/* 
*定义记录客户所在页面的变量！！！！！！！！！！！！！！！！！
*页面中0是首页1是教程2是新闻3是关于
*默认在首页
*时间2022年4月19日
*版本1.0
*创建人：简同学
*/

var place = 0;


/* 初始化页面导航
*时间2022年4月19日
*版本1.0
*创建人：简同学
*/

Hhead.PlaceOfPlace(place);



/* 
*设置整个导航栏的样式
*时间2022年4月19日
*版本1.0
*创建人：简同学
*/

PlaceOfAll.HeadHead();

/* 
*当body尺寸改变，重新定义一遍导航栏
*/
window.onresize = PlaceOfAll.HeadHead;
/* 
*以下为不同导航标签被点击时的效果
*时间2022年4月19日
*版本1.0
*创建人：简同学
*/
var regetdiv = document.getElementById("dh1").href="javascript:Hhead.ChangePlace(0);";
var regetdiv = document.getElementById("dh2").href="javascript:Hhead.ChangePlace(1);";
var regetdiv = document.getElementById("dh3").href="javascript:Hhead.ChangePlace(2);";
var regetdiv = document.getElementById("dh4").href="javascript:Hhead.ChangePlace(3);";
