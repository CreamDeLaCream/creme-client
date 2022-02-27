import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = () => {
  const data = {
    type: 'bar',
    labels: [''],
    datasets: [
      {
        label: '지루함',
        data: [20],
        // 바탕색
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        // backgroundColor: ['rgba(214, 180, 161, 0.2)'],
        // 테두리색
        borderColor: ['rgba(255, 206, 86, 1)'],
        // borderColor: ['rgba(214, 180, 161, 1)'],
        // 테두리 선 굵기
        borderWidth: 2,
      },
      {
        label: '행복함',
        data: [80],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        // backgroundColor: ['rgba(214, 180, 161, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        // borderColor: ['rgba(214, 180, 161, 1)'],
        borderWidth: 2,
      },
    ],
  };

  // const options = {
  //   indexAxis: 'y',
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       // position: 'right',
  //       display: true,
  //     },
  //     title: {
  //       display: false,
  //       text: 'Chart.js Horizontal Bar Chart',
  //     },
  //   },
  //   options: {
  //     scales: {
  //       xAxes: [
  //         {
  //           gridLines: {
  //             display: false,
  //             // drawBorder: false,
  //             // borderDash: [3, 3],
  //             // zeroLineColor: 'blue',
  //           },

  //           categoryPercentage: 0.7,
  //           // barPercentage: 0.9,
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //       yAxes: [
  //         {
  //           display: false,
  //           gridLines: {
  //             display: false,
  //             // zeroLineColor: 'transparent',
  //           },
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    // legend: {
    //   display: true,
    // },
    scales: {
      xAxis: {
        max: 100,
        grid: {
          color: '#00000000',
        },
        ticks: {
          display: false,
        },
      },
      yAxis: {
        grid: {
          color: '#00000000',
        },
        ticks: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  return (
    <div style={{}}>
      <Bar data={data} options={options} height={3} width={10} />
    </div>
  );
};

export default BarChart;
