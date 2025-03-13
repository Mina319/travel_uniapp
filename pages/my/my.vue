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
		</view>
		<view class="listBox">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
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
}

</style>
