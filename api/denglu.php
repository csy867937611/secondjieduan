<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'zhuce';
	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);
	// 设置编码格式
	$conn->set_charset('utf8');
	//获取前端信息
	$number = isset($_GET['number']) ? $_GET['number'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	// md5加密
	$password = md5($password);
	
	$arr=array("number"=>"$number","password"=>"$password");
	//查询用户所有信息
	$sql="select * from register";
	//查询数据库
	$result = $conn->query($sql);
	//使用查询结果
	$row=$result->fetch_all(MYSQLI_ASSOC);
	if(in_array($arr, $row)){
		echo "ok";
	}else{
		echo "no";
	};
	//关闭连接
	$conn->close();
?>