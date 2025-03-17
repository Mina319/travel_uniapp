<template>
	<view class="content">
		<view class="topBox">
			<view class="setBox">
				<view class="set-left">
					<uni-icons type="calendar" size="30" color="#fff"></uni-icons>
					<view class="txt">签到</view>
				</view>
				<view class="set-right">
					<uni-icons type="gear" size="30" color="#fff"></uni-icons>
					<uni-icons type="chat" size="30" color="#fff"></uni-icons>
				</view>
			</view>
			<view class="users" @click="setFun">
				<view class="u-top">
					<template v-if="!userInfo.nickName">
						<image src="../../static/tt.jpg" mode="aspectFill"></image>
						<view class="tit">注册 / 登录</view>
					</template>
					<template v-else>
						<image :src="userInfo.avatarUrl" mode="aspectFill"></image>
						<view class="tit">
							{{ userInfo.nickName }}
						</view>
					</template>
				</view>
				<view class="u-bottom">
					<view class="u-item">
						<view class="num">12</view>
						<view class="u-tit">点赞</view>
					</view>
					<view class="u-item">
						<view class="num">12</view>
						<view class="u-tit">喜欢</view>
					</view>
					<view class="u-item">
						<view class="num">12</view>
						<view class="u-tit">浏览</view>
					</view>
					<view class="u-item">
						<view class="num">12</view>
						<view class="u-tit">收藏</view>
					</view>
				</view>
			
			</view>
			
		</view>
		<view class="listBox">
			
		</view>
		<up-popup closeable :show="show" @close="close" round="20">
			<view class="u-popup">
				<view class="title">获取您的昵称、头像</view>
				<view class="flex">
					<view class="label">获取用户头像：</view>
					<button class="avatar-warpper" @click="onChooseavatar">
						<image class="avatar" :src="userInfo.avatarUrl" mode=""></image>
					</button>
				</view>
				<view class="flex">
					<view class="label">获取用户昵称：</view>
					<input @input="changeName" type="nickname" >{{ userInfo.nickName }}</input>
				</view>	
				<button size="default" type="primary" @click="userSubmit">确定</button>
			</view>
		</up-popup>
	</view>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { onLoad} from '@dcloudio/uni-app'
import { login, getUserInfo } from '../../api/api'

onLoad(async() => {
	// 免登陆逻辑
	if(uni.getStorageSync('token') && !uni.getStorageSync('userInfo')) {
		const { avatarUrl, nickName } = await getUserInfo()
		userInfo.avatarUrl = avatarUrl
		userInfo.nickName = nickName
	} else if(uni.getStorageSync('token') && uni.getStorageSync('userInfo')) {
		const { avatarUrl, nickName } = JSON.parse(uni.getStorageSync('userInfo'))
		userInfo.avatarUrl = avatarUrl
		userInfo.nickName = nickName
	}
})

const userInfo = reactive({
	nickName: '',
	avatarUrl: ''
})

// 控制弹出层的显示
const show = ref(false)

const close = () => {
	// show.value = ref(false)
	show.value = false
}

// 确认按钮-提交
const userSubmit = () => {
	uni.setStorageSync('userInfo', JSON.stringify(userInfo))
	// 关闭弹窗
	// show.value = ref(false)
	show.value = false
}

const onChooseavatar = () => {
	uni.login({
		success: (loginRes) => {
			// 登录成功后获取用户信息
			uni.getUserInfo({
				success: (infoRes) => {
					console.log('用户信息获取成功:', infoRes.userInfo);
					userInfo.avatarUrl = infoRes.userInfo.avatarUrl;
					userInfo.nickName = infoRes.userInfo.nickName;
				},
				fail: (err) => {
					console.error('获取用户信息失败:', err);
				}
			});
		},
		fail: (err) => {
			console.error('登录失败:', err);
		}
	});

}

const changeName = (e) => {
	userInfo.nickName = e.detail.value
}
 
const setFun = () => {
	// 给用户一个确认的提醒
	uni.showModal({
		title: "温馨提示",
		content: "亲，微信授权登录后才能正常使用小程序",
		success(res) {
			if (res.confirm) {
				uni.login({
					success: async (data) => {
						console.log(data)
						const { token } = await login(data.code)
						console.log(token, 'token')
						uni.setStorageSync('token', token)
						// 根据token获取用户信息
						const { avatarUrl, nickName } = await getUserInfo()
						userInfo.avatarUrl = avatarUrl
						userInfo.nickName = nickName
						show.value = true
					}
				})
			}
		}
	});
}

</script>

<style lang="scss" scoped>
.content {
	height: 100vh;
	background-color: #f5f5f5;
	.topBox {
		width: 100%;
		position: relative;
		z-index: 1;
		overflow: hidden;
		padding: 40rpx 20rpx 40rpx;
		box-sizing: border-box;
	}
	.topBox::after {
		content: "";
		width: 140%;
		height: 200px;
		position: absolute;
		z-index: -1;
		top: 0;
		left: -20%;
		background-color: #00aaff;
		border-radius: 0 0 50% 50%;
	}
	.setBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.set-left {
			width: 18%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.txt {
			color: #fff;
			font-size: 30rpx;
		}

	}
	.users {
		margin-top: 35rpx;
		padding: 30rpx;
		box-sizing: border-box;
		height: 280rpx;
		background-color: #fff;
		box-shadow: 1px 10rpx 20rpx #ececec;
		border-radius: 16rpx;
		.u-top {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 30rpx;
		}
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		.tit {
			font-size: 30rpx;
			font-weight: 700;
			color: #333;
		}
		.u-bottom {
			display: flex;
			justify-content: space-around;
			align-items: center;
			.u-item {
				text-align: center;
				.u-tit {
					color: #757575;
					font-size: 26rpx;
					margin-top: 10rpx;
				}
				.num {
					color: #000;
					font-size: 33rpx;
					font-weight: 700;
				}
			}
		}
	}
	.u-popup {
		padding: 20rpx;
		border-radius: 20rpx 20rpx 0 0;
		.title {
			font-size: 40rpx;
			margin-bottom: 20rpx;
			text-align: center;
		}
		.flex {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid #f5f5f5;
			padding: 24rpx 0;
		}
		image {
			width: 70rpx;
			height: 70rpx;
		}
		.avatar-warpper {
			border: none;
			border-radius: 10rpx;
			width: 70rpx;
			height: 70rpx;
			margin-left: 20rpx;
			padding: 0;
		}
		
	}
}

</style>
