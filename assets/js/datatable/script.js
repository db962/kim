// advanced data-table 1
$(document).ready( function () {
    $('#d2c_advanced_table_1').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});


// transaction page table

// yearly transaction table
$(document).ready( function () {
    $('#d2c_yearly_transaction_table').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});
// monthly_transaction_table
$(document).ready( function () {
    $('#d2c_monthly_transaction_table').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});
// monthly_transaction_table
$(document).ready( function () {
    $('#d2c_weekly_transaction_table').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});

// activity page table

// yearly transaction table
$(document).ready( function () {
    $('#d2c_all_activity_table').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});
// monthly_transaction_table
$(document).ready( function () {
    $('#d2c_withdraw_activity_table').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});
// monthly_transaction_table
$(document).ready( function () {
    $('#d2c_deposit_activity_table').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});


// yearly transaction table
$(document).ready( function () {
    $('#d2c_profile_yearly').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});
// monthly_transaction_table
$(document).ready( function () {
    $('#d2c_profile_monthly').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});
// monthly_transaction_table
$(document).ready( function () {
    $('#d2c_profile_weekly').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sPrevious": '<i class="fas fa-angle-left"></i>', // This is the link to the previous page
            "sNext": '<i class="fas fa-angle-right"></i>', // This is the link to the next page
            }
        }
    });
});

$(function () {
    
    const table1 = '#d2c_advanced_table';
    const table3 = '#d2c_trade_table';
    const table4 = '#d2c_wallet_activity_table';
    const table5 = '#d2c_crypto_currency';
    const table6 = '#d2c_table_with_pagination';
    const table7 = '#d2c_table_with_pagination_search';
    const table8 = '#d2c_datatable';

    if (table1) {
        new DataTable(table1);
    }

    if (table3) {
        new DataTable(table3);
    }

    if (table4) {
        new DataTable(table4);
    }

    if (table5) {
        new DataTable(table5);
    }

    if (table6) {
        new DataTable(table6);
    }

    if (table7) {
        new DataTable(table7);
    }

    if (table8) {
        new DataTable(table8);
    }

});

// button selection control table
$(document).ready(function() {
    // vertical scroll table
    new DataTable('#d2c_vertical_scroll', {
        paging: false,
        scrollCollapse: true,
        scrollY: '330px'
    });
    // checkbox selection
    new DataTable('#d2c_selection_control', {
        dom: 'Bfrtip',
        buttons: [
            'selectAll',
            'selectNone',
            'selectRows',
            'selectColumns',
            'selectCells',
        ],
        select: {
            style: 'multi'
        }
    });
    
} );

// delete row table
const table = new DataTable('#d2c_delete_row');
 
table.on('click', 'tbody tr', (e) => {
    let classList = e.currentTarget.classList;
 
    if (classList.contains('selected')) {
        classList.remove('selected');
    }
    else {
        table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        classList.add('selected');
    }
    document.querySelector('#button').addEventListener('click', function () {
        table.row('.selected').remove().draw(false);
    });
});
 

//     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}