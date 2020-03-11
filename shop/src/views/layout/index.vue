<template>
	<div class="box">
		<!-- <menu></menu> -->
		<div class="box-zuo">菜单</div>
		<div class="box-you">
			<!-- <content></content> -->
			<!-- <navbar></navbar> -->
			<div class="box-tou">
				<div class="box-tou-home">首页</div>
				<div class="box-tou-img">图片</div>
			</div>
			<div class="box-main">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	//引入 菜单，头部，主体部分的组件
	// import menu from './layoutzj/menu.vue';
	// import content from './layoutzj/content.vue';
	// import navbar from './layoutzj/navbar.vue';
	// export default {
	// 	name:'layout',
	// 	layoutzj:{
	// 		menu,
	// 		content,
	// 		navbar
	// 	}
	// }
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
