function setRowsCol()
{

}
function LoadTable(){



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

	 	var table = document.getElementById("ContentTable");


	 	var tr = table.insertRow(0);                   // table row.
        var th = document.createElement("th");      // table header.
            th.innerHTML = "ID";
            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = "Name";
             tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = "Email";
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
	 	 document.getElementById("heading").innerHTML ="Number of Rows : "+noRow+" And number of columns : "+noCol;
    }


  };
  xhttp.open("POST", "GetData.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();

}
