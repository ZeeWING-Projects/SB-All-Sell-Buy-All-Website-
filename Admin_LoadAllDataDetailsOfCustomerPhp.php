<?php

	$ID = filter_input(INPUT_POST, 'ID');
	$connection = mysqli_connect("","root", "","onlineshopping");
	
	if($connection)
	{
		$sql  = "Select OrderId,ItemId,Category from orderdetails as od inner join customerorders USING (OrderId) WHERE CustomerId='$ID';;";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);
		echo $noCol;
		echo "-";
		echo $noRow;
		echo "#";
		while ($row = mysqli_fetch_array($result)) {
					echo $row['OrderId'];
					echo "|";
					echo $row["ItemId"];
					echo "|";
					echo $row["Category"];
					echo "-";
		}
	}
	else {
		echo "Error in loading data for customer";
	}
?>
