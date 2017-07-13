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
	include 'connet.php';

	// 用户名
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	$password = md5($password);

	// 查找所有用户信息
	$sql = "update user set password='$password' where name='$name'";

	$result = $conn->query($sql);

	if($result){
		echo "密码修改成功";
	}

	//关闭连接
	$conn->close();
?>