// alerts 1
function alerts_1() {
    swal("Here's the title!", "here's the text!");
}
// alerts 2
function alerts_2(){
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
    });
}
// alerts 3
function alerts_3() {
    swal("Write something here:", {
            content: "input",
        })
        .then((value) => {
        swal(`You typed: ${value}`);
    });
}
// alerts 34
function alerts_4() {
    swal("Are you sure you want to do this?", {
        buttons: ["No", "Yes"],
    });
}
// alerts 5
function alerts_5() {
    swal("Good job!", "You clicked the button!", "success");
}

//     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}