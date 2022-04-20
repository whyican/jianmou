/* 
*此js用于写一些常用函数
*请勿写入其他内容
*创建时间2022年4月19日
*版本:1.0
*创建人：简同学
*/


/* 
*定义记录客户所在页面的变量！！！！！！！！！！！！！！！！！
*页面中0是首页1是教程2是新闻3是关于
*默认在首页
*时间2022年4月19日
*版本1.0
*创建人：简同学
*/

var place = 0;

/* 
*此变量用于计算导航栏右侧小三角是否开启
*时间2022年4月20日
*版本1.0
*创建人：简同学
*/
var HeadRightA = false;

/* 
*调整所有部分的样式
*时间2022年4月19日
*版本1.0
*创建人：简同学
*/
var PlaceOfAll = {};
PlaceOfAll.HeadHead = function(){
    var Element = document.getElementById("head-head");
    var middiv = document.getElementById("head-head-div-mid");
    var wantused_d = document.getElementById("nomusticon");
    var width = document.body.clientWidth;
    var setwidth = "width: "+width+"px;";
    Element.style = setwidth;
    if(width >=970){
        if(wantused_d == null){
            wantused_d = document.getElementById("nomusticon2");
            wantused_d.id="nomusticon";
        }else{
        };
        var divsizewidth = (width-650-370)/2+400;
    }else{
        if(width<970 && width>=650){
            if(wantused_d == null){
                
            }else{
                wantused_d.id="nomusticon2";
            };
            var divsizewidth = (width-230-370)/2+80;
        }else{
            if(width<650){
                Element.style = "width: 650px;";
                if(wantused_d = null){
                
                }else{
                    wantused_d.id="nomusticon2";
                };
                var divsizewidth = 100;
            };
        };
    };
    var divsize = "position: absolute;top: 0px;left: "+divsizewidth+"px;";
    middiv.style = divsize;
    var changerightinP = document.getElementById("head-head-right-a-used");
    if(window.HeadRightA == false){
        changerightinP.style = "position: absolute;top: 100px;left: "+width+"px;";
    }else{
        changerightinP.style = "position: absolute;top: 100px;left: "+(width-160)+"px;";
    };
    var i = 1;
    return function(n){
        n+i++;
    };
};