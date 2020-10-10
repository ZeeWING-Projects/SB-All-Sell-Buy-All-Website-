<?php
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select vi.VendorId as VendorID,VendorName,RentPaid,REPLACE(PaymentDate,'-','/') as PaymentDate from commission as com inner join vendorinfo as vi on com.VendorId=vi.VendorID ";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);
		echo $noCol;
		echo "-";
		echo $noRow;
		echo "#";
		while ($row = mysqli_fetch_array($result)) {
					echo $row['VendorID'];
					echo "|";
					echo $row["VendorName"];
					echo "|";
					echo $row["RentPaid"];
					echo "|";
					echo $row["PaymentDate"];
        	echo "-";
		}

	}


?>
