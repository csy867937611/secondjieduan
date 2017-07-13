require(['config'],function(){
	require(['jquery','abc','cba'],function($){
		console.log($('.bannerimg'));
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
		$.ajax({
			url:'../api/liebiao2.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(res){
				console.log(res);
				var $ul=$('<ul/>');
				//把数据写入页面
				var arr=res.map(function(i){
					return`
						<li>
							<span><img src="${i.img}"/></span>
							<span>${i.brand}${i.name}</span>
							<span>${i.price}</span><span>${i.discount}</span><span>${i.sprice}</span>
						</li>
					`
				}).join('');
				$ul.html(arr);
				$('.liebiao').html($ul);
			}
		})
		$.ajax({
			
		})
	})
})
