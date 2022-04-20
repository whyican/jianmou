/* 
*此js用于控制不同导航页的状态及切换效果
*时间2022年4月20日
*版本1.0
*创建人：简同学
*/

/* 
*初始化mainbody-div及其下子div的宽度高度
*时间2022年4月20日
*版本1.0
*创建人：简同学
*/
var mainbodyneedheight = window.innerHeight-90;
var mainbodyneedwidth = document.body.clientWidth;
var mainbody = document.getElementById("mainbody");
var shouye = document.getElementById("shouye");
var jiaocheng = document.getElementById("jiaocheng");
var xinwen = document.getElementById("xinwen");
var xiazai = document.getElementById("xiazai");
var UsingOfTheWidth = "width: "+mainbodyneedwidth+"px;height: "+mainbodyneedheight+"px;";
mainbody.style="width: "+(mainbodyneedwidth*4)+"px;height: "+mainbodyneedheight+"px;";
shouye.style=UsingOfTheWidth;
jiaocheng.style=UsingOfTheWidth;
xinwen.style=UsingOfTheWidth;
xiazai.style=UsingOfTheWidth
function PickDifferentType(){
    switch(place){
        case 0:
            mainbody.style="width: "+(mainbodyneedwidth*4)+"px;height: "+mainbodyneedheight+"px;"+"position: absolute;left: 0px;";
            if(shouye.clientHeight > mainbodyneedheight){
                document.body.style="background-image: url(images/th.jpg);overflow-x: hidden;";
            }else{
                document.body.style="background-image: url(images/th.jpg);overflow: hidden;";
            };
            break;
        case 1:
            mainbody.style="width: "+(mainbodyneedwidth*4)+"px;height: "+mainbodyneedheight+"px;"+"position: absolute;top: 85px;left: -"+mainbodyneedwidth+"px;";
            if(jiaocheng.clientHeight > mainbodyneedheight){
                document.body.style="background-image: url(images/th.jpg);overflow-x: hidden;";
            }else{
                document.body.style="background-image: url(images/th.jpg);overflow: hidden;";
            };
            break;
        case 2:
            mainbody.style="width: "+(mainbodyneedwidth*4)+"px;height: "+mainbodyneedheight+"px;"+"position: absolute;top: 85px;left: -"+(mainbodyneedwidth*2)+"px;";
            if(xinwen.clientHeight > mainbodyneedheight){
                document.body.style="background-image: url(images/th.jpg);overflow-x: hidden;";
            }else{
                document.body.style="background-image: url(images/th.jpg);overflow: hidden;";
            };
            break;
        case 3:
            mainbody.style="width: "+(mainbodyneedwidth*4)+"px;height: "+mainbodyneedheight+"px;"+"position: absolute;top: 85px;left: -"+(mainbodyneedwidth*3)+"px;";
            if(xiazai.clientHeight > mainbodyneedheight){
                document.body.style="background-image: url(images/th.jpg);overflow-x: hidden;";
            }else{
                document.body.style="background-image: url(images/th.jpg);overflow: hidden;";
            };
            break;
    };
    window.scrollTo(0,0);

}