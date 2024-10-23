// Bar Chart
function d2c_barChart(){
    const barChart = document.getElementById('bar-chart');
    new Chart(barChart, {
        type: 'bar',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            datasets: [{
                label: 'chart',
                data: [20,40,60,80,100,11,36,47,83,45,92,62,53,78,60],
                backgroundColor: [
                    'rgb(63, 81, 181)',
                ],
                borderRadius: 10,
                borderColor: [
                    'rgb(63, 81, 181)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
    });
}d2c_barChart();

// Line Chart
function d2c_lineChart(){
    const lineChart = document.getElementById('line-Chart');
    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            datasets: [{
                label: 'Line',
                data: [20,40,60,80,62,11,36,47,83,45,92,62,53,78,60],
                fill: false,
                borderColor: '#3557d4',
                tension: 0.1,
                borderWidth: 2,
            }]
        },
        options: {
            plugins: {
                tooltip: {
                  intersect: false,
                  backgroundColor: "#e0e4ff",
                  bodyColor: "#6271eb",
                  bodyFont: {
                    weight: "bold",
                    size: 16,
                    family: "poppins",
                  },
                  titleFont: {
                    size: 0,
                  },
                  multiKeyBackground: "transparent",
                  padding: 15,
                  displayColors: false,
                  cornerRadius: 5,
                  position: "average",
                },
                legend: {
                  display: false,
                },
            },
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}d2c_lineChart();

// // Area Chart
function d2c_areaChart(){
    const areaChart = document.getElementById('area-Chart');
    new Chart(areaChart, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8],
        datasets: [{
            label: 'Series 1',
            data: [100, 20, 45, 15, 60, 58, 85, 95],
            fill: true,
            borderColor: 'rgba(63, 81, 181)',
            backgroundColor: 'rgba(63, 81, 181, 0.8)',
            borderWidth: 1
        },
        {
            label: 'Series 2',
            data: [30, 80, 82, 56, 58, 5, 80, 100],
            fill: true,
            borderColor: 'rgba(156, 39, 176)',
            backgroundColor: 'rgba(156, 39, 176, 0.6)',
            borderWidth: 1
        }]
        },
        options: {
            animations: {
                tension: {
                  duration: 3000,
                  easing: 'linear',
                  from: 0,
                  to: 1,
                  loop: true
                }
            },
            plugins: {
                filler: {
                    propagate: true
                }
            }
        }
    });
}d2c_areaChart();   

// scatter chart
function d2c_scatter_chart(){
    const scatterChart = document.getElementById('scatter-Chart');
    new Chart(scatterChart, {
        type: 'scatter',
        data:{
            datasets: [{
                label: 'Scatter Dataset',
                data: [{x: 10,y: 0}, {x: 0,y: 10}, {x: 10,y: 5}, {x: 0.5,y: 5.5},{x: 5,y: 30}, {x: 30,y: 0},{x: 40,y: 15}, {x: 25,y: 10},{x: 50,y: 20}, {x: 15,y: 20},{x: 20,y: 20}, {x: 35,y: 5},{x: 15,y: 10}, {x: 45,y: 10}, {x: 30,y: 25}, {x: 5,y: 15},{x: 35,y: 10},{x: 35,y: 20}, {x: 40,y: 15}, {x: 25,y: 25},{x: 50,y: 15}],
                backgroundColor: '#be77cf'
            }],
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
}d2c_scatter_chart();

// stacked bar chart
function d2c_stacked_bar_chart(){
    const stackedBarChart = document.getElementById('stacked-bar-Chart');
    new Chart(stackedBarChart, {
        type: 'bar',
        data: {
            labels: ['Sales','New User','Old user'],
            datasets: [
                {
                    label: 'Sales',
                    data: [20,40,60],
                    backgroundColor: ['rgb(80 164 1 / 51%)'],
                },
                {
                    label: 'New user',
                    data: [20,40,60],
                    backgroundColor: ['rgba(63, 81, 181, 0.8)'],
                },
                {
                    label: 'Old User',
                    data: [20,40,60],
                    backgroundColor: ['#be77cf'],
                },
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}d2c_stacked_bar_chart();

// stacked bar chart
function d2c_bubble_chart(){
    const d2c_bubble_chart = document.getElementById('d2c_bubble_chart');
    new Chart(d2c_bubble_chart, {
        type: 'bubble',
        data: {
            // labels: ['Sales','New User','Old user'],
            datasets: [{
                label: 'First Dataset',
                backgroundColor: ['#6271c4','#be77cf','#9eca7d','#e8e087','#73c0de','#ee6666','#8067dc','#6771dc','#dc8c67','#dc6788','#dc67ce','#8067dc'],
                data: [
                    {x: 25, y: 30,r: 5}, {x: 40,y: 10,r: 10},{x: 55, y: 20,r: 5}, {x: 45,y: 15,r: 10},{x: 25, y: 25,r: 5}, {x: 18,y: 10,r: 5},{x: 30, y: 22,r: 15}, {x: 50,y: 16,r: 5},{x: 25, y: 18,r: 10}, {x: 35,y: 16,r: 10},{x: 20, y: 14,r: 15}, {x: 43,y: 26,r: 10},
                ],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                }
            }
        },
    });
}d2c_bubble_chart();

// // // Doughnut Chart
function d2c_doughnutChart(){
    const doughnutChart = document.getElementById('doughnut-Chart');
    new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
            labels: [
                'Sales',
                'New User',
                'Old user'
            ],
            datasets: [{
                label: 'Doughnut Dataset',
                data: [70, 50,30],
                borderWidth: 0,
                backgroundColor: [
                    'rgba(156, 39, 176, 0.6)',
                    'rgba(63, 81, 181, 0.8)',
                    '#a7b3e2'
                ],
                hoverOffset: 2,

            }]
        },
        options: {
            animations: {
                tension: {
                  duration: 3000,
                  easing: 'linear',
                  from: 0,
                  to: 1,
                  loop: true
                }
            }
        }
    });
}d2c_doughnutChart();

// // Polar Chart
function d2c_polarChart(){
    const polarChart = document.getElementById('polar-Chart');
    new Chart(polarChart, {
        type: 'polarArea',
        data: {
            labels: [
              'Series 1',
              'Series 2',
              'Series 3',
            ],
            datasets: [{
              label: 'Polar Dataset',
              data: [11, 16, 7],
              borderWidth: 0,
              backgroundColor: [
                '#be77cf',
                'rgba(63, 81, 181, 0.8)',
                'rgb(80 164 1 / 51%)',
              ]
            }]
        },
        maintainAspectRatio: false,
        options: {
            animations: {
                tension: {
                  duration: 3000,
                  easing: 'linear',
                  from: 0,
                  to: 1,
                  loop: true
                }
            }
        }
    });
}d2c_polarChart();

// stacked bar chart
function d2c_color_bar_chart(){
    const d2c_color_bar_chart = document.getElementById('pie-Chart');
    new Chart(d2c_color_bar_chart, {
        type: 'pie',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
              datasets: [{
                data: [300, 50, 100],
                borderWidth: 0,
                backgroundColor: [
                  'rgba(63, 81, 181, 0.8)',
                  'rgb(224 203 2 / 47%)',
                  'rgba(156, 39, 176, 0.6)'
                ],
                hoverOffset: 4
              }]
        }
            
    });
}d2c_color_bar_chart();

// radar chart
function d2c_radar_chart(){
    const d2c_radar_chart = document.getElementById('radar-Chart');
    new Chart(d2c_radar_chart, {
        type: 'radar',
        data: {
            labels: [
                'Invest',
                'Market',
                'Transaction',
                'Activity',
                'exchange',
                'Overview',
                'Running'
            ],
            datasets: [{
                label: 'Dataset 1',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
            label: 'Dataset 2',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        }
            
    });
}d2c_radar_chart();

//     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}