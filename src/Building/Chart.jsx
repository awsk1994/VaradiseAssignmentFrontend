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
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        // title: {
        //     display: true,
        //     text: '<TITLE HERE>',
        // },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 2',
            data: [1,2,3,4,5,6],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
function Chart() {
    return (
        <div style={{ height: '100%' }}>
            <h1>Chart</h1>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart;