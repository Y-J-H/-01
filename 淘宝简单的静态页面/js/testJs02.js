window.onload=function(){
    var condition=true;
    // console.log(condition);
    //never do this!  不同的浏览器会做出不同的行为 不要这么做！
    // console.log(sayHi);
    // if(condition){     //在if...else中的function好像并不会被提升，
    //     console.log(1);
    //     function sayHi(){
    //         alert("Hi!");
    //     }
    // } else {
    //     function sayHi(){
    //         alert("Yo!");
    //     }
    // }




    // a();        //利用函数声明的方式来定义函数,是有函数声明提升的
    // function a(){
    //     console.log('a');
    // }
    //
    // b();        //利用函数表达式的方式来定义函数,是不会有函数声明提升的，所以这里输出b is not a function
    // var b = function(){
    //     console.log('b');
    // }



    // var myMethod = function() {
    //     console.log('myMethod run'); //执行
    //     // return 42;
    // }  // 这里没有分号
    //
    // (function(){          //为什么吧上面的方法注释掉这个函数就能够执行了？
    //     console.log("a");
    // })();    //myMethod函数默认到这里的分号结尾,所以相当于把(function(){ console.log("a") })后面的括号使用掉了，因此报了Uncaught TypeError: (intermediate value)(...) is not a function的错误
    //
    // (function(){
    //     console.log("b");
    // })();


    // (function fun(){
    //     console.log("function");
    // })();
    //fun();//内部函数是无法被外部访问的

    // var fun=function(){
    //     console.log("该函数立即执行了")
    // }();

    // function foo(){
    //     console.log("该函数立即执行了");
    // }();        //抛出异常Uncaught SyntaxError: Unexpected token )

    // function foo(){
    //     console.log("该函数立即执行了");
    // }(1);     //这样写以后没有报错，并且函数foo()也能被调用
    //foo();

    //自执行函数or立即执行函数的方式
    //方法一
    // (function(){
    //     console.log("该函数自己执行了");
    // }());
    //方法二
    // (function(){
    //     console.log("该函数自己执行了");
    // })();
    // true && function(){
    //     console.log("该函数自己执行了")
    // }();

    //,function (){ console.log("该函数自己执行了") }();


    //利用立即执行函数来锁定某些有效的状态
    // var btn=document.getElementsByTagName("button");
    // for(var i=0,len=btn.length;i<len;i++){
    //     /*这种方法是行不通的因为,当代码编译完成以后循环就已经结束，此时i=6，所以无论点击哪个按钮均弹出i=6*/
    //     // btn[i].onclick=function(){
    //     //     alert(i);
    //     // }
    //
    //     //利用立即执行函数的方式
    //     btn[i].onclick=function(num){
    //         return function(){
    //             alert(num);
    //         }
    //     }(i);
    // }
    //利用立即执行函数来锁定某些有效的状态02
    // var btn=document.getElementsByTagName("button");
    // for(var j=0,len=btn.length;j<len;j++){
    //     btn[j].onclick=function(num){
    //         console.log(num);
    //         return function(){
    //             console.log(this);
    //             var fun=function(){
    //                 console.log(this);
    //             }();
    //         }
    //     }(j);
    // }

    // console.log(a);
    // console.log(b);
    // var a=1;
    const a=[];
}

