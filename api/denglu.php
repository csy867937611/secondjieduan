<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'zhuce';
	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);
	// 设置编码格式
	$conn->set_charset('utf8');
	//查询用户所有信息
	$sql="select * from register";
	//查询数据库
	$result = $conn->query($sql);
	//使用查询结果
	$row=$result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>