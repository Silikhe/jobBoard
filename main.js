// $(document).ready(function() {
//     $('.nav .dropdown-menu').prev('a').on('click', function(e) {
//       e.preventDefault();
//       $(this).parent().find('.dropdown-menu').slideToggle();
//     });
// });


// checkbox

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


function myDisplay(e) {
  // e.addEventListener("click", function(){ alert("Hello World!"); })
  document.getElementById("panel").style.display = "block";
}