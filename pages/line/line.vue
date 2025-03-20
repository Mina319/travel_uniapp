<template>
	<view class="line">
		<view class="mapBox">
			<!-- <map v-if="detailInfo.id" style="width: 100%; height: 1200rpx;background-color: red;" :markers="detailInfo.markers" :latitude="detailInfo.location[0]" :longitude="detailInfo.location[1]" :show-scale="true"></map> -->
			<map v-if="detailInfo.id" 
				 style="width:100%; height: 900rpx;"
				 :markers="detailInfo.markers"
				 :latitude="detailInfo.location[0]"
				 :longitude="detailInfo.location[1]"
				 :show-scale="true"
				 >
			</map>
		</view>
		<view class="infos">
			<view class="tit">
				当前游玩项目： {{ detailInfo.title }}
			</view>
			<view class="stars">
				<text>项目推荐</text>
				<up-rate :count="count" v-model="detailInfo.count"></up-rate>
			</view>
			<view class="scroll-view">
				<up-scroll-list
					:indicator="true"
					indicatorColor="#fff0f0"
					indicatorActiveColor="#f56c6c">
					<view class="items" v-for="(item, index) in detailInfo.other" :key="item.id">
						<image class="img" :src="item.url" mode="aspectFill"></image>
						<view class="title">{{ item.name }}</view>
					</view>
				</up-scroll-list>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { projectInfo } from '../../api/api.js'
	import { ref, reactive } from 'vue'
	
	
	onLoad((props) => {
	    console.log('收到的 props:', props)  // 打印 props 确保 id 正确传递
	
	    projectInfo({ id: props.id })
	        .then((data) => {
	            // console.log("接口返回的完整数据：", data);
	            if (data) {
	                console.log("返回的数据结构：", data)
					detailInfo.value = data  // 这里赋值的是 data
					// console.log("data.location：", data.location);
					// console.log("detailInfo.value.location：", detailInfo.value.location);
					// console.log("detailInfo.location：", detailInfo.location);
	            } else {
	                console.error("返回的数据结构不完整")
	            }
	        })
	        .catch((error) => {
	            console.error("请求失败，错误信息：", error.message || error)
	        })
	})
	
	
	const detailInfo = ref({})
	
	const count = ref(5)


	
</script>

<style lang="scss">
.infos {
	padding: 20rpx;
	box-sizing: border-box;
	.tit {
		font-size: 34rpx;
		font-weight: 600;
		color: #333;
	}
	.stars {
		font-size: 28rpx;
		margin: 20rpx 0 40rpx;
		display: flex;
	}
	.items {
		margin-right: 20rpx;
		text-align: center;
	}
	.img {
		width: 320rpx;
		height: 200rpx;
		border-radius: 14rpx;
	}
	.title {
		font-size: 28rpx;
		font-weight: 600;
		color: #333;
	}
}

</style>
