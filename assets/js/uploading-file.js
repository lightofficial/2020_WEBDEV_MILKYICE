// --------------------- token to using API Affinda ---------------------
let token = '2e31f86a2fbcf710e1b2d43f95514cc46b4defe8'
// --------------------- onchange file-name ---------------------
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

var id = "";
var x;

// --------------------- upload function ---------------------
function onUpload () 
{
  const fileInput = document.querySelector('#cd_parser_file') ;
  var formData = new FormData()
  formData.append('file', fileInput.files[0]);
  fetch('https://resume-parser.affinda.com/public/api/v1/documents/', 
  {
      method: 'POST',
      headers: 
      {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
      body: formData,
    }).then(r => r.json()).then(r => console.log(r))
}

