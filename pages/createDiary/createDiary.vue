<template>
	<view class="container" style="background: #fbfbfb;">
		<view class="content">
			<view >
				<input type="text" style="padding: 5px 3px;margin-bottom: 10px;background: #fff;"
				placeholder-style="color:#888;"  
				placeholder="起个好听的昵称吧" 
				v-model="contentName" />
			</view>
			<view class="uni-textarea" style="background: #fbfbfb;">
					<textarea auto-height style="background: #fff;min-height: 100px;padding: 3px;width: auto;"
					placeholder-style="color:#888" 
					placeholder="从这里开始分享"
					v-model="contentText"/>
			</view>
			<text @click="uploadImg" class="uploadBtn">上传图片+</text>
		</view>
		<image :src="contentImg" 
		mode="aspectFill" 
		style="width: 50%;margin-left: 20px;position: relative;top: -30px;" >
		</image>
		<button type="default" 
		@click="publish" 
		class="publishBtn"
		:loading="is_loading"
		:disabled="is_loading">发布</button>
		
		<!-- 对话框 -->
		<uni-popup id="popupDialog" ref="popupDialog" type="dialog" >
			<uni-popup-dialog type="warn" title="提示" :content="popupContent" :before-close="true" @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		
	</view>
	
	
</template>

<script>
	import {isEmpty,dateFormat } from '../../util/util';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	
	export default {
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		},
		data() {
				return {
					contentImg:'',
					contentName:'',
					contentText:'',
					popupContent:'',
					is_loading:false,
				}
		},
		methods: {
			uploadImg(){
				let that = this
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							let filePath = res.tempFilePaths[0]
							//进行上传操作		
							// promise方式
							const result =  uniCloud.uploadFile({
								filePath: filePath,
								cloudPath: res.tempFiles[0].name,
								fileType: 'image',
								onUploadProgress: function(progressEvent) {
									console.log(progressEvent);
									var percentCompleted = Math.round(
										(progressEvent.loaded * 100) / progressEvent.total
									);
								}
							}).then((res)=>{
								console.log(res)
								that.contentImg = res.fileID
							});		
						}
					}
				});
			},
			publish(){
				this.is_loading = true
				if(isEmpty(this.contentName) || isEmpty(this.contentText)){
					this.popupContent = '昵称和内容不能为空哦'
					this.$refs.popupDialog.open()
					return;
				}
				uniCloud.callFunction({
					name: 'createDiary',
					data: {
						name: this.contentName,
						text: this.contentText,
						img: [this.contentImg],
						add_time: dateFormat(new Date())
					}
				}).then(res=>{
					console.log(res)
					setTimeout(function(){
						this.is_loading = false
						uni.switchTab({
						    url: '../index/index'
						});
					},4000)
				},err=>{
					this.is_loading = false
					alert(err.error.message)
				})
			},
			/**
			 * 对话框取消按钮
			 */
			dialogClose(done) {
				console.log('取消')
				// 需要执行 done 才能关闭对话框
				done()
			},
			/**
			 * 对话框确认按钮
			 */
			dialogConfirm(done) {
				console.log('确认')
				// 需要执行 done 才能关闭对话框
				done()
			},
		},
		mounted() {
			// uni.navigateBack({
			//     url: '../index/index'
			// });
		}
	}
</script>

<style>
	.content{
		background: #fbfbfb;min-height: 150px;padding: 10px 20px 40px 20px;position: relative;
	}
	.uploadBtn{
		background-color: #007AFF;color: #fff;padding: 5px 10px;border-radius: 6px;position: absolute;
		right: 0;bottom: 1px;
	}
	.publishBtn{
		background: #007AFF;color: #fff;margin-top: 20px;position: fixed;bottom: 0;left: 0;width: 100%;
	}
</style>
