require(['config'],()=>{
	require(['jquery'],($)=>{
		$('.button').on('click',()=>{
			console.log($('.button'));
			//表单验证
			//手机号 11位  1[34578]
			var _number=$('#number').val();
			if(!/^1[34578]\d{9}$/.test(_number)){
				alert('手机号码不合法');
				return false;
			}
			//密码 长度6-20 不能包含空格
			var _password=$('#password').val();
			if(!/^[^\s]{6,20}$/.test(_password)){
				alert('密码号码不合法');
				return false;
			}
			//确认密码必须和密码相同
			var _makesure=$('#makesure').val();
			if(_password!==_makesure){
				alert('两次密码不符');
				return false;
			}
			//验证码不能为空
			var _auth_code=$('auth_code').val();
			if(!/^[0-9a-z\-]$/.test(_auth_code)){
				alert('验证码不对');
				return false;
			}
			//语音验证码不能为空
			var _vioce=$('vioce').val();
			if(!/^[0-9a-z\-]$/.test(_vioce)){
				alert('语音验证码不对');
				return false;
			}
			$.ajax({
				url:'../api/zhuce.php',
				data:{
					number:$('#number').val(),
					password:$('#password').val(),
				},
				success:(res)=>{
					//生成结构
					$('.hint').html(res);
					
				}
			})
		})
	})
})
