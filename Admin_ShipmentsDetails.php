<?php
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select co.OrderId as OrderId,CustomerId,VendorName,vi.Category,itemId,REPLACE(OrderPlacementDate,'-','/') as OrderPlacementDate,REPLACE(OrderShipmentDate,'-','/') as OrderShipmentDate,OrderStatus,DeadLineGenerator(OrderPlacementDate) as DateWarning from customerorders as co inner join orderdetails as od on co.OrderId=od.OrderId inner join vendorinfo as vi on od.Category=vi.Category";
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
			echo $row["VendorName"];
			echo "|";
			echo $row["Category"];
			echo "|";
			echo $row["itemId"];
			echo "|";
			echo $row["OrderPlacementDate"];
			echo "|";
			echo $row["OrderShipmentDate"];
			echo "|";
			echo $row["OrderStatus"];
			echo "|";
			echo $row["DateWarning"];
			echo "-";
		}

	}


?>
