<template>
	<notice text="版本1.0.0"></notice>
	<image :src="" mode=""></image>
</template>

<script>
	import notice from '../../components/uni-notice-bar/uni-notice-bar.vue'
	
	export default {
		components: {
			notice
		},
		data() {
			return {
				userInfo:{}
			};
		},
		methods: {
			
		},
		mounted() {
			console.log(this)
			if(this.$store.userInfo){
				this.userInfo = {
					avatarUrl:this.$store.userInfo.avatarUrl,
					nickName:this.$store.userInfo.nickName,
					gender:this.$store.userInfo.gender=='1'?'男':'女'
				}
			}else{
				uni.getStorage({
					key: 'userInfo',
					success: function (res) {
						this.$store.userInfo = res.data
						this.userInfo = {
							avatarUrl:this.$store.userInfo.avatarUrl,
							nickName:this.$store.userInfo.nickName,
							gender:this.$store.userInfo.gender=='1'?'男':'女'
						}
					},fail: function (err) {
						uni.redirectTo({
							url:"../login/login"
						})
					}
				});
				
			}
		}
	}
</script>

<style>
	.confirmModal{
		position: fixed;
		left: 50%;
		top: 50%;
		width: 80%;
		height:30%;
		margin-left: -40%;
		margin-left: -15%;
	}
	.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}
	
	.header image {
		width: 200rpx;
		height: 200rpx;
	}
	
	.content {
		margin-left: 50rpx;
		margin-bottom: 90rpx;
	}
	
	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40rpx;
	}
	
	.bottom {
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;
	}
</style>
