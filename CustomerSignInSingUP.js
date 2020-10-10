
var mylogin=document.getElementById('login');
var myregister=document.getElementById('register');
var mybtn=document.getElementById('btn');
login = ()=>{
mylogin.style.left='50px';
myregister.style.left='500px';
mybtn.style.left='0px';	
}
register = ()=>{
mylogin.style.left='-450px';
myregister.style.left='50px';
mybtn.style.left='110px';	
}
function ConfrimLogin()
{
	var	CustomerName_js = document.getElementById("username_html").value;
	var	CustomerPassword_js = document.getElementById("password_html").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.status == 200)
    {

    //this.readyStare : this is used to see where $connection is creaated or not
          if(this.responseText == "Login Successfull")
          {
            window.open("Customer.html");
          }
          else if (this.responseText == "Incorrect Username or Password ")
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
  xhttp.open("POST", "CustomerSignIn.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("CustomerName_js_php="+CustomerName_js+"& CustomerPassword_js_php="+CustomerPassword_js);
  alert("Sent To php Successfully");

}
function CreateAccount()
{
	var	CustomerName = document.getElementById("username").value;
	var	Password = document.getElementById("password").value;
	var	Email = document.getElementById("email").value;

	 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.status == 200)
    {

    //this.readyStare : this is used to see where $connection is creaated or not
          if(this.responseText == "Create Successfully")
          {
            window.open("CustomerSignInSingUP.html");
          }
          else if (this.responseText == "Technical Problem Occur Try Again Later")
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
  xhttp.open("POST", "CustomerSignUp.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("CustomerName="+CustomerName+"& Password="+Password+"& Email="+Email);
  alert("Sent To php Successfully");

}