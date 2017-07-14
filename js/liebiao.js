require(['config'],function(){
	require(['jquery','abc','cba'],function($){
		//插入头部
		$('<div/>').addClass('header').load('../html/header.html',function(){
				$(this).insertBefore('.bigbox');
		});
		//插入尾部
		$('<div/>').addClass('foot').load('../html/footer.html',function(){
				$(this).insertAfter('.bigbox');
		});
		//插入固定栏
		$('.guding').laochen({
			type:'gudinglan',
			width:88,
			height:300,
			imgs:['../img/fix01.png','../img/fix02.png','../img/fix03.png','../img/fix04.png','../img/fix05.png']
		});
		//发起请求数据
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
		//二级菜单
		$('.fenlei .mone').on('mouseenter',function(){
			$('.secondlei ').laochen({
				type:'secondMeniu',
				shuju:['新生儿','S码','M码','L码','XL码','XXL码','裤型纸尿裤']
			})
		});
		$('.fenlei .mseond').on('mouseenter',function(){
			console.log($('.fenlei .mseond'))
			$('.secondlei ').laochen({
				type:'secondMeniu',
				shuju:['1段','2段','3段 ','4段','5段','羊奶粉','特殊配方奶粉']          
			})
		});
		$('.fenlei .mthree').on('mouseenter',function(){
			$('.secondlei ').laochen({
				type:'secondMeniu',
				shuju:[
'爽身防晒','安全防护','宝宝护肤','洗发／沐浴','日常护理 ','驱蚊防蚊','洗衣液/皂','牙膏牙刷' , '奶瓶清洗','座便器', '洗澡/游泳用具','洗手液/皂','套装礼盒','护肤湿巾','婴儿理发器']          
			})
		});
	})
})
