<?php
	
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'zhuce';
	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);
	// 设置编码格式
	$conn->set_charset('utf8');

	//用户
	$number = isset($_GET['number']) ? $_GET['number'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	//查询所有用户信息
	$sql="select number from register where number='$number'";
	// 查询数据库
	$result = $conn->query($sql);
	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);
	/*print_r ($row);*/
	if($row){
		echo '存在';
	}else{
		// md5加密密码
		$password = md5($password);
		// 写入所有用户信息
		$sql = "insert into register(number,password) values('$number','$password')";
		// 获取查询结果
		$res = $conn->query($sql);

		if($res){
			echo "ok";
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}	
	}
	//关闭连接
	$conn->close();
?>