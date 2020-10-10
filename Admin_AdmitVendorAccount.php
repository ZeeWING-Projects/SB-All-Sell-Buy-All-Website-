<?php

	$ID = filter_input(INPUT_POST, 'ID');
	$connection = mysqli_connect("","root", "","onlineshopping");
	
	if($connection)
	{
		$sql  = "UPDATE vendorinfo SET AccountStatus='Approved' WHERE VendorID='$ID'";
		$result  = mysqli_query($connection,$sql);

		if(mysqli_affected_rows($connection)>0)
		{
			echo "Record updated Sccessfuly";
		}
		else
		{
			echo $connection->error;
		}
	}
	else
	{
		echo $connection->error;
	}

?>
