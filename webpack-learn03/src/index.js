require('./index.html')
require('@/style.styl')

console.log(1)

function fun(val=1) {
  console.log(val)
}

fun()

var oStatus = document.querySelector('#status')
oStatus.src = require('@/assets/high.png')   // js中图片引入方式