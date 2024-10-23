document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'today',
        center: 'title',
        right: 'prev,next'
      },
      initialDate: '2023-04-12',
      navLinks: true, // can click day/week names to navigate views
      nowIndicator: true,
  
      weekNumbers: false,
      weekNumberCalculation: 'ISO',
  
      editable: true,
      selectable: true,
      dayMaxEvents: true,
      padding: 20,
      events: [
        {
          title: 'D2C Annual Party',
          start: '2023-04-11',
          color: '#00AA5D'
        },
        // {
        //   title: 'Long Event',
        //   start: '2023-04-24',
        //   end: '2023-01-10',
        //   color: '#FFC107'
        // },
      ],
    });
  
    calendar.render();
  });

  //     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}