module.exports = {
	pages:{
		index:{
			entry:'src/main.js'
		},
	},
	lintOnSave:false,//关闭语法检查
	//开启代理服务器
	devServer: {
	    proxy: 'http://localhost:5000'
	},
	publicPath: './',  
	
}