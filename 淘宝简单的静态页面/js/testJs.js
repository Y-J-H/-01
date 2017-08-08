window.onload=function(){
   count()();
   count()();     //两次输出i均为0
   //console.log(i)   //报错说i没有定义 i is not defined 因为i只是count中的一个局部变量,并不能被外部所引用

    //上面的方式可以执行，那是不是意味着下面的方式也能执行呢？
    var fun=function(){
        var j=0;
        console.log("j:"+j++);
    }
    fun();
    //那再换一种方式呢？
   /* function(){
        var n=0;
        console.log("n:"+n++);
    }();
     *///报错：SyntaxError: Unexpected token (  原因：这是因为在javascript代码解释时，当遇到function关键字时，会默认把它当做是一个函数声明，而不是函数表达式，如果没有把它显视地表达成函数表达式，就报错了，因为函数声明需要一个函数名，而上面的代码中函数没有函数名。（以上代码，也正是在执行到第一个左括号(时报错，因为(前理论上是应该有个函数名的。）

}

function count(){
    var i=0;
    return function(){
        console.log("i:"+i++);                 /*i++先输出在++,++i先++在输出,即使给i++套上了括号，仍然是按原来的规则执行*/
    }
}