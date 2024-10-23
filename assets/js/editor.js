// quill editor
var quill = new Quill('#editor', {
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block','formula','video','background','color','blockquote']
        ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
});

// // cke editor
ClassicEditor
.create( document.querySelector( '#cke_editor' ) )
.catch( error => {
    console.error( error );
} );

// tinymce editor
$( document ).ready(function() {
    tinymce.init({
        selector: '#tinymce-editor',
        toolbar: 'undo redo | blocks | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help'
    });
});


//     Template Name: {{FundRows – Free Bootstrap Crypto Dashboard Template}}
//     Template URL: {{https://www.designtocodes.com/product/fundrows-free-crypto-dashboard-template/}}
//     Description: {{Build a user-friendly crypto dashboard with FundRows free crypto dashboard template. Enjoy full responsiveness, and customizable for your crypto projects. With FundRows, developers can create a unique crypto admin dashboard that is visually impressive.}}
//     Author: DesignToCodes
//     Author URL: https://www.designtocodes.com
//     Text Domain: {{ FundRows }}