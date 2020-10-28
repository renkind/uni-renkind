<template>
	<view class="container">
		<view>产品</view>
		<view>
			<swiper
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000" 
			:duration="800"
			>
				<swiper-item >
					<view class="swiper-item" >
						<image 
						src="../../static/image/swiper1.png" 
						mode="aspectFill"
						style="width: 100%;"
						>
						</image>
					</view>
				</swiper-item>
				<swiper-item >
					<view class="swiper-item">
						<image 
						src="../../static/image/swiper2.png" 
						mode="aspectFill"
						style="width: 100%;"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
	
	
	<!-- <navigator :url="'/pages/product/product'">产品</navigator>
	<navigator :url="'/pages/me/me'">我的</navigator>
</template>

<script>
	export default {
		data() {
				return {
					
				}
		},
		methods: {
			
		},
		onLoad: function (option) {
			const item = JSON.parse(decodeURIComponent(option.id));
			console.log(item)
		}
	}
</script>

<style>
</style>
