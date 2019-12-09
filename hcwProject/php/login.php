<?php
header("Content-type:text/html;charset=utf-8");
	$name=$_REQUEST['name'];
	$pwd=$_REQUEST['pwd'];
	$conn=mysql_connect("localhost","root","root");
	if($conn){
		mysql_select_db("tmall");
	}
	$result = mysql_query("select * from user where num='$name' and pwd='$pwd' ", $conn);
	$rows=mysql_num_rows($result);
	if ($rows>0) {
	  echo '1'; //登录成功
	} else {
	  echo "0"; // 登录失败
	}
	mysql_close($conn);

?>