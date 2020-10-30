<template>
	<view class="container" style="padding: 10rpx;">
		<view class="uni-padding-wrap" v-for="(diary,i) in diaryList" :key="i" style="background:#fbfbfb;padding: 10rpx;margin-bottom: 10px;">
			<view class="uni-title uni-common-mt">
				<text style="color: #007AFF;">{{diary.name}}</text>
				<br>
				<text style="color: #666;">{{diary.text}}</text>
			</view>
			<view class="uni-common-mt" style="padding:20rpx;">
				<image v-for="(x,idx) in diary.img"
				:key="idx"
				:src="x" 
				mode="widthFix"
				lazy-load="true"
				style="width: 100%;"
				></image>
			</view>			
		</view>			
		<navigator class="addDiary"
		:url="'../createDiary/createDiary'"
		@click="toAdd">
		+
		</navigator>
	</view>
</template>

<script>
	import * as api from '../../api/api';
	export default {
		data() {
			return {
				diaryList:[]
			}
		},
		methods: {
			// toAdd(){
			// 	uni.navigateTo({
			// 	    url: 'createDiary'
			// 	});
			// }
		},
		created(){
			// uniCloud.callFunction({
			// 	name: 'createDiary',
			// 	data: {
			// 		"name": "新增日志",
			// 		"text": "内容",
			// 		"img": [
			// 			"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-babx49wzzgon92b8e7/e9885e50-182f-11eb-9dfb-6da8e309e0d8.jpg"
			// 		]
			// 	}
			// }).then(res=>{
			// 	console.log(res)
			// 	this.diaryList = res.result.data
			// })
			uniCloud.callFunction({
				name: 'getDiary',
				data: {limit:10,offset:0}
			}).then(res=>{
				console.log(res)
				this.diaryList = res.result.data
			})
			// api.getProject({limit:10,offset:0}).then(res => {
			// 	console.log(res)
			// });
		}
	}
</script>

<style scoped>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.addDiary{
		position: fixed;right: 20px;bottom: 70px;width: 40px;height: 40px;border-radius: 50%;
		background-color: #007AFF;color: #ffffff;font-size: 20px;line-height: 40px;text-align: center;
	}
</style>
