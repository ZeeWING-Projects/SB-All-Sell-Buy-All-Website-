<?php
	$connection = mysqli_connect("","root", "","buyall");

	if($connection)
	{
		$sql  = "Select * from customers";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);
		echo $noCol;
		echo "-";
		echo $noRow;
		echo "#";
		while ($row = mysqli_fetch_array($result)) {
					echo $row['id'];
					echo "|";
					echo $row["custName"];
					echo "|";
					echo $row["custEmail"];
					echo "|";
					echo $row["custPhone"];
					echo "|";
					echo $row["amount"];
					echo "-";	
		}
		
	}
	

?>