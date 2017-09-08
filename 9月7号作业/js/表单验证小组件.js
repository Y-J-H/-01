
//判断内容(这里判断的是文本框,文本域)是否为空,返回一个布尔值,true/false;
//参数obj是传入的一个要判断的input框
function isInputEmpty(obj) {
  return !Boolean(obj.value);
}

//判断单选或者复选框是否一个都没选上，若一个都没选上那么返回false,否则返回true;
//参数obj是要传入的一个单选或复选框的类数组
function isRadioCheckEmpty(obj) {
  var V_flag = true;
  for(var i = 0; i < obj.length; i++){
      if(obj[i].checked) {
        V_flag = !V_flag;
        break;
      }
  }
  return V_flag;
}

//验证是否符合正则表达式,返回true/false
//参数是传入一个要验证的对象和一个正则表达式
function isAccordReg(obj,reg) {      //accord是符合的意思
  return reg.test(obj.value);
}

//判断是否相等，例如：确认密码，或者验证码验证的时候
//参数的一个要验证的对象，一个值
function isSame(obj1,val) {
  return obj1.value === val;
}

//范围验证，判断一个数的输入是否符合某个范围,例如年龄的输入,（昵称的长度这些验证可以包含在正则验证当中）
function isCoincidenceRange(obj,min,max) {     //CoincidenceRange符合范围

  //console.log(parseFloat(obj.value))   这里不需要关心parseFloat()是否会出现NaN这个问题，在判断输入是否符合范围之前我们会先判断isInputEmpty
  if(min <= parseFloat(obj.value) <= max) {
    return true;
  }
  return false;
}

//密码强度验证
//注意这里判断输入的密码是否包含数字，字母，特殊字符，若都包含则表示密码强度最强返回一个3,若只包含两种则返回2，最后一种返回1
function PasswordStrength(obj) {
  var V_count = 0;
  if(isAccordReg(obj,/[\d]/)) {
    V_count++;
  }
  if(isAccordReg(obj,/[a-zA-Z]/)){
    V_count++;
  }
  if(isAccordReg(obj,/[^\w]/)){
    V_count++;
  }
  return V_count;
}

//判断输入位数是否符合
function len(len,min,max){
  if(len>=min && len<=max){
    return true;
  }
  return false
}

