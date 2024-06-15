function checkForm() {
  var inputName = document.getElementById("input_name").value;
  var inputEmail = document.getElementById("input_email").value;
  var inputSubject = document.getElementById("input_subject").value;
  var inputDetail = document.getElementById("input_details").value;

  if (inputName === "") {
    alert("Please Enter Your Name..!");
    return false;
  }

   else if (inputEmail === "") {
    alert("Please Enter Your Emaill..!");
    return false;
  }

  else if (inputSubject === "") {
    alert("Please Select Your Subject..!");
    return false;
  }

  else if (inputDetail === "") {
    alert("Please Enter Your Detail..!");
    return false;
  }

  else{
    var summary = "Name    : " + inputName + "<br>" + "<br>" +
                  "Email   : " + inputEmail + "<br>" + "<br>" +
                  "Subject : " + inputSubject + "<br>" + "<br>" +
                  "Details : " + inputDetail + "<br>" + "<br>" ;

    document.getElementById("summary").innerHTML = summary;
    document.getElementById("editBtn").style.display = "inline";
    document.getElementById("sendBtn").style.display = "inline";
  }
}

function sendEmail() {
  var name = document.getElementById("input_name").value;
  var email = document.getElementById("input_email").value;
  var subject = document.getElementById("input_subject").value;
  var details = document.getElementById("input_details").value;


  var emailContent = "Name    : " + name + "\n" + 
                     "Email   : " + email + "\n" +                      
                     "Subject : " + subject + "\n" + 
                     "Details : " + details;

  alert("Your email succesfully sent\n\n" + emailContent);

  document.getElementById("summary").style.display = "none";
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("sendBtn").style.display = "none";
}
