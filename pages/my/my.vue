<template>
	<view class="content">
		<view class="topBox">
			
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
		top: 0;
		left: -20%;
		background-color: #00aaff;
		border-radius: 0 0 50% 50%;
	}
}

</style>
