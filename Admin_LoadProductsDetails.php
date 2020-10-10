<?php
	$connection = mysqli_connect("","root", "","onlineshopping");

	if($connection)
	{
		$noCol =4;
		$noRow =0;

		$sql  = "Select ProductId,REPLACE(ModelName,'-','_') as ModelName,Price from mobiles";
		$result1  = mysqli_query($connection,$sql);
		$noRow += mysqli_affected_rows($connection);
		$sql  = "Select ProductId,REPLACE(ModelName,'-','_') as ModelName,Price from cameras";
		$result2  = mysqli_query($connection,$sql);
		$noRow += mysqli_affected_rows($connection);
		$sql  = "Select ISBN,REPLACE(BookName,'-','_') as BookName,Price from books";
		$result3  = mysqli_query($connection,$sql);
		$noRow += mysqli_affected_rows($connection);
		$sql  = "Select ProductId,REPLACE(ModelName,'-','_') as ModelName,Price from laptops";
		$result4  = mysqli_query($connection,$sql);
		$noRow += mysqli_affected_rows($connection);
		$sql  = "Select ProductId,REPLACE(ProductType,'-','_') as ProductType,Price from sports";
		$result5  = mysqli_query($connection,$sql);
		$noRow += mysqli_affected_rows($connection);


		echo $noCol;
		echo "-";
		echo $noRow;
		echo "#";

		while ($row = mysqli_fetch_array($result1)) {
					echo $row['ProductId'];
					echo "|";
					echo $row["ModelName"];
					echo "|";
					echo $row["Price"];
					echo "|";
					echo "Mobile";
					echo "-";
		}
		while ($row = mysqli_fetch_array($result2)) {
					echo $row['ProductId'];
					echo "|";
					echo $row["ModelName"];
					echo "|";
					echo $row["Price"];
					echo "|";
					echo "Cameras";

					echo "-";
		}
		while ($row = mysqli_fetch_array($result3)) {
					echo $row['ISBN'];
					echo "|";
					echo $row["BookName"];
					echo "|";
					echo $row["Price"];
					echo "|";
					echo "Books";

					echo "-";
		}
		while ($row = mysqli_fetch_array($result4)) {
					echo $row['ProductId'];
					echo "|";
					echo $row["ModelName"];
					echo "|";
					echo $row["Price"];
					echo "|";
					echo "Laptops";
					echo "-";
		}

		while ($row = mysqli_fetch_array($result5)) {
					echo $row['ProductId'];
					echo "|";
					echo $row["ProductType"];
					echo "|";
					echo $row["Price"];
					echo "|";
					echo "Sports";
					echo "-";
		}
	}


?>
