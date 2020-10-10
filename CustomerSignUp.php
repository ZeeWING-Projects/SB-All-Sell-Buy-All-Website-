<?php

	$CustomerName = filter_input(INPUT_POST, 'CustomerName');
	$Password = filter_input(INPUT_POST, 'Password');
	$Email = filter_input(INPUT_POST, 'Email');

	$connection = mysqli_connect("","root", "","rizwan");

	if($connection)
	{
		//$sql  = "Select * from user_information where db_username='$username' and db_password='$password'";
		$sql = "INSERT INTO user_information(db_username,db_password,Email) values('$CustomerName','$Password','$Email')";
		$result  = mysqli_query($connection,$sql);
	//	if(mysqli_affected_rows($connection)>0)
	//	{
			echo "Create Successfully";
	//	}
	//	else
	//	{
	//		echo "Tabahi Sain";
	//	}
	}
	else
	{

		echo $connection->error;
	}

?>