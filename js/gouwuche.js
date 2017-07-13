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
					<li>${item.price}</li>
					<li><span class="jian">-</span><span class="number">${$qty}</span><span class="jia">+</span></li>
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
		$('.jia').on('click',function(){
			$qty++;
			$('.number').html($qty);
			var $price=_goodlist.price*$qty+'.00';
			$('.price').html($price);
			//写进商品金额
			$('.liuliu').find('li').first().html($price);
			$('.money').find('span').html($price);
		})
		$('.jian').on('click',function(){
			$qty--;
			$('.number').html($qty);
			var $price=_goodlist.price*$qty;
			$('.price').html($price);
			//写进商品金额
			$('.liuliu').find('li').first().html($price);
			$('.money').find('span').html($price);
		})
		$('.delete').on('click',function(){
			var index=$('this').index();
			console.log(index)
			$('.neirong').find('ul').remove();
		})
	})
})