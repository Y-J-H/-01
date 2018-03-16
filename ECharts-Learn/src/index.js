const echarts = require('echarts');

var container = document.createElement('div');
container.style.width = "600px";
container.style.height = "400px";
var myChart = echarts.init(container);
// 绘制柱状图
// myChart.setOption({
//   title: {
//       text: 'ECharts 入门示例'
//   },
//   tooltip: {},
//   xAxis: {
//       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//   },
//   yAxis: {},
//   series: [{
//       name: '销量',
//       type: 'bar',
//       data: [5, 20, 36, 10, 10, 20]
//   }]
// });

// 绘制南丁格尔图
myChart.setOption({
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      roseType: 'angle',    // 通过设置不同的半径来表示区块大小
      itemStyle: {          // 配置阴影
        shadowBlur: 200,    // 阴影大小
        shadowOffsetX: 0,   // 水平偏移
        shadowOffsetY: 0,   // 垂直偏移
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        emphasis: {         // 配置鼠标hover时的高亮样式
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      data: [
        { value:280, name:'视频广告' },
        { value:274, name:'联盟广告' },
        { value:310, name:'邮件营销' },
        { value:335, name:'直接访问' },
        { value:400, name:'搜索引擎' }
      ]
    }
  ],
  backgroundColor: '#2c343c',      // 设置背景
  textStyle: {      // 设置文本(文字)样式(全局的)
    color: 'rgba(255, 255, 255, 0.3)'
  },
  label: {
    textStyle: {
      color: 'rgba(255, 0, 255, 0.3)'
    }
  },
  labelLine: {       // 更改线条颜色
    lineStyle: {
      color: 'rgba(255, 255, 255, 0.3)'
    }
  },
  itemStyle: {       // 设置扇形颜色
    color: '#c23531',
    shadowBlur: 200,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
  },
  visualMap: {       // 设置明暗度的变化
    show: false,     // 不显示visualMap组件,只用于明暗度映射
    min: 80,         // 映射最小值
    max: 600,         // 映射最大值
    inRange: {
      colorLightness: [0, 1]     // 明暗度的范围变化0到1
    }
  }
})


document.body.appendChild(container);


