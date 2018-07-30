/**   
 * 参考地址：https://juejin.im/post/5b5a9451f265da0f6a036346#heading-5
 */

/**    
 * 使用filter, map, some, every
 */

//  1.去除数组中空值
const arrRemoveEmptyVal = [3, 5, '' , 0, false, 2, null, undefined]

const compact = arr => arr.filter(val => {
  if (Boolean(val) || val === 0 || val === false) {
    return true
  }
})

console.log('去除数组中的空值:')
console.log(compact(arrRemoveEmptyVal))


// 2.去除数组中的某个值
const removeArrayVal = (arr, removeItem) => arr.filter(val => {
  return val=== removeItem ? false : true
})

console.log('去除数组中的某个值:')
console.log(removeArrayVal(arrRemoveEmptyVal, false))


// 3. 对符合条件的数组项进行操作，例如：对是vip的用户余额加10
const users = [
  { username: "Kelly", isVIP: true, balance: 20 },
  { username: "Tom", isVIP: false, balance: 19 },
  { username: "Stephanie", isVIP: true, balance: 30 }
];

/**   
 * 箭头函数用法：
 *  (参数1, 参数2, …, 参数N) => { 函数声明 }
 *  (参数1, 参数2, …, 参数N) => 表达式（单一） 当箭头函数内部只存在表达式时应使用()进行包裹
 *  //相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
 */
const newUserArr = users.map(user => (
  user.isVIP ? { ...user, balance: user.balance + 10 } : user
))

// const newUserArr = users.map(user => {
//   return user.isVIP ? { ...user, balance: user.balance + 10 } : user
// })

console.log(newUserArr)

// 4. 使用some()方法: some用于判断当前数组中的元素是否通过由提供的函数实现的测试, 只需要其中一个元素符合即可
const ipRiskArr = [
  { riskname: '风险名称1', level: 'middle' },
  { riskname: '风险名称2', level: 'low' },
  { riskname: '风险名称3', level: 'high' },
  { riskname: '风险名称2', level: 'low' }
]

const isHigh = item => item.level === 'high'
const isHighIp = arr => arr.some(isHigh)

console.log(isHighIp(ipRiskArr) ? '这是个高危的ip' : '这不是个高危的ip')

// 5. 使用every()方法：every用于测试数组的所有元素是否都通过了指定函数的测试。
const highFun = arr => arr.every(isHigh)

console.log(highFun(ipRiskArr) ? '这个ip下的所有风险均是高危风险' : '这个ip下的所有风险不都是高危风险')

// 6. 使用find()方法： find用于返回数组中满足提供的测试函数的第一个元素的值 ,还有findIndex和find类似
const lowFun = arr => arr.find(item => item.level === 'low')

console.log(lowFun(ipRiskArr))

// 由于find只能找出第一项所以这里其实还是应该使用filter

const findAllLowRisk = arr => arr.filter(item => {
  if (item.level === 'low') {
    return item
  }
})
console.log(findAllLowRisk(ipRiskArr))

// 7. 数组去重
const dupArr = [1, 2, 'as', 1, 'sa', 'arthur', 'as', 1, 2, 3]
const removeDup = arr => [...new Set(dupArr)]

console.log(removeDup(dupArr))