import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

import './index.css';


function Echarts() {
    let ref = useRef();
    let ref2 = useRef();
    let ref3 = useRef();
    let ref4 = useRef();

  const init = () => {
    let myChart = echarts.init(ref.current);
    let option;

    option = {
        title: {
            text: 'NCES Avg Cost of Undergraduate College by State',
            textStyle: {
                fontSize: 14
            }
        },
      xAxis: {
        type: "category",
        data: ["Alabama", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky"],
        axisLabel: {
            rotate: -60,
        },
        boundaryGap: false,
      },
      yAxis: {
          name: "学费（单位：美元）",
          nameLocation: "end",
          nameTextStyle : {
            fontSize : 12
          },
        axisLine: {
            show: true
        }
      },
      grid: {
        show:true,
        left: '15%',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };

    option && myChart.setOption(option);
  };
  const init2 = () => {
    var myChart = echarts.init(ref2.current);
    var option;
    
    const labelRight = {
      position: 'right'
    };
    option = {
      title: {
        text: 'water PH value in every state'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: 80,
        bottom: 30
      },
      xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: [
            "Alabama", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky"
        ]
      },
      series: [
        {
          name: 'Cost',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            formatter: '{b}'
          },
          data: [
            { value: -0.07, label: labelRight },
            { value: -0.09, label: labelRight },
            0.2,
            0.44,
            { value: -0.23, label: labelRight },
            0.08,
            { value: -0.17, label: labelRight }
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
    
  }
  const init3 = () => {
    var myChart = echarts.init(ref3.current);
    var option;

    option = {
        title: {
            text: 'education level in every state'
        },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '15%',
        left: 'center'
      },
      series: [
        {
          name: 'education level',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'postgraduate' },
            { value: 735, name: 'udergraduate' },
            { value: 580, name: 'high school' },
            { value: 484, name: 'middle school' }
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
    
  }
  const init4 = () => {
    var myChart = echarts.init(ref4.current);
    var option;
    
    option = {
        title: {
            text: 'comsuption tendency with Income'
        },
      xAxis: {
        name: "Income",
      },
      yAxis: {
        name: "Comsuption",
      },
      grid: {
          right: '20%'
      },
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
          ],
          type: 'scatter'
        }
      ]
    };
    
    option && myChart.setOption(option);
    
  }
  useEffect(() => {
    init();
  });
  useEffect(() => {
    init2();
  });
  useEffect(() => {
    init3();
  });
  useEffect(() => {
    init4();
  });
  return <div  className="echart">
      <div ref={ref} className='echarts'></div>
      <div ref={ref2} className='echarts'></div>
      <div ref={ref3} className='echarts'></div>
      <div ref={ref4} className='echarts'></div>
  </div>;
}

export default Echarts;
