// commonjs
// const flatpickr = require("flatpickr");

flatpickr("#basic", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

flatpickr("#dateTime", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

flatpickr("#time_picker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
});

flatpickr("#min_max_dates", {
    dateFormat: "d.m.Y",
    minDate: "today",
    maxDate: "15.12.2050"
});

flatpickr("#fixed_day_dates", {
    minDate: "today",
    maxDate: new Date().fp_incr(10)
});

flatpickr("#disabling_dates", {
    disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9) ],
    dateFormat: "Y-m-d",
});

flatpickr("#disabling_range", {
    dateFormat: "Y-m-d",
    disable: [
        {
            from: "2025-04-01",
            to: "2025-05-01"
        },
        {
            from: "2025-09-01",
            to: "2025-12-01"
        }
    ]
});

flatpickr("#multiple_select", {
    mode: "multiple",
    dateFormat: "Y-m-d"
});

flatpickr("#range_select", {
    mode: "range"
});

flatpickr("#min_dates", {
    minDate: "today"
});

//     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}