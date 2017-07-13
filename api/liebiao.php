<?php
	include 'connet.php';
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'zhuce';
	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);
	// 设置编码格式
	$conn->set_charset('utf8');
	// 分页设置
	$page = isset($_GET['page']) ? $_GET['page'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 20;
	//查询所有用户信息
	$sql="select * from listy limit".' '.($page-1)*$qty.','.$qty;
	/*echo $sql;*/
	// 查询数据库
	$result = $conn->query($sql);
	/*print_r ($result);*/
	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);
	// 格式化数据
	$result = array(
		'pageNo'=>$page,
		'qty'=>$qty,
		'total'=>$conn->query('select count(*) from listy')->fetch_row()[0],
		'data'=>$row
	);
	echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>