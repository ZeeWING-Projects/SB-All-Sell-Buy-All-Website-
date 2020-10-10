<?php
  $ID = filter_input(INPUT_POST, 'ID');
  
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
    $sql  = "Select Category from vendorinfo where VendorId='$ID'";
    $result  = mysqli_query($connection,$sql);
    $row = mysqli_fetch_array($result);
    $Cat =  $row['Category'];

		$sql  = "Select Image from  $Cat ";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);
		echo $noCol;
		echo "-";
		echo $noRow;
		echo "#";
		while ($row = mysqli_fetch_array($result)) {
      echo $row["Image"];
			echo "-";
		}

	}

?>
