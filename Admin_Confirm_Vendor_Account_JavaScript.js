
function FetchVendorAccountDetails()
{
  var ID = document.getElementById("vendor_id").value;
  var id = document.getElementById("Vendor_identity");

  var Name = document.getElementById("Name");
  var RecCat = document.getElementById("RecCat");
  var Rent = document.getElementById("Rent");
  var Email = document.getElementById("Email");
  var Mobile = document.getElementById("Mobile");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState==4&&this.status == 200)
      {
          var data = this.responseText;
          var storedData = new Array(6);
          var i=0;
          for(i=0;i<5;i++)
          {
            var temp = data.substring(0,data.indexOf("-"));
            data = data.substring(temp.length+1,data.length);
            storedData[i]=temp;
          }

          data = data.substring(0,data.length);
          id.innerHTML= "Vendor ID :  "+storedData[0];
          Name.innerHTML = "Name :  "+storedData[1];
          Email.innerHTML = "Email :  "+storedData[2];
          Mobile.innerHTML = "Moblie :  "+storedData[3];
          Rent.innerHTML = "Paid Rent :  "+storedData[4];
          ReqCat.innerHTML = "Requested Category:  "+data;

      }
      else
      {
          alter("Sorry we are facing some error in connecting to server");
      }
    };
    xhttp.open("POST", "Admin_FetchVedorsAccountDetailsPHP.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ID="+ID);

}

function AdmitVendorAccount()
{
  var ID = document.getElementById("vendor_id").value;

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
    xhttp.open("POST", "Admin_AdmitVendorAccount.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ID="+ID);

}
