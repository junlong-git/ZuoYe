<template>
	<div>
		<h2>首页</h2>
		<div class="top5Con">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="top5list">
				<li v-for="(item,index) in top5Arr" :key="index">
					<router-link :to="'/Page' + index.pro-id">
						<div class="top5_img">
							<img :src="item.pro_img[0].url" />
						</div>
						<div class="top5_text">
							<div>{{item.pro_name}}</div>
							<div>{{item.pro_joiner}}人已参加</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//引入 axios
	import axios from 'axios';
	
	export default {
		name:'Page',
		data:function(){
			return {
				top5Arr:[]
			}
		},
		//挂载的函数
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
					console.log(res);
					//top5数据
					this.top5Arr = res.data.data.CourseTop5;
					//轮播数据
					// this.swiperArr = res.data.data.top_ad.list;
					// this.jingxuanArr = res.data.data.CourseforYou;
					// this.iconArr = res.data.data.iconList;
				})
			},
	}
	
</script>

<style scoped="scoped" lang="scss">
	/* top5 样式 */
	.top5Con {
		width: 90%;
		height: 400px;
		background: #004b9e;
		border-radius: 10px;
		margin: auto;
	}
	.top5Con h2 {
		color: #fff;
		padding: 20px;
	}
	.top5list {
		background: #fff;
		margin: 10px;
		height: 300px;
		border-radius: 10px;
	}
	.top5list li a {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 60px;
		padding: 6px;
		border-bottom: 1px solid #ddd;
	}
	.top5list li a .top5_img {
		width: 30%;
	}
	.top5list li a .top5_img img {
		width: 80%;
		height: 50px;
	}
	.top5list li a .top5_text {
		width: 70%;
	}
</style>
