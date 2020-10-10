<?php

	$ID = filter_input(INPUT_POST, 'ID');

	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select Category from vendorinfo where VendorId='$ID'";
		$result  = mysqli_query($connection,$sql);
		$row = mysqli_fetch_array($result);
		$Cat =  $row['Category'];

		$sql  = "Delete from vendorinfo where VendorID='$ID'";
		$result  = mysqli_query($connection,$sql);


		if(mysqli_affected_rows($connection)>0)
		{
			$sql  = "truncate $Cat";
			$result  = mysqli_query($connection,$sql);

			echo "Account Delete Successfully and whole records";
		}
		else
		{
			echo "This Id does not exists";
		}
	}
	else
	{
		echo $connection->error;
	}

?>
