<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
			<view>
				<view class='header'>
					<!-- <image src='../../static/wx_login.png'></image> -->
					<text class='title'>奋进的任某</text>
				</view>
				<view class='content'>
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>
				<button class='bottom' type='primary' open-type="getUserInfo" @getuserinfo="wxGetUserInfo">
					授权登录
				</button>
			</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			wxGetUserInfo(){				
				let that = this
				uni.getProvider({
					service: 'oauth',
					success: function (res) {
						console.log(res.provider)
						if (res.provider == 'weixin') {
							uni.login({
								success: res => {
									var code = res.code;
									console.log(code);
									uni.getUserInfo({
										success: res => {
											console.log(res);
											console.log(that.$store);
											that.$store['userInfo'] = res.userInfo
											uni.setStorage({
											    key: 'userInfo',
											    data: JSON.stringify(res.userInfo),
											    success: function () {
											      uni.switchTab({
											      	url: '../index/index'
											      })
											    }
											});
										}
									})
								}
							})
						}
					}
				});
			}
		},
		onShow() {
			uni.getStorage({
				key: 'userInfo',
				success: function (res) {
					uni.switchTab({
						url:"../index/index"
					})
				},fail: function (err) {
					console.log(err);
				}
			});
		}
	}
</script>

<style>
	.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}
	.title{
		font-size: 20px;color: #007AFF;
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