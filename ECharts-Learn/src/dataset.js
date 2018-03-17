const echarts = require('echarts');

var container = document.createElement('div');
container.style.width = "600px";
container.style.height = "400px";
container.style.marginTop = "20px";
var myChart = echarts.init(container, 'light');       // 设置主题颜色'light', 'dark', 'theme(默认)'


// 使用数据集
option = {
  legend: {},
  tooltip: {},
  dataset: {
    // 数据部分
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]

    // 通过指定维度名的顺序
    // dimensions: ['product', '2015', '2016', '2017'],
    // source: [
    //   { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
    //   { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
    //   { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
    //   { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    // ]
  },
  // 声明x轴, 类目轴(category)
  xAxis: {type: 'category'},
  // 声明Y轴, 数值轴
  yAxis: {},
  // 声明bar
  series: [
    {type: 'bar'},
    {type: 'bar'},
    {type: 'bar'}
  ]
}

myChart.setOption(option);
document.body.appendChild(container);


