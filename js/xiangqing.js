require(['config'],function(){
	require(['jquery','fada','cba','com'],function($){
		$('<div/>').addClass('header').load('../html/header.html',function(){
				$(this).insertBefore('.bigbox');
		})
		$('<div/>').addClass('foot').load('../html/footer.html',function(){
				$(this).insertAfter('.bigbox');
		})
		var $id=location.search.slice(4)
		$.ajax({
			url:'../api/xiangqing.php',
			dataType:'json',
			data:{
				id:$id
			},
			success:function(res){
				/*var goodlist=res[0];*/
				var $big=`<p><span></span>牛栏<span></span></p>
					<p>${res[0].brand}&nbsp;${res[0].name}&nbsp;&nbsp;<span>适合0-6个月</span></p>
					<p><span>￥${res[0].price}</span><span>${res[0].discount}</span><span>市场价：</span><span>${res[0].sprice}</span><span>&nbsp;&nbsp;优惠：￥24.00</span></p>
					<p>
						<span></span>
						<span>专注零售十二年&nbsp;&nbsp;质量保证</span>
					</p>
					<p>型号：<span>罐<a href="#"></a></span></p>
					<p>数量：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="jian">-</span><b class="number">1</b><span class="jia">+</span></p>
					<div class="anniu">
						<a href="gouwuche.html"></a>
						<span>加入购物车</span>
					</div>
					<p><img src="../img/20170712110137.png"/></p>
				`
				$('.message').html($big);
				var goodlist=[];
				//点击事件
				$('.anniu').children().last().on('click',function(){
					//创建新数组
					
					var item={
						img:res[0].img,
						name:res[0].name,
						price:res[0].price
					};
					goodlist.push(item);
					//创建cookie
					setCookie('goodlist',JSON.stringify(goodlist));
					//获取img
					var $piture=$('.piture').children('img');
					var $left=$piture.offset().left;
					var $top=$piture.offset().top;
					var $_left=$('.car').offset().left;
					var $_top=$('.car').offset().top;
					// 复制商品图片
					// 获取到的图片出来的位置点击哪张图片就在哪生成一张图片
					var $cloneimg=$piture.clone();
					var $span=$('<span/>').css({display:'block',fontSize:'12px'});
					var $message=res[0].brand;
					var $_message=res[0].name;
					$span.html($message);
					$cloneimg.addClass('cloneimg').css({width:30,height:30,position:'absolute',left:$left+'px',top:$top+'px'})
					$cloneimg.appendTo($('body'));
					$cloneimg.animate({left:$_left,top:$_top},1000,function(){
						var $idx=1;
						//创建li
						var $li=$('<li/>').css({listStyle:'none',position:'relative'});
						$cloneimg.css({left:30*$idx,top:30*$idx});
						$cloneimg.appendTo($li);
						$span.appendTo($li);
						$li.appendTo($('.car ul'));
						
						++$idx;
					})
					
				})
				/*$('.anniu').on('click',function(){
					//创建cookie
					setCookie('goodlist',JSON.stringify(goodlist));
				})*/
				//点击事件
				var $qty=1;
				$('.jia').on('click',function(){
					$qty++;
					$('.number').html($qty);
					var $price='￥'+res[0].price*$qty+'.00';
					//写进商品金额
					$('.message').children().eq(2).children().first().html($price);
				})
				$('.jian').on('click',function(){
					$qty--;
					$('.number').html($qty);
					var $price='￥'+res[0].price*$qty+'.00';
					//写进商品金额
					$('.message').children().eq(2).children().first().html($price);
				})
			}
		});

		$('.piture').gdsZoom({
			width:372,
			height:372,
			gap:0,
		});
		//固定栏
		$('.guding').laochen({
			type:'gudinglan',
			width:88,
			height:300,
			imgs:['../img/fix01.png','../img/fix02.png','../img/fix03.png','../img/fix04.png','../img/fix05.png']
		});
		//生成小图，点击span滚动，点击小图出现大图
		$('.xiaopiture').laochen({
			width:340,
			type:'xiaotu',
			imgs:['../img/15530_63x63.jpg','../img/15531_63x63.jpg','../img/15532_63x63.jpg','../img/15533_63x63.jpg','../img/small_20161124172041111012_63x63.jpg']
		});
		//吸顶菜单，绑定滚动事件
		window.onscroll=function(){
			var scrollTop=window.scrollY;
			// 判断滚动过的高度
			if(scrollTop >= 800){
				// 获取/设置元素的类
				$('.ceiling').addClass('fixed');
			}else{
				$('.fixed').removeClass('fixed');
			}
		};
		//点击小图出大图		
		$('.suolue li img').on('click',function(){
			var $src=$(this).attr('src').slice(0,13);
			
			var $newSrc=$src+'327x327.jpg';
			console.log($newSrc);
			var $img=$('<img/>').attr('src',$newSrc);
			console.log($img);
			$('.piture').html($img);
		});
	})
})