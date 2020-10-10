<?php

	$CustomerName = filter_input(INPUT_POST, 'CustomerName_js_php');
	$CustomerPassword = filter_input(INPUT_POST, 'CustomerPassword_js_php');
	$connection = mysqli_connect("","root", "","rizwan");

	if($connection)
	{
		$sql  = "Select * from user_information where db_username='$CustomerName' and db_password='$CustomerPassword'";
		//$sql = "INSERT INTO customeroder(CustomerId,ProductId,Category) values('$CustomerId','$ProductId','$Category')";
		$result  = mysqli_query($connection,$sql);
		if(mysqli_affected_rows($connection)>0)
		{
			echo "Login Successfull";
		}
		else
		{
			echo "Tabahi Sain";
		}
	}
	else
	{

		echo $connection->error;
	}

?>