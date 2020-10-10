<?php
  $ID = filter_input(INPUT_POST, 'ID');
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
    $sql  = "Select Image from vendorinfo where VendorId='$ID'";
    $result  = mysqli_query($connection,$sql);
    $row = mysqli_fetch_array($result);
      echo $row["Image"];

		}



?>
