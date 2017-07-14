require(['config'],()=>{
	require(['jquery'],($)=>{
		$('.button').on('click',function(){
			var _number=$('#phoneNumber').val();
			var _password=$('#phonePassword').val();
			console.log(_number,_password)
			$.ajax({
				url:'../api/denglu.php',
				/*dataType:"json",*/
				data:{
					number:_number,
					password:_password
				},
				success:function(res){
					console.log(res);
					$('#shuchu').html(res);
					
				}
			})
		})
		
	})
})
