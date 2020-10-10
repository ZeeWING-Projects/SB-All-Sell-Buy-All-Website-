
function ConfirmLogin(){

  var uname = document.getElementById("uname_value").value;
  var upass = document.getElementById("upass_value").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.status == 200)
    {

    //this.readyStare : this is used to see where $connection is creaated or not
          if(this.responseText == "Login Successfull")
          {
            window.open("Admin.html");
          }
          else if (this.responseText == "Tabahi Sain")
          {
            alert(this.responseText);
          }
    }
    else
    {
        alter("Sorry we are facing some error in connecting to server");
    }
    alter("Response from server : "+this.responseText);


  };
  xhttp.open("POST", "Confirm_admin_login.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("username="+uname+"& password="+upass);

}

function closeLoginForm() {
  document.getElementById("login_as_admin_popup").style.display = "none";
}
