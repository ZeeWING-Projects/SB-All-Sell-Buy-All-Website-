function SendWarning()
{

  var ID = document.getElementById("vendor_id").value;
  var message = document.getElementById("warning_msg").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState==4&&this.status == 200)
      {

            alert(this.responseText);
      }
      else
      {
          alter("Sorry we are facing some error in connecting to server");
      }
    };
    xhttp.open("POST", "Admin_SendWarningPhp.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ID="+ID+"&MSG="+message);

}
