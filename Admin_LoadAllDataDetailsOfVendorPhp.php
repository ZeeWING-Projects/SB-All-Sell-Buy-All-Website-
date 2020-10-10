<?php

	$ID = filter_input(INPUT_POST, 'ID');

	
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select Category from vendorinfo where VendorId='$ID'";
		$result  = mysqli_query($connection,$sql);
		$row = mysqli_fetch_array($result);
	 	$Cat =  $row['Category'];

		$sql  = "Select OrderId,ci.CustomerId,FirstName,ItemId,Category,REPLACE(OrderPlacementDate,'-','/') as OrderPlacementDate,REPLACE(OrderShipmentDate,'-','/')as OrderShipmentDate,OrderPrice,OrderStatus,Address  from orderdetails as od inner join customerorders as co USING (OrderId) left join customerinfo as ci on ci.CustomerId=co.CustomerId where Category='$Cat';";
		$result  = mysqli_query($connection,$sql);
		$noCol = mysqli_num_fields ($result);
		$noRow = mysqli_affected_rows($connection);

		echo $noCol;
		echo "-";
		echo $noRow;
		echo "#";

		while ($row = mysqli_fetch_array($result)) {
					echo $row['OrderId'];
					echo "|";
					echo $row["CustomerId"];
					echo "|";
					echo $row["FirstName"];
					echo "|";
					echo $row["ItemId"];
					echo "|";
					echo $row["Category"];
					echo "|";
					echo $row["OrderPlacementDate"];
					echo "|";
					echo $row["OrderShipmentDate"];
					echo "|";
					echo $row["OrderPrice"];
					echo "|";
					echo $row["OrderStatus"];
					echo "|";
					echo $row["Address"];
					echo "-";
		}
	}

	else {
		echo "Error in loading data for customer";
	}
?>
