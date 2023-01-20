
// ----------------------- TOKEN HERE -------------------------
let token = '80a00e0296aec9c4e7a39bffc7986b90fead7606';
// --------------------- onchange file-name ---------------------
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

var id = "";
var x;
// --------------------- show data function ---------------------
var click = 0 ;
function ShowData(Response)   {
    click += 1 ;
    // --------------------- output function 
  identification_output = document.querySelector('#identification_output');
  identification_value = `${Response.identifier}`;
  //identification_value = JSON.stringify(Response.identifier);
  identification_filename = JSON.stringify(Response.fileName);
    // --------------------- transaction log 
  console.log('identification id : ' + identification_value);
  console.log('filename : ' + identification_filename);
  identification_output_export = document.createElement('b');
  identification_output_export.innerHTML = `Filename : ` + identification_filename  + `\t`;
  identification_output_export.setAttribute("class" , "section-sub-title");
   // --------------------- label identification
  let id_label_identification = document.querySelector('#id_label_identification');
  let label_identification = document.createElement('b');
  label_identification.innerHTML = `Identification ID :`;
  label_identification.setAttribute("class" , "section-sub-title");
    // --------------------- input identification
  let id_input_identification = document.querySelector('#id_input_identification');
  let input_identification = document.createElement('input');
  input_identification.setAttribute('id' , 'input_identification_'+click);
  input_identification.setAttribute('type','text');
  input_identification.setAttribute('name' , 'input_identification_'+click);
  input_identification.setAttribute('value' , identification_value);
    // --------------------- input copy-button
  let id_copy_identification = document.querySelector('#id_copy_identification');
  copy_identification = document.createElement('input');
  copy_identification.setAttribute('type','button');
  copy_identification.setAttribute('class','btn btn-success');
  copy_identification.setAttribute('id','copy_identification_'+click);
  copy_identification.setAttribute('value','copy');
  copy_identification.setAttribute('onclick' , 'CopyText()');
  
  on_the_line = document.createElement('p');
  on_the_line.innerHTML = `</br>`;
  
    // --------------------- output 
  if(click < 4 )  {
      // --------------------- alert 
    alert('Upload Complete!');
    identification_output.appendChild(identification_output_export);
    identification_output.appendChild(label_identification);
    identification_output.appendChild(input_identification);
    identification_output.appendChild(copy_identification);
    identification_output.appendChild(on_the_line);
    

  }else{
    alert('Error! Upload-CD cannot more than 3');
  }
  return click;
}

function CopyText() {
  /* Get the text field */
  var CopyTextNode = document.querySelector("#input_identification_"+click);
  /* Select the text field */
  CopyTextNode.select();
  CopyTextNode.setSelectionRange(0, 99999)
  /* Copy the text inside the text field */
  document.execCommand("copy");
  /* Alert the copied text */
  alert("Copied the text: " + CopyTextNode.value);
}

// --------------------- read-cd_parser function ---------------------

/*function ReadData(Response)    {
  //let id = document.form_confirm_user.identification_ID.value;
  //let identifier = id;
  identifier = Response.identifier;
  let url=`https://resume-parser.affinda.com/public/api/v1/documents/${identifier}`;

  fetch(url,
      {
          method: 'GET',
          headers:    
          {
              'Authorization' : `Bearer ${token}`,
              'Accept'  : 'application/json' ,
              'Content-type' : 'application/json',
          },
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
      .catch(error => reject(error))
}*/

// --------------------- upload-cd_parser function ---------------------
function onUpload () 
{
  // --------------------- token to using API Affinda ---------------------
  //const fileInput = document.querySelector('input');
  console.log("Complete Upload");
  const fileInput = document.querySelector('#cd_parser_file') ;
  var formData = new FormData()
  formData.append('file', fileInput.files[0]);
  fetch('https://resume-parser.affinda.com/public/api/v1/documents/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        // If you add this, upload won't work
        // 'Content-Type': 'multipart/form-data'
      },
      body: formData,
    }
    )
    .then(Response => Response.json())
    .then(Response => ShowData(Response))
    .catch(error => console.log(error))
}

