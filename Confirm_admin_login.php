<?php

	$username = filter_input(INPUT_POST, 'username');
	$password = filter_input(INPUT_POST, 'password');

	$connection = mysqli_connect("","root", "","buyall");

	if($connection)
	{
		$sql  = "Select * from users where username='$username' and password='$password'";
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
