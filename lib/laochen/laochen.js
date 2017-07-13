;(function($){
	$.fn.laochen=function(options){
		//type:guding,charu
		 
		this.each(function(idx,ele){
			var $self = $(ele);
			// 添加特定类名
			$self.addClass('laochen');
			
			// 定义宽高
			$self.css({
				width:options.width,
				height:options.height
			})
			//固定栏
			if(options.type==='gudinglan'){
				//生成结构
				var $ul=$('<ul/>').addClass('zhuijia');
				$.each(options.imgs,function(idx,url){
					$('<li/>').html(`<img src="${url}"/>`).appendTo($ul);
				})
				$ul.appendTo($self);
				
				var scrollTop;
				// 1、滚动距离大于1000时时显示导航，否则隐藏
				$(window).on('scroll',function(e){
					// 获取滚动条滚动过的距离
					scrollTop = $(window).scrollTop();
						if(scrollTop >= 100){
							
							$(this).fadeIn();
						}else{
	
							$(this).fadeOut();
						}
				}.bind(this))
				
				//绑定点击事件
				$('li').click(function(e){
					scrollTop=0;
					$('html,body').animate({'scrollTop':scrollTop});
				})
			}
			//详情页小图
			if(options.type ==='xiaotu'){
				console.log(666);
				//生成结构
				var $ul=$('<ul/>').addClass('suolue');
				$ul.css({
					width:options.width,
					height:options.height
				})
				$.each(options.imgs,function(idx,url){
					$('<li/>').html(`<img src="${url}"/>`).appendTo($ul);
				})
				$ul.appendTo($self);
				var $span=$('<span/>').html('<').addClass('prev').insertBefore($ul);
				var $tspan=$('<span/>').html('>').addClass('after').insertAfter($ul);
				var index=$('li').index();
				var len=$('li').length;
				//绑定点击事件
				$self.on('click','.prev',function(){
					index--;
					showPic();
				}).on('click','.after',function(){
					index++;
					showPic();
				})
				function showPic(){
					// 到达最后一张时，重新回到第一张
					if(index > len-1){
						index = 0;
					}else if(index<0){
						index = len-1;
					}
					var obj;
					var bj;
					obj = {left:-index*67};
					console.log(obj)
					$ul.stop().animate(obj);
				}
			}
			//点击图片缩放
			
			
		})
		
	}
})(jQuery);
