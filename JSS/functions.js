/* 
*此js用于写一些常用函数
*请勿写入其他内容
*创建时间2022年4月19日
*版本:1.0
*创建人：简同学
*/

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
    if(width >=1150){
        if(wantused_d.width==400){
        }else{
            wantused_d.width=400;
        };
        var divsizewidth = (width-650)/2-250+500;
    }else{
        if(width<1250 && width>=800){
            if(wantused_d.width==0){
                
            }else{
                wantused_d.width=0;
            };
            var divsizewidth = (width-250)/2-250+100;
        }else{
            if(width<800){
                Element.style = "width: 800px;";
                var divsizewidth = 125;
            };
        };
    };
    var divsize = "position: absolute;top: 12px;left: "+divsizewidth+"px;";
    middiv.style = divsize;
    var i = 1;
    return function(n){
        n+i++;
    };
}
