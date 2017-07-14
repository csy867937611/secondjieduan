require(['config'],function(){
	require(['jquery','fada','cba','com'],function($){
		$('<div/>').addClass('foot').load('../html/footer.html',function(){
			$(this).insertAfter('.bigbox');
		})
		//接收cookie
		var _goodlist=getCookie('goodlist');
		//写进页面
		_goodlist = JSON.parse(_goodlist);
		console.log(_goodlist);
		//数量
		var $qty=1;
		var $res=_goodlist.map(function(item){
			return`
				<ul>
					<li><input type="checkbox"/></li>
					<li><img src="${item.img}"</li>
					<li>${item.name}</li>
					<li class="dan">${item.price}</li>
					<li><span class="jian">-</span><input type="text" class="number" value="1"><span class="jia">+</span></li>
					<li class="price">${item.price}</li>
					<li class="delete"><span>x</span></li>
				</ul>
			`
		});
		$('.neirong').html($res);
		//将默认价格写进商品金额
		var _goodPrice=_goodlist.price;
		$('.liuliu').find('li').first().html(_goodPrice);
		$('.money').find('span').html(_goodPrice);
		
		//点击事件
		$('li').on('click','.jia',function(){
			
			var res=$(this).siblings('input').val();
			res++;
			$(this).siblings('input').val(res);
			var price=Number($(this).parent().siblings('.dan').html());
			$(this).parent().siblings('.price').html('￥'+res*price);
			//写进商品金额
			$('.liuliu').find('li').first().html('￥'+res*price);
			$('.money').find('span').html('￥'+res*price);
		})
		$('li').on('click','.jian',function(){
			var res=$(this).siblings('input').val();
			res--;
			$(this).siblings('input').val(res);
			var price=Number($(this).parent().siblings('.dan').html());
			$(this).parent().siblings('.price').html('￥'+res*price);
			//写进商品金额
			$('.liuliu').find('li').first().html('￥'+res*price);
			$('.money').find('span').html('￥'+res*price);
		})
		$('ul').on('click','.delete',function(){
			$(this).parent('ul').remove();
		})
	})
})