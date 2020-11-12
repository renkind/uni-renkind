<template>
	<view class="container" style="padding: 20rpx;background:#fbfbfb;">
		<!-- <searchbar></searchbar> -->
		<view class="uni-padding-wrap" v-for="(diary,i) in diaryList" :key="i" style="padding: 10px 0;border-top: 1px solid #d7d7d7;">
			<view class="uni-title uni-common-mt">
				<text style="color: #007AFF;">{{diary.name}}</text>
				<br>
				<text style="color: #666;">{{diary.text}}</text>
			</view>
			<view class="uni-common-mt" style="padding:20rpx;">
				<image v-for="(x,idx) in diary.img"
				v-if="x"
				:key="idx"
				:src="x" 
				mode="widthFix"
				lazy-load="true"
				style="width: 100%;"
				></image>
				<view style="text-align: right;color: #999;font-size: 12px;line-height: 20px;">{{diary.add_time}}</view>
			</view>			
		</view>			
		<navigator class="addDiary"
		:url="'../createDiary/createDiary'"
		>
		+
		</navigator>
	</view>
</template>

<script>
	import searchbar from '../../components/uni-search-bar/uni-search-bar.vue';
	import * as api from '../../api/api';
	export default {
		data() {
			return {
				diaryList:[]
			}
		},
		components:{
			searchbar
		},
		methods: {
			// toAdd(){
			// 	uni.navigateTo({
			// 	    url: 'createDiary'
			// 	});
			// }
		},
		created(){
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
		},
		
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
