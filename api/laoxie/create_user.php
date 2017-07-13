<?php
	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	// 第一步
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'h5_1703';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);


	// 设置编码格式
	$conn->set_charset('utf8');

	// 接收前端传回的数据
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '123456';
	$gender = isset($_GET['gender']) ? $_GET['gender'] : '';

	// md5加密密码
	$password = md5($password);

	// 查找所有用户信息
	$sql = "insert into user(name,password,gender) values('$name','$password','$gender')";

	// echo $sql;

	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	if($result){
		echo "数据写入成功";
	}
?>