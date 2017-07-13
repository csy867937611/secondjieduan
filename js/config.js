// 配置信息
require.config({
	// baseUrl:'js'
	paths:{
		jquery:'../lib/jquery3.1.1',
		abc:'../lib/jquery.lxCarousel/jquery.lxCarousel',
		cba:'../lib/laochen/laochen',
		fada:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		com:'common'
	},
	shim:{
		abc:['jquery'],
		cba:['jquery'],
		fada:['jquery'],
		com:['jquery']
	}
})