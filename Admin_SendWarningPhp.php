<?php

	$ID = filter_input(INPUT_POST, 'ID');
	$message = filter_input(INPUT_POST, 'MSG');

	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "UPDATE vendorinfo set Warning = '$message' where VendorId='$ID'";
		$result  = mysqli_query($connection,$sql);
		if(mysqli_affected_rows($connection)>0)
		{
			echo "Warning Sent to vendor ";
		}
		else
		{
			echo "Make sure you have provided right ID";
		}
	}
	else
	{
		echo $connection->error;
	}

?>
