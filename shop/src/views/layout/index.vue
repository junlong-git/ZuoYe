<template>
	<div class="box">
		<Menu></Menu>
		<div class="box-you">
			<Navbar></Navbar>
			<Content></Content>
		</div>
	</div>
</template>

<script>
	//引入 菜单，头部，主体部分的组件
	import Menu from './components/Menu.vue';
	import Navbar from './components/Navbar.vue';
	import Content from './components/Content.vue';
	
	export default {
		name:'layout',
		components:{
			Menu,
			Navbar,
			Content
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#app {
		.box {
			position: relative;
			width: 100%;
			height: 100%;
			.box-zuo {
				width: 180px;
				height: 100%;
				background: #304156;
				position: fixed;
				top: 0;
				left: 0;
				bottom: 0;
				color: white;
				overflow: hidden;
				text-align: center;
			}
			.box-you {
				clear: both;
				min-height: 100%;
				margin-left: 180px;
				.box-tou {
					height: 50px;
					line-height: 50px;
					background: lightgoldenrodyellow;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-between;
					border-bottom:1px solid #ccc;
				}
				.box-main {
					width: 100%;
					min-height: 100%;
					background: red;
				}
			}
		}
	}
</style>
