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
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [         // gridIndex 其实就是将整个容器分割成两个部分
    {type: 'category', gridIndex: 0},
    {type: 'category', gridIndex: 1}
    // {type: 'category', gridIndex: 2}
  ],
  yAxis: [
    {gridIndex: 0},
    {gridIndex: 1}
    // {gridIndex: 2}
  ],
  grid: [
    {bottom: '55%'},             // 指的是第一个直角坐标系距离底部有55%
    {top: '55%'}                 // 指的是第二个直角坐标系距离顶部部有55%
  ],
  // 声明bar
  series: [
    // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
    {type: 'bar', seriesLayoutBy: 'row'},
    {type: 'bar', seriesLayoutBy: 'row'},
    {type: 'bar', seriesLayoutBy: 'row'},
     // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},  // xAxisIndex和yAxisIndex, 在单个图表实例中存在多个 x,y 轴的时候有用(也就是相当于是有多个坐标系时有用)
    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
  ]
}

myChart.setOption(option);
document.body.appendChild(container);


