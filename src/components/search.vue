<template>
	<div class="search">
	  
	  <span class="search-main">
	  	<input type="text" placeholder="请输入区块高度、操作哈希、合同哈希、公钥地址查询">
	  	<i class="iconfont icon-search"></i>
	  </span>
	</div>
</template>
<style>

	.search{
		/*width: 400px;*/
		float: right;
		.search-main{
			display: inline-block;
			position: relative;
			input{
				width: 400px;
				height: 36px;
				border-radius: 18px;
				padding: 0 40px 0 10px;
				border: 0;
				font-size: 16px;
				color: #333;
			}
			input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
				color: #999; 
				font-size: 14px;
			} 
			input:-moz-placeholder, textarea:-moz-placeholder { 
				color: #999; 
				font-size: 14px;
			} 
			input::-moz-placeholder, textarea::-moz-placeholder { 
				color: #999; 
				font-size: 14px;
			} 
			input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
				color: #999; 
				font-size: 14px;
			} 
			i{
				position: absolute;
				top: 0;
				right: 10px;
				color: #085eb7;
				font-size: 30px;
				cursor: pointer;
			}
		}
	}
</style>