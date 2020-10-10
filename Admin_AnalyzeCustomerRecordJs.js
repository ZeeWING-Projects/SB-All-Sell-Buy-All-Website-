

window.onload = callAll;

function callAll()
{
  LoadCustomerAccountAllDetails();
  LoadCustomerPersonalInfo();
  LoadImagesOfPurchasedProducts();
  
}

function LoadCustomerAccountAllDetails() {
  var ID =  localStorage.getItem("Customer_id");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState==4&&this.status == 200)
      {
          var data = this.responseText;
          var noCol = parseInt(data.substring(0,data.indexOf("-")), 10);
          var noRow = parseInt(data.substring(data.indexOf("-")+1,data.indexOf("#")), 10)
          data 	  = data.substring(data.indexOf("#")+1,data.length);
          //Creating two dimentional array.
          var storedData = new Array(noRow);
  		for (var i = 0; i <noRow; i++)
  		{
      		storedData[i] = new Array(noCol);
  		}
  		//Extracting Data from the response .... i have used my own logic to do this... so dont get confuse.
  		var temp ="";
  		var tempValue="";
  		var i=0;
  		var j=0;
  		for(i=0;i<noRow-1;i++)
  		{
  		temp = data.substring(0,data.indexOf("-"));
  		data 	 = data.substring(temp.length+1,data.length);

  	 	tempValue = temp;
  	 		for(j=0;j<noCol-1;j++)
  	 		{
  	 			tempValue = temp.substring(0,temp.indexOf("|"));
  	 			storedData[i][j]=tempValue;
  	 			temp = temp.substring(tempValue.length+1,temp.length);
  	 		}
  	 		temp = temp.substring(0,temp.length);
  	 		storedData[i][j]=temp;
  	 	}
  		data 	 = data.substring(0,data.length);

  		tempValue = data;
  		temp = data;
  	 		for(j=0;j<noCol-1;j++)
  	 		{
  	 			tempValue = temp.substring(0,temp.indexOf("|"));
  	 			storedData[i][j]=tempValue;
  	 			temp = temp.substring(tempValue.length+1,temp.length);
  	 		}
  	 		temp = temp.substring(0,temp.length-1);
  	 		storedData[i][j]=temp;

  	 	// Now inserting values into table.

  	 	var table = document.getElementById("contentDisplayer");

      table.innerHTML="";

  	 	var tr = table.insertRow(0);                   // table row.
          var th = document.createElement("th");      // table header.
              th.innerHTML = "OrderId";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "ItemId";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Category";
               tr.appendChild(th);

  	 	i=0;

  	 	for(i=0;i<noRow;i++)
  	 	{
  	 	 var row = table.insertRow(-1);

  	 		j=0;

  	 		for(j=0;j<noCol;j++)
  	 		{
    				var cell = row.insertCell(-1);
    				cell.innerHTML = storedData[i][j];
  	 		}
  	 	}
      }

    };
    xhttp.open("POST", "Admin_LoadAllDataDetailsOfCustomerPhp.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ID="+ID);
}
function LoadCustomerPersonalInfo(){

  var ID =  localStorage.getItem("Customer_id");
  var CustId = document.getElementById("CustId");
  var Name = document.getElementById("Name");
  var Email = document.getElementById("Email");
  var Phone = document.getElementById("Phone");
  var Address = document.getElementById("Address");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState==4&&this.status == 200)
      {
          var data = this.responseText;

          var storedData = new Array(6);
          var i=0;
          for(i=0;i<3;i++)
          {
            var temp = data.substring(0,data.indexOf("-"));
            data = data.substring(temp.length+1,data.length);
            storedData[i]=temp;
          }
          data = data.substring(0,data.length);

          CustId.innerHTML="Customer ID: "+ ID;
          Name.innerHTML = "Name :  "+storedData[0];
          Email.innerHTML = "Email :  "+storedData[1];
          Phone.innerHTML = "Phone :  "+storedData[2];
          Address.innerHTML ="Address : "+data

      }
      else
      {
          alter("Sorry we are facing some error in connecting to server");
      }
    };
    xhttp.open("POST", "Admin_FetchCustomerPersonalInformationPhp.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ID="+ID);

}
function LoadImagesOfPurchasedProducts()
{
  var ID =  localStorage.getItem("Customer_id");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState==4&&this.status == 200)
        {
            var data = this.responseText;
            var noCol = parseInt(data.substring(0,data.indexOf("-")), 10);
            var noRow = parseInt(data.substring(data.indexOf("-")+1,data.indexOf("#")), 10)
            data 	  = data.substring(data.indexOf("#")+1,data.length);
            //Creating two dimentional array.
            var storedData = new Array(noRow);
    		for (var i = 0; i <noRow; i++)
    		{
        		storedData[i] = new Array(noCol);
    		}

    		//Extracting Data from the response .... i have used my own logic to do this... so dont get confuse.
    		var temp ="";
    		var tempValue="";
    		var i=0;
    		var j=0;
    		for(i=0;i<noRow-1;i++)
    		{
    		temp = data.substring(0,data.indexOf("-"));
    		data 	 = data.substring(temp.length+1,data.length);

    	 	tempValue = temp;
    	 		for(j=0;j<noCol-1;j++)
    	 		{
    	 			tempValue = temp.substring(0,temp.indexOf("|"));
    	 			storedData[i][j]=tempValue;
    	 			temp = temp.substring(tempValue.length+1,temp.length);
    	 		}
    	 		temp = temp.substring(0,temp.length);
    	 		storedData[i][j]=temp;
    	 	}
    		data 	 = data.substring(0,data.length);

    		tempValue = data;
    		temp = data;
    	 		for(j=0;j<noCol-1;j++)
    	 		{
    	 			tempValue = temp.substring(0,temp.indexOf("|"));
    	 			storedData[i][j]=tempValue;
    	 			temp = temp.substring(tempValue.length+1,temp.length);
    	 		}
    	 		temp = temp.substring(0,temp.length-1);
    	 		storedData[i][j]=temp;

          var i=0;
          for(i=0;i<noRow;i++)
          {
            var x = document.createElement("IMG");
            var imgAddress  = "Images/"+storedData[i][0]
            x.setAttribute("src", imgAddress);
            x.setAttribute("width", "304");
            x.setAttribute("height", "200");
            document.getElementById("imgHolder").appendChild(x);
          }

          //document.getElementById("HEADER").innerHTML=storedData[0][0];
        }
      };
      xhttp.open("POST", "Admin_LoadImagesOfProductsForCustomerAnalysisPhp.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("ID="+ID);


}
