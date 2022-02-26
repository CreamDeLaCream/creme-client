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
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  return (
    <div>
      <Bar
        options={options}
        type="horizontalBar"
        data={{
          labels: ['Yellow', 'Green'],
          options: {
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
          },
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
              // borderWidth: 2,
            },
          ],
        }}
        height={50}
        width={50}
      />
    </div>
  );
};

export default BarChart;
