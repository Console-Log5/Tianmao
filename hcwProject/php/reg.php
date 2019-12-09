<?php
header("Content-type:text/html;charset=utf-8");
	$name=$_REQUEST['name'];
	$flage=$_REQUEST['flage'];
	$conn=mysql_connect("localhost","root","root");
	if($conn){
		mysql_select_db("tmall");
	}
	$result1=mysql_query("select * from user where num='$name'", $conn);
	
	if($flage=="false"){
		$row=mysql_num_rows($result1);
		if($row>0){
			echo "flg";
		}else{
			echo "success";		
		}
	}else if($flage=="true"){
		$pwd=$_REQUEST['pwd'];		
		if(mysql_num_rows($result1)==1){
			echo "0";
		} else {
			$result2=mysql_query("insert into user(num,pwd) values('$name','$pwd')", $conn);
			echo '1';
		}
	}
	mysql_close($conn);
?>