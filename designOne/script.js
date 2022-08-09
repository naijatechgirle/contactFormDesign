// 'use strict';

// let forms = document.getElementsByClassName('needs-validation');
// (function() {
//     window.addEventListener('load', function() {
//         let validation = Array.prototype.filter.call(forms, function(form) {
//         form.addEventListener('submit', function(event) {
//             if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//             }
//             form.classList.add('was-validated');
//         }, false);
//         });
//     }, false);
// })();

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          console.log('I am working');
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


// captcha
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

// function successCallBack(token) {
//   debugger;
// }
