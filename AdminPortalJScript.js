function LoadCustomersDetails() {
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
              th.innerHTML = "CustomerID";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "FName";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "LName";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Email";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Moblie";
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
  	 	 document.getElementById("heading").innerHTML ="Number of Records: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_GetCustomersDetails.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function LoadVendorsAccountDetails() {
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

  	 	var tr = table.insertRow(0);
       var th = document.createElement("th");      // table header.
              th.innerHTML = "VendorID";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "VendorName";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Email";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Category";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "AccountStatus";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "WARNING";
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
  	 	 document.getElementById("heading").innerHTML ="Number of Vendors: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_GetVendorsAccountDetails.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function LoadVendorsPaymentDetails(){
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
              th.innerHTML = "VendorID";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "VendorName";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "RentPaid";
               tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "PaymentDate";
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
  	 	 document.getElementById("heading").innerHTML ="Number of Vendors: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_GetVendorsPaymentDetails.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

function LoadVendorsReqsetsDetails(){
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
             th.innerHTML = "VendorID";
             tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "VendorName";
              tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "Email";
              tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "Category";
              tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "RentToBePaid";
             tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "AccountStatus";
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
  	 	 document.getElementById("heading").innerHTML ="Number of Vendors: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_GetVendorsRequets.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

function LoadTodaysOrdersDetails(){
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
             th.innerHTML = "CustomerID";
              tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "OrderPlacementDate";
              tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "itemId";
              tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "Category";
             tr.appendChild(th);
             th = document.createElement("th");
             th.innerHTML = "OrderStatus";
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
  	 	 document.getElementById("heading").innerHTML ="Number of orders palced today: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_TodaysOrdersDetails.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function LoadShipmentsDetails(){
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
              th.innerHTML = "CustomerID";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "VendorName";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Category";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "itemId";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "OrderPlacementDate";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "OrderShipmentDate";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "OrderStatus";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "DateWarning";
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
  	 	 document.getElementById("heading").innerHTML ="Number of Shipments: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_ShipmentsDetails.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function LoadMyRevenueDetails(){
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
              th.innerHTML = "ID";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Name";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Phone";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Amount";
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
  	 	 document.getElementById("heading").innerHTML ="Number of Transictions: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_MyRevenueDetails.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function LoadMyProductsDetails(){
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
              th.innerHTML = "ProductID";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Product Name";
              tr.appendChild(th);
              th = document.createElement("th");
              th.innerHTML = "Product Price";
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
  	 	 document.getElementById("heading").innerHTML ="Number of total items on website: "+noRow;
      }

    };
    xhttp.open("POST", "Admin_LoadProductsDetails.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function OpenCustomerAnalyzer()
{
  var cutomer_id = document.getElementById("customer_Id").value;
  localStorage.setItem("Customer_id",cutomer_id);

  window.open('Admin_AnalyzeCustomerRecord.html');
           return false;
}
function OpenVendorAnalyzer()
{

  var cutomer_id = document.getElementById("customer_Id").value;
  localStorage.setItem("Customer_id",cutomer_id);

  window.open('Admin_VendorAnalyzerWindow.html');
           return false;
}
function LoadItemImage()
{

  var id = document.getElementById("Item_id").value;
  localStorage.setItem("product_id",id);
  window.open('Admin_Image_preview.html','newwindow',
  'width=500,height=550');
           return false;

}
