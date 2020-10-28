<template>
	<view class="container">
		<view class="uni-padding-wrap" style="background:#fbfbfb;padding: 10rpx;">
			<view class="uni-title uni-common-mt">
				<text style="color: #007AFF;">{{'漩涡鸣人'}}</text>
				<br>
				<text style="color: #666;">{{'树叶飞舞之处,火亦生生不息,火光会照亮村子,并让新生的树木发芽'}}</text>
			</view>
			<view class="uni-common-mt" style="padding:20rpx;">
				<image src="../../static/image/swiper1.png" 
				mode="widthFix"
				lazy-load="true"
				style="width: 100%;"
				></image>
			</view>			
		</view>		
		
		<view class="uni-padding-wrap" style="background:#fbfbfb;padding: 10rpx;">
			<view class="uni-title uni-common-mt">
				<text style="color: #007AFF;">{{'一品良茗'}}</text>
				<br>
				<text style="color: #666;">{{'一个人的一生应该是这样度过的：当他回首往事的时候，他不会因为虚度年华而悔恨，也不会因为碌碌无为而羞耻；这样，在临死的时候，他就能够说：“我的整个生命和全部精力，都已经献给世界上最壮丽的事业——为人类的解放而斗争'}}</text>
			</view>
			<view class="uni-common-mt" style="padding:20rpx;">
				<image src="../../static/image/swiper3.jpg" 
				mode="widthFix"
				lazy-load="true"
				style="width: 100%;"
				></image>
			</view>			
		</view>		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'rich-text',
				nodes: [{
					name: 'div',
					attrs: {
						class: 'div-class',
						style: 'line-height: 60px; color: red; text-align:center;'
					},
					children: [{
						type: 'text',
						text: 'Hello&nbsp;uni-app!'
					}]
				}],
				strings: '<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>'
			}
		},
		methods: {
			toProduct(id){
				uni.navigateTo({
				    url: 'product/product?id='+id
				});
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	
</style>
