<template>
	<div class="box">
		<div class="box-zuo">左侧</div>
		<div class="box-you">
			<div class="box-tou">上</div>
			<div class="box-botton">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
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
				.box-you {
					clear: both;
					min-height: 100%;
					margin-left: 180px;
					.box-tou {
						height: 50px;
						background: lightgoldenrodyellow;
						line-height: 50px;
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: space-between;
						border-bottom:1px solid #ccc;
					}
					.box-botton {
						width: 100%;
						min-height: 100%;
						background: red;
					}
				}
			}
		}
	}
</style>
