alert("Loading");
function loadImage()
{

  var ID =  localStorage.getItem("product_id");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState==4&&this.status == 200)
        {
            var data = this.responseText;
            var x = document.createElement("IMG");
            var imgAddress  = "Images/"+data;
            x.setAttribute("src", imgAddress);
            x.setAttribute("width", "304");
            x.setAttribute("height", "200");
            document.getElementById("imageholder").appendChild(x);

          //document.getElementById("HEADER").innerHTML=storedData[0][0];
        }
      };
      xhttp.open("POST", "Admin_LoadProductImagePhp.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("ID="+ID);
}
