import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Chart } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export default function GraficoBarra() {

    const labels = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];

    const data = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: 'Chuva (mm)',
                data: [280, 320, 400, 500, 80, 60, 40, 180, 250, 450, 400, 160],
                backgroundColor: '#10B981',
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'Temperatura (°C)',
                data: [26, 27, 25, 24, 22, 20, 19, 21, 23, 25, 26, 27],
                borderColor: '#A7F3D0',
                backgroundColor: '#A7F3D0',
                tension: 0.4,
                yAxisID: 'y1'
            }
        ]
    };

    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ECFDF5'
                }
            },
            title: {
                display: true,
                text: 'Temperatura e índice pluviométrico por mês',
                color: '#ECFDF5'
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#A7F3D0'
                },
                grid: {
                    color: 'rgba(6,95,70,0.3)'
                }
            },
            y: {
                type: 'linear',
                position: 'left',
                ticks: {
                    color: '#10B981'
                },
                grid: {
                    color: 'rgba(6,95,70,0.3)'
                }
            },
            y1: {
                type: 'linear',
                position: 'right',
                ticks: {
                    color: '#A7F3D0'
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    };

    return <Chart data={data} options={options} />;
}