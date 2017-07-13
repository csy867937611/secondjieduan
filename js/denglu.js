require(['config'],()=>{
	require(['jquery'],($)=>{
		var _number=$('#phoneNumber').val();
		var _password=$('#phonePassword').val();
		console.log(_number);
		$.ajax({
			url:'../api/denglu.php',
			data:{
				number:_number,
				password:_password
			},
			success:function(res){
				console.log(res);
			}
		})
	})
})
