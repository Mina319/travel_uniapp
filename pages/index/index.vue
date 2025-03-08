<template>
	<view class="content">
		<up-search placeholder="搜索景点" bg-color="#e3e3e3" v-model="keyword"></up-search>
		<up-swiper v-if="bannerList.length" keyName="image" showTitle="title" :list="bannerList" radius="8" :autoplay="true" height="160"></up-swiper>
	</view>
</template>

<script setup>
	import { getBanner } from '../../api/api.js'
	import { onLoad } from '@dcloudio/uni-app'
	import {
		ref,
		reactive
	} from 'vue'
	
	const keyword = ref('')
	const bannerList = ref([])
	
	onLoad(() => {
		getBanner().then(res => {
			console.log(res, 'res')
			bannerList.value = res.bannerList
		})
	})
</script>

<style lang="scss">
	.content {
		padding: 20px 20px;
	}
</style>
