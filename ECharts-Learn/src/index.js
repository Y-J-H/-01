const echarts = require('echarts');

var container = document.createElement('div');
container.style.width = "600px";
container.style.height = "400px";
var myChart = echarts.init(container);
// 绘制图表
myChart.setOption({
  title: {
      text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
});

document.body.appendChild(container);


