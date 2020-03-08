<template>
	<div>
		<div class="tohead">
			厦门
			<input accept="text" />
		</div>
		
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in swiperArr" :key='index'>
					<img :src="item.adlist_img" :alt="item.adtitle" />
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			<!-- 如果需要导航按钮 -->
			<div class=".swiper-button-prev"></div>
			<div class=".swiper-button-next"></div>
		</div>
		
		<!-- 导航图标 -->
		<div class="iconCon">
			<ul>
				<li v-for="(item,index) in iconArr" :key="index">
					<div>
						<img :src="require('../assets/icon/'+ (index + 1)+'.png')"/>
					</div>
					<div>
						{{item.CategoryName}}
					</div>
				</li>
			</ul>
		</div>
		
		
		<!-- 精选 -->
		<div class="jingxuanCon">
			<h3>为你精选</h3>
			<ul>
				<li v-for="(item,index) in jingxuanArr" :key='index'>
					<div> <img :src="item.pro_img[0].url" :alt="item.pro_name" /> </div>
					<div class="jingxuanname">{{item.pro_name}}</div>
					<div class="jingxuanchangjia">{{item.pro_Joiner}}已参加</div>
				</li>
			</ul>
		</div>
		
		<!-- top5-->
		<div class="top5Con">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="top5list">
				<li v-for="(item,index) in top5Arr" :key="index">
					<router-link :to="'/item/' + index.pro_id">
						<div class="top5_img">
							<img :src="item.pro_img[0].url" />
						</div>
						<div class="top5_text">
							<div>{{item.pro_name}}</div>
							<div>{{item.pro_Joiner}}人已参加</div>
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
	//引入 swiper
	import Swiper from 'swiper';
	//引入 siwper 的 scss 文件
	import 'swiper/dist/css/swiper.css';
	
	
	export default {
		name:'Page',
		data:function(){
			return {
				top5Arr:[],
				swiperArr:[],
				jingxuanArr:[],
				iconArr:[]
			}
		},
		//挂载的函数
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
					console.log(res);
					//top5数据
					this.top5Arr = res.data.data.CourseTop5;
					//轮播数据
					this.swiperArr = res.data.data.top_ad.list;
					this.jingxuanArr = res.data.data.CourseforYou;
					this.iconArr = res.data.data.iconList;
			})
			
			var mySwiper = new Swiper ('.swiper-container',{
				loop: true,
				autoplay:2000,
				speed:1000,
				observer:true,
				observeParents:true,
				
				//如果需要分页器
				pagination: '.swiper-pagination',
				
				//如果需要前进后退按钮
				nextButton:'.swiper-button-next',
				prevButton:'.swiper-button-prev',
				
			})
		},
}
	
</script>

<style scoped="scoped" lang="scss">
	//头部样式
	.tohead {
		width: 100%;
		height: 44px;
		background: blue;
		
		//
		color: white;
		font-size: 16px;
		line-height: 44px;
		
		input {
			width: 280px;
			height: 25px;
			margin-left: 25px;
			border-radius: 5px;
		}
	}
	
	// 轮播图样式
	.swiper-container {
		border-bottom: #f5f5f5 solid 10px;
		height: 170px;
		.swiper-wrapper {
			.swiper-slide {
				img {
					width: 100%;
					height: 170px;
				}
			}
		}
	}
	
	// 导航图标
	.iconCon{
		ul {
			height: 170px;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-around;
			border-bottom: #f5f5f5 solid 10px;
			li {
				width: 40px;
				height: 40px;
				margin: 16px;
				text-align: center;
				img {
					width: 100%;
					height: 100%;
				}
				div {
					font-size: 12px;
				}
			}
		}
	}
	
	//为你精选样式
	.jingxuanCon {
		border-bottom: #f5f5f5 solid 10px;
		h3 {
			padding: 20px;
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-around;
			height: 340px;
			li {
				width: 40%;
				height: 140px;
				.jingxuanname {
					font-weight: bold;
				}
				.jingxuanchangjia {
					color: #ccc;
					font-size: 12px;
				}
				div {
					img {
						width: 100%;
						height: 110px;
						border-radius: 5px;
					}
				}
			}
		}
	}
	
	// top5 样式
	.top5Con {
		width: 90%;
		height: 400px;
		background: #004b9e;
		border-radius: 10px;
		margin: auto;
		margin-top: 20px;
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
