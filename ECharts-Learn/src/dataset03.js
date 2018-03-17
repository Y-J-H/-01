const echarts = require('echarts');

var container = document.createElement('div');
container.style.width = "600px";
container.style.height = "400px";
container.style.marginTop = "20px";
var myChart = echarts.init(container, 'light');       // 设置主题颜色'light', 'dark', 'theme(默认)'

// var symbolSize = 2.5;
// 使用数据集
option = {
  legend: {},
  tooltip: {},
  dataset: {
    // 数据部分
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'Matcha Latte'],
      [57.1, 78254, 'Milk Tea'],
      [74.4, 41032, 'Cheese Cocoa'],
      [50.1, 12755, 'Cheese Brownie'],
      [89.7, 20145, 'Matcha Cocoa'],
      [68.1, 79146, 'Tea'],
      [19.6, 91852, 'Orange Juice'],
      [10.6, 101852, 'Lemon Juice'],
      [32.7, 20112, 'Walnut Brownie']
    ]
  },
  xAxis: {},
  yAxis: { type: 'category' },
  series: [
    {
      type: 'bar',
      // type: 'scatter',
      // symbolSize: symbolSize,
      /**
       * encode 声明的基本结构如下，
       * 其中冒号左边是坐标系、标签等特定名称，
       * 如 'x', 'y', 'tooltip' 等，
       * 冒号右边是数据中的维度名（string 格式）
       * 或者维度的序号（number 格式，从 0 开始计数），
       * 可以指定一个或多个维度（使用数组）
       */
      encode: {
        // 维度和数据项是对立的, 我认为数据项就是有数据的那一列或一行, 而维度正好和数据项相反
        // 将 "amount" 列映射到 X 轴。
        x: 'amount',
        // 将 "product" 列映射到 Y 轴。
        y: 'product'
      }
    }
  ]
}

myChart.setOption(option);
document.body.appendChild(container);


