import React, { useState, useEffect } from 'react';
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
    },
};

function generateChartData(labels, data) {
    return {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: data,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
}

const backendURL = process.env.REACT_APP_BACKEND_URL;
function GetData() {
    const url = `${backendURL}/avgEuisByPropertyType`; // TODO: change to use user/alerts
    console.log(`url: ${url}`);
    // const headers = new Headers();
    return fetch(url).then(response => response.json());
}

function Chart() {
    const [chartData, setChartData] = useState(generateChartData([], []));
    const [err, setErr] = useState(null);

    useEffect(() => {
        GetData()
            .then(({results}) => {
                const { types, averageEuis } = results;
                setChartData(generateChartData(types, averageEuis));
            })
            .catch(err => {
                setErr(err.message);
                console.log("ERR:", err.message);
            })
    }, [])

    return (
        <div style={{ height: '100%' }}>
            <h1>Chart</h1>
            <Bar options={options} data={chartData} />
            {err && <div>Error: {err}</div>}
        </div>
    )
}

export default Chart;