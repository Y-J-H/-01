window.onload=function(){
    var mainBanner=document.getElementById("mainBanner");
    var mainBannerItem=mainBanner.children;   //获取到所有的mainBanner下的子元素
    var mainBannerCircle=document.getElementById("mainBannerCircle");
    //第一步：先利用子元素的个数动态的添加下面小圆点的个数
    for(var i=0;i<mainBannerItem.length;i++){
        var newCircle=document.createElement("li");
        i==0?newCircle.className="circleSelected":newCircle.className="";
        mainBannerCircle.appendChild(newCircle);
    }
    //第二步：将mainBannerCircle居中
    var mainBannerCircleItem=mainBannerCircle.children;
    mainBannerCircle.style.marginLeft="-"+mainBannerCircle.offsetWidth/2+"px";
    //第三步：创建一个动画的函数
    var w=mainBannerItem[0].offsetWidth;
    var mark=0;  //用于标记当前显示的是哪一张图片
    // //动画函数
    function animate(obj,target,speed){  /*运动对象，目标值，运动速度*/
        clearTimeout(obj.timer);
        obj.timer=setInterval(function(){
            var step=(target-obj.offsetLeft)/speed;
            // console.log(step);
            step=step>0?Math.ceil(step):Math.floor(step);
            if(step==0){
                clearInterval(obj.timer);
            }
            obj.style.left=obj.offsetLeft+step+"px";
        },30);
    }
    //第四步：创建一个更改circle背景的函数
    function changeCircleBg(iNow){
        for(var i=0;i<mainBannerCircleItem.length;i++){
            mainBannerCircleItem[i].className=" ";
        }
        // mainBannerCircle.className="circleSelected";
        mainBannerCircleItem[iNow].setAttribute("class","circleSelected");
    }
    //第四步：实现点击左右按钮进行切换
    var mainLeftBtn=document.getElementById("mainLeftBtn");
    var mainRightBtn=document.getElementById("mainRightBtn");
    mainLeftBtn.addEventListener("click",function(){   //左按钮
        animate(mainBannerItem[mark],w,10);   //表示当前的图片向右走
        if(mark==0){          //表示当前显示的是第一张图片，在点击左侧按钮则表示的是要显示最后一张图片
            mark=mainBannerItem.length-1;
        }else{
            mark=mark-1;            //让mark值减一
        }
        changeCircleBg(mark);      //每次改变mark值后立即执行一次changeCircleBg()
        mainBannerItem[mark].style.left=-w+"px";
        animate(mainBannerItem[mark],0,10);
    },false);

    mainRightBtn.addEventListener("click",function(){    //右按钮
        animate(mainBannerItem[mark],-w,10);   //让当前显示图片往左走
        if(mark>=mainBannerItem.length-1){   //表示当前显示的是最后一张图片，在点击右侧按钮则表示的是要显示第一张图片
            mark=0;
        }else{
            mark=mark+1;   //让mark值加一
        }
        changeCircleBg(mark);
        mainBannerItem[mark].style.left=w+"px";
        animate(mainBannerItem[mark],0,10);
    },false);
    //第五步：实现点击下面的小circle时切换到相应的图片
    for(var n=0;n<mainBannerCircleItem.length;n++){
        mainBannerCircleItem[n].addEventListener("click",(function(circleIndex){
            return function(){
                // alert(circleIndex);
                changeCircleBg(circleIndex);
                if(mark!=circleIndex){
                    if(mark<circleIndex){
                        animate(mainBannerItem[mark],-w,10);
                        mainBannerItem[circleIndex].style.left=w+"px";
                        animate(mainBannerItem[circleIndex],0,10);
                        mark=circleIndex;
                    }else{
                        animate(mainBannerItem[mark],w,10);
                        mainBannerItem[circleIndex].style.left=-w+"px";
                        animate(mainBannerItem[circleIndex],0,10);
                        mark=circleIndex;
                    }
                }
            }
        })(n),false);
    }
    //第六步：实现自动滚动
    //自动滚动可以理解为每隔一段时间就点击一次左按钮
    var timer;
    mainBanner.onmouseenter=function(){
        clearInterval(timer);
    }
    mainBanner.onmouseleave=function(){
        playAuto();
    }
    function playAuto(){
        timer=setInterval(function(){
            mainRightBtn.click();
        },6000);
    };
    playAuto();
}

京名