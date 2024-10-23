// chart page bar chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_barChart') ?? '';

    if (Chart == '') {
        return false;
    } else {
        var options = {
            chart: {
                foreColor: 'rgba(35, 35, 35, 0.85)',
                type: 'bar',
                toolbar: {
                    show: false,
                },
                fontFamily: 'Poppins, sans-serif',
            },
            grid:{
                borderColor: '#00000014',  
            },
            series: [
                {
                    name: 'Income',
                    data: [40, 60, 48, 70, 30, 80, 90, 70],
                },
            ],
            colors: ['#3557D4'],
            legend: {
                show: false,
                position: 'top',
                horizontalAlign: 'right',
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ['Q1', 'Q2', 'Q3', 'Q4','Q1', 'Q2', 'Q3', 'Q4'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 5,
                    dataLabels: {
                        position: 'center',
                    },
                },
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '0.75rem',
                    colors: ['#FFFFFF'],
                },
            },
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

// chart page candle stick chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_candle_stick_chart') ?? '';
    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [{
                data: [
                    {
                        x: new Date(1538830800000),
                        y: [6587.81, 6592.73, 6567.14, 6578]
                    },
                    {
                        x: new Date(1538832600000),
                        y: [6578.35, 6581.72, 6567.39, 6579]
                    },
                    {
                        x: new Date(1538834400000),
                        y: [6579.38, 6580.92, 6566.77, 6575.96]
                    },
                    {
                        x: new Date(1538836200000),
                        y: [6575.96, 6589, 6571.77, 6588.92]
                    },
                    {
                        x: new Date(1538838000000),
                        y: [6588.92, 6594, 6577.55, 6589.22]
                    },
                    {
                        x: new Date(1538839800000),
                        y: [6589.3, 6598.89, 6589.1, 6596.08]
                    },
                    {
                        x: new Date(1538841600000),
                        y: [6597.5, 6600, 6588.39, 6596.25]
                    },
                    {
                        x: new Date(1538843400000),
                        y: [6598.03, 6600, 6588.73, 6595.97]
                    },
                    {
                        x: new Date(1538845200000),
                        y: [6595.97, 6602.01, 6588.17, 6602]
                    },
                    {
                        x: new Date(1538847000000),
                        y: [6602, 6607, 6596.51, 6599.95]
                    },
                    {
                        x: new Date(1538848800000),
                        y: [6600.63, 6601.21, 6590.39, 6591.02]
                    },
                    {
                        x: new Date(1538850600000),
                        y: [6591.02, 6603.08, 6591, 6591]
                    },
                    {
                        x: new Date(1538852400000),
                        y: [6591, 6601.32, 6585, 6592]
                    },
                    {
                        x: new Date(1538854200000),
                        y: [6593.13, 6596.01, 6590, 6593.34]
                    },
                    {
                        x: new Date(1538856000000),
                        y: [6593.34, 6604.76, 6582.63, 6593.86]
                    },
                    {
                        x: new Date(1538857800000),
                        y: [6593.86, 6604.28, 6586.57, 6600.01]
                    },
                    {
                        x: new Date(1538859600000),
                        y: [6601.81, 6603.21, 6592.78, 6596.25]
                    },
                    {
                        x: new Date(1538861400000),
                        y: [6596.25, 6604.2, 6590, 6602.99]
                    },
                    {
                        x: new Date(1538863200000),
                        y: [6602.99, 6606, 6584.99, 6587.81]
                    },
                    {
                        x: new Date(1538865000000),
                        y: [6587.81, 6595, 6583.27, 6591.96]
                    },
                    {
                        x: new Date(1538866800000),
                        y: [6591.97, 6596.07, 6585, 6588.39]
                    },
                    {
                        x: new Date(1538868600000),
                        y: [6587.6, 6598.21, 6587.6, 6594.27]
                    },
                    {
                        x: new Date(1538870400000),
                        y: [6596.44, 6601, 6590, 6596.55]
                    },
                    {
                        x: new Date(1538872200000),
                        y: [6598.91, 6605, 6596.61, 6600.02]
                    },
                    {
                        x: new Date(1538874000000),
                        y: [6600.55, 6605, 6589.14, 6593.01]
                    },
                    {
                        x: new Date(1538875800000),
                        y: [6593.15, 6605, 6592, 6603.06]
                    },
                    {
                        x: new Date(1538877600000),
                        y: [6603.07, 6604.5, 6599.09, 6603.89]
                    },
                    {
                        x: new Date(1538879400000),
                        y: [6604.44, 6604.44, 6600, 6603.5]
                    },
                    {
                        x: new Date(1538881200000),
                        y: [6603.5, 6603.99, 6597.5, 6603.86]
                    },
                    {
                        x: new Date(1538883000000),
                        y: [6603.85, 6605, 6600, 6604.07]
                    },
                    {
                        x: new Date(1538884800000),
                        y: [6604.98, 6606, 6604.07, 6606]
                    },
                ]
            }],
            chart: {
                type: 'candlestick',
                toolbar:{
                    show: false
                },
            },
            title: {
                show: false
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#23CB62',
                                downward: '#FC76B7',
                    },
                },
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

// liquidity area chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_liquidity_Chart') ?? '';
    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [
                {
                    name: 'series1',
                    data: [31, 40, 28, 51, 42, 50, 80],
                },
            ],
            colors: ['#23CB62'],
            chart: {
                type: 'area',
                foreColor: '#373D3F',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            grid:{
                show: false,
            },
            stroke: {
                curve: 'smooth',
            },
            legend: {
                show: false,
            },
            yaxis:{
                show: false,
            },
            xaxis: {
                type: 'category',
                categories: ['15 Nov','17 Nov','19 Nov','21 Nov','23 Nov','25 Nov','27 Nov'],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

// overview Line Chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_lineChart') ?? '';
    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [
                {
                    name: 'Desktop',
                    data: [
                        ['2023-05-01', 150],
                        ['2023-05-02', 160],
                        ['2023-05-03', 170],
                        ['2023-05-04', 161],
                        ['2023-05-05', 167],
                        ['2023-05-06', 162],
                        ['2023-05-07', 161],
                        ['2023-05-08', 152],
                        ['2023-05-09', 141],
                        ['2023-05-10', 144],
                        ['2023-05-11', 154],
                        ['2023-05-12', 166],
                        ['2023-05-13', 176],
                        ['2023-05-14', 187],
                        ['2023-05-15', 198],
                        ['2023-05-16', 210],
                        ['2023-05-17', 196],
                        ['2023-05-18', 207],
                        ['2023-05-19', 200],
                        ['2023-05-20', 187],
                        ['2023-05-21', 192],
                        ['2023-05-22', 204],
                        ['2023-05-23', 193],
                        ['2023-05-24', 204],
                        ['2023-05-25', 193],
                        ['2023-05-26', 204],
                        ['2023-05-27', 208],
                        ['2023-05-28', 196],
                        ['2023-05-29', 193],
                        ['2023-05-30', 178],
                        ['2023-05-31', 204],
                        ['2023-06-01', 218],
                        ['2023-06-02', 211],
                        ['2023-06-03', 218],
                        ['2023-06-04', 216],
                        ['2023-06-05', 197],
                        ['2023-06-06', 190],
                        ['2023-06-07', 179],
                        ['2023-06-08', 172],
                        ['2023-06-09', 158],
                        ['2023-06-10', 159],
                        ['2023-06-11', 147],
                        ['2023-06-12', 152],
                        ['2023-06-13', 137],
                        ['2023-06-14', 136],
                        ['2023-06-15', 123],
                        ['2023-06-16', 112],
                        ['2023-06-17', 99],
                        ['2023-06-18', 100],
                        ['2023-06-19', 95],
                        ['2023-06-20', 105],
                        ['2023-06-21', 116],
                        ['2023-06-22', 125],
                        ['2023-06-23', 124],
                        ['2023-06-24', 133],
                        ['2023-06-25', 129],
                        ['2023-06-26', 116],
                        ['2023-06-27', 119],
                        ['2023-06-28', 109],
                        ['2023-06-29', 115],
                        ['2023-06-30', 111],
                        ['2023-07-01', 96],
                        ['2023-07-02', 104],
                        ['2023-07-03', 102],
                        ['2023-07-04', 116],
                        ['2023-07-05', 126],
                        ['2023-07-06', 117],
                        ['2023-07-07', 130],
                        ['2023-07-08', 124],
                        ['2023-07-09', 126],
                        ['2023-07-10', 131],
                        ['2023-07-11', 143],
                        ['2023-07-12', 130],
                        ['2023-07-13', 116],
                        ['2023-07-14', 118],
                        ['2023-07-15', 122],
                        ['2023-07-16', 132],
                        ['2023-07-17', 126],
                        ['2023-07-18', 136],
                        ['2023-07-19', 123],
                        ['2023-07-20', 112],
                        ['2023-07-21', 116],
                        ['2023-07-22', 113],
                        ['2023-07-23', 109],
                        ['2023-07-24', 99],
                        ['2023-07-25', 100],
                        ['2023-07-26', 93],
                        ['2023-07-27', 85],
                        ['2023-07-28', 79],
                        ['2023-07-29', 64],
                        ['2023-07-30', 79],
                    ],
                },
            ],
            chart: {
                type: 'area',
                foreColor: '#373D3F',
                stacked: false,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#3557D4'],
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
            },
            grid:{
                borderColor: '#00000014',  
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100],
                },
            },
            xaxis: {
                type: 'datetime',
            },
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();


// Donut Chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_donutChart') ?? '';
    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [35, 35,30],
            chart: {
                foreColor: '#ccc',
                type: 'donut',
                toolbar: {
                    show: false,
                },
            },
            colors: ['#91cc75', '#5470c6','#ee6666'],
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

// column chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_column_chart') ?? '';

    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            chart: {
                type: 'bar',
                // foreColor: '#ccc',
                toolbar: {
                    show: false,
                },
            },
            colors: ['#5470c6','#fac858','#91cc75'],
            grid:{
                borderColor: '#00000014',  
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                    return "$ " + val + " thousands"
                    }
                }
            }
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

// stacked bar chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_stacked_bar_chart') ?? '';

    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [{
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43],
            },{
                name: 'PRODUCT C',
                data: [11, 17, 15, 15, 21, 14]
            }, {
                name: 'PRODUCT D',
                data: [21, 7, 25, 13, 22, 8]
            }],
            chart: {
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            colors: ['#5470c6','#fac858','#91cc75','#ee6666'],
            grid:{
                borderColor: '#00000014',  
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0,
                        show: false
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    dataLabels: {
                        total: {
                            enabled: true,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900
                            }
                        }
                    }
                },
            },
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                    '01/05/2011 GMT', '01/06/2011 GMT'
                ],
            },
            legend: {
                show: false
            },
            fill: {
                opacity: 1
            }
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();


// RadialBar Chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_radialBarChart') ?? '';
    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [44, 55, 67, 83],
            chart: {
                foreColor: '#ccc',
                type: 'radialBar',
                fontFamily: 'Poppins, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: false,
                            label: 'Total',
                            formatter: function (w) {
                                return 249;
                            },
                        },
                    },
                },
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            colors: ['#5470c6', '#fac858', '#91cc75', '#ee6666'],
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

// Scatter Chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_scatterChart') ?? '';
    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [
                {
                    name: 'SAMPLE A',
                    data: [
                        [16.4, 5.4],
                        [21.7, 2],
                        [25.4, 3],
                        [19, 2],
                        [10.9, 1],
                        [13.6, 3.2],
                        [10.9, 7.4],
                        [10.9, 0],
                        [10.9, 8.2],
                        [16.4, 0],
                        [16.4, 1.8],
                        [13.6, 0.3],
                        [13.6, 0],
                    ],
                },
                {
                    name: 'SAMPLE B',
                    data: [
                        [36.4, 13.4],
                        [1.7, 11],
                        [5.4, 8],
                        [9, 17],
                        [1.9, 4],
                        [3.6, 12.2],
                        [1.9, 14.4],
                        [1.9, 9],
                        [1.9, 13.2],
                        [1.4, 7],
                        [6.4, 8.8],
                        [3.6, 4.3],
                        [1.6, 10],
                        [9.9, 2],
                    ],
                },
                {
                    name: 'SAMPLE C',
                    data: [
                        [21.7, 3],
                        [23.6, 3.5],
                        [24.6, 3],
                        [29.9, 3],
                        [21.7, 20],
                        [23, 2],
                        [10.9, 3],
                        [28, 4],
                        [27.1, 0.3],
                        [16.4, 4],
                        [13.6, 0],
                        [19, 5],
                        [22.4, 3],
                        [24.5, 3],
                    ],
                },
                {
                    name: 'SAMPLE D',
                    data: [
                        [1.9, 15.2],
                        [6.4, 16.5],
                        [0.9, 10],
                        [4.5, 17.1],
                        [10.9, 10],
                        [0.1, 14.7],
                        [9, 10],
                        [12.7, 11.8],
                        [2.1, 10],
                        [2.5, 10],
                        [27.1, 10],
                        [2.9, 11.5],
                        [7.1, 10.8],
                        [2.1, 12],
                    ],
                },
                {
                    name: 'SAMPLE E',
                    data: [
                        [36.4, 13.4],
                        [1.7, 11],
                        [5.4, 8],
                        [9, 17],
                        [1.9, 4],
                        [3.6, 12.2],
                        [1.9, 14.4],
                        [1.9, 9],
                        [1.9, 13.2],
                        [1.4, 7],
                        [6.4, 8.8],
                        [3.6, 4.3],
                        [1.6, 10],
                        [9.9, 2],
                    ],
                },
            ],
            chart: {
                foreColor: '#ccc',
                type: 'scatter',
                toolbar: {
                    show: false,
                },
            },
            colors: ['#5470c6', '#fac858', '#91cc75', '#ee6666', '#73c0de'],
            grid: {
                show: true,
                borderColor: '#00000014',
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
            xaxis: {
                tickAmount: 10,
                labels: {
                    formatter: function (val) {
                        return parseFloat(val).toFixed(1);
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
            },
            legend: {
                show: false,
            },
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

// Area Chart
(() => {
    'use strict';
    const Chart = document.querySelector('#d2c_areaChart') ?? '';
    if (Chart == '') {
        return false;
    } else {
        var options = {
            series: [
                {
                    name: 'series1',
                    data: [31, 40, 28, 51, 42, 109, 100],
                },
                {
                    name: 'series2',
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            colors: ['#5470c6', '#fac858'],
            chart: {
                type: 'area',
                foreColor: '#ccc',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            grid:{
                borderColor: '#00000014',  
            },
            stroke: {
                curve: 'smooth',
            },
            legend: {
                show: false,
            },
            xaxis: {
                type: 'datetime',
                categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z'],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        };

        var chart = new ApexCharts(Chart, options);
        chart.render();
    }
})();

//     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}