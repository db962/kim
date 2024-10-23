
// Form Validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.form-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

// Preloader Js
// Set initial opacity
$(".preloader").css("opacity", 1);

// Delay execution for 2 seconds
setTimeout(function() {
    // Set opacity to 0
    $(".preloader").css("opacity", 0);
    // After a short delay (for the fade-out effect to complete), set display to none
    setTimeout(function() {
        $(".preloader").css("display", "none");
    }, 500); // Adjust the delay to match the fade-out duration
}, 500);


// /* 
//     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}
//   */