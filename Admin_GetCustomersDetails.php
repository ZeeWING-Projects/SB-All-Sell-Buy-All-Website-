<?php
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select * from customerinfo";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);
		echo "5";
		echo "-";
		echo $noRow;
		echo "#";
		while ($row = mysqli_fetch_array($result)) {
			    echo $row['CustomerId'];
					echo "|";
					echo $row['FirstName'];
					echo "|";
					echo $row["LastName"];
					echo "|";
					echo $row["Email"];
					echo "|";
					echo $row["Mobile"];
					echo "-";
		}

	}
?>
