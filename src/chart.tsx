import React from 'react';
import ReactECharts from 'echarts-for-react';
import styled from 'styled-components';

const LineChart = () => {
  const options = {
    title: {
      text: 'Hash Coin price in last 7 days',
      textStyle: {
        color: '#fff', // Title text color
        fontSize: 15,
      },
    },
    tooltip: {
      trigger: 'axis',
      show: false, // Disable tooltips
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        color: '#fff', // X-axis labels color
      },
      axisLine: {
        lineStyle: {
          color: '#fff', // X-axis line color
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#fff', // Y-axis labels color
      },
      axisLine: {
        lineStyle: {
          color: '#fff', // Y-axis line color
        },
      },
      splitLine: {
        lineStyle: {
          color: '#444', // Y-axis split line color
        },
      },
    },
    series: [
      {
        data: [10, 20, 30, 25, 35, 60, 55],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#00FF00', // Line color (green in this case)
        },
        itemStyle: {
          color: '#00FF00', // Points color
        },
        areaStyle: {
          color: 'rgba(0, 255, 0, 0.2)', // Area under the line color
        },
      },
    ],
  };

  return <StyledChart option={options} />;
};

const StyledChart = styled(ReactECharts)`
height: 50%;
width: 80%;
`;

export default LineChart;
