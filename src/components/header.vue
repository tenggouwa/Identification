<template>
	<div class="header">
		<div class="header-main">
			<img src="../assets/img/logo.png" height="34" width="139" alt="" @click="goLink()">
			<index-search></index-search>
		</div>
	</div>
</template>
<script>
import indexSearch from '../components/search.vue'
	export default{
		components:{
			indexSearch
		},
		data(){
			return{
				
			}
		},
		methods:{
			goLink(){
				this.$router.push({path:'/index'})
			}
		},
	}
</script>
<style>
	.header{
		width: 100%;
		height: 60px;
		line-height: 60px;
		background: #085eb7;
		.header-main{
			width: 1200px;
			margin: 0 auto;
			text-align: left;
			img{
				vertical-align: middle;
				cursor: pointer;
			}
		}
	}
</style>