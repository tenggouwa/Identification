<template>
	<div class="main">
		<index-header></index-header>
		<div class="main-main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	
import indexHeader from '../components/header.vue'
export default{
	components:{
		indexHeader
	},
	data(){
		return{

		}
	}
}
</script>
<style>
	.main{
		.main-main{
			padding-top: 40px;
		}
	}
</style>