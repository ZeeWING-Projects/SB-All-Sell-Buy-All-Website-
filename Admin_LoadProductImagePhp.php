<?php
  $ID = filter_input(INPUT_POST, 'ID');

	$connection = mysqli_connect("","root", "","buyall");

	if($connection)
	{
		$sql  = "Select image from  productimages where userId='$ID' ";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);
		$row = mysqli_fetch_array($result);
      echo $row["image"];
	}
?>
