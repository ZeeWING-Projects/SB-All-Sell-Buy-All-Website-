<?php
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$sql  = "Select co.OrderId as OrderId,CustomerId,REPLACE(OrderPlacementDate,'-','/') as OrderPlacementDate,itemId,Category,OrderStatus from customerorders as co inner join orderdetails as od on co.OrderId=od.OrderId where OrderPlacementDate=CURRENT_DATE();";
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
					echo $row["OrderPlacementDate"];
					echo "|";
					echo $row["itemId"];
					echo "|";
					echo $row["Category"];
					echo "|";
					echo $row["OrderStatus"];
        	echo "-";
		}

	}


?>
