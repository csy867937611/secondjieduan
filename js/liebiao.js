require(['config'],function(){
	require(['jquery','abc','cba'],function($){
		$('<div/>').addClass('header').load('../html/header.html',function(){
				$(this).insertBefore('.bigbox');
		})
		$('<div/>').addClass('foot').load('../html/footer.html',function(){
				$(this).insertAfter('.bigbox');
		})
		$('.guding').laochen({
			type:'gudinglan',
			width:88,
			height:300,
			imgs:['../img/fix01.png','../img/fix02.png','../img/fix03.png','../img/fix04.png','../img/fix05.png']
		})
		var pageNo=1;
		var qty=16;
		$.ajax({
			url:'../api/liebiao.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(res){
				console.log(res);
				var $ul=$('<ul/>');
				//把数据写入页面
				var arr=res.data.map(function(i){
					return`
						<li>
							<span><a href="../html/xiangqing.html?id=${i.id}"><img src="${i.img}"/></a></span>
							<span>${i.brand}${i.name}</span>
							<span>${i.price}</span><span>${i.discount}</span><span>${i.sprice}</span>
						</li>
					`
				}).join('');
				$ul.html(arr);
				$('.liebiao').html($ul);
				//生成分页
				var index=Math.ceil(res.total/res.qty);
				for(var i=1;i<=index;i++){
					var $span=$('<span/>');
					$span.html(i);
					$span.appendTo($('.pageNo'));
				}
				//点击分页切换数据
				$('.pageNo').children().on('click',function(){
					//清空列表
					$('.liebiao').html('');
					var idx=Number($(this).text());
					pageNo=idx;
					console.log(pageNo,qty)
					$.ajax({
						url:'../api/liebiao.php',
						dataType:'json',
						data:{
							page:pageNo,
							qty:qty
						},
						success:function(res){
							console.log(res)
							var $ul=$('<ul/>');
							//把数据写入页面
							var arr=res.data.map(function(i){
								return`
									<li>
										<span><a href="../html/xiangqing.html?id=${i.id}"><img src="${i.img}"/></a></span>
										<span>${i.brand}${i.name}</span>
										<span>${i.price}</span><span>${i.discount}</span><span>${i.sprice}</span>
									</li>
								`
							})
						$ul.html(arr);
						$('.liebiao').html($ul);
						}
					})
				})
			}
		})
	})
})
