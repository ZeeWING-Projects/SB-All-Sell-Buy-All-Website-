<?php

	$ID = filter_input(INPUT_POST, 'ID');

	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select * from vendorinfo where VendorID='$ID'";
		$result  = mysqli_query($connection,$sql);
    $row = mysqli_fetch_array($result);
		if(mysqli_affected_rows($connection)>0)
		{
			echo $row["VendorID"];
      echo "-";
      echo $row["VendorName"];
      echo "-";
      echo $row["Mobile"];
      echo "-";
      echo $row["Email"];
      echo "-";
      echo $row["RentToBePaid"];
      echo "-";
      echo $row["Address"];
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
