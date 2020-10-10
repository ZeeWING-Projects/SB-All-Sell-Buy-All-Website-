<?php
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select VendorID,VendorName,Email,Category,RentToBePaid,AccountStatus,Warning  from vendorinfo where AccountStatus='NotApproved'";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);
		echo "6";
		echo "-";
		echo $noRow;
		echo "#";
		while ($row = mysqli_fetch_array($result)) {
					echo $row['VendorID'];
					echo "|";
					echo $row["VendorName"];
					echo "|";
					echo $row["Email"];
					echo "|";
					echo $row["Category"];
					echo "|";
					echo $row["RentToBePaid"];
					echo "|";
					echo $row["AccountStatus"];
					echo "-";
	}
}

?>
