# 旅游Uniapp
HBuilder

转载B占教程：[https://www.bilibili.com/video/BV1zA9ZYvE1e/](https://www.bilibili.com/video/BV1zA9ZYvE1e/)

# 教程笔记

[uniapp官网](https://uniapp.dcloud.net.cn/)

[小程序IDE下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

[uview-plus](https://uview-plus.jiangruyi.com/)



## 1、三个页面使用 [tabBar](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)

`page.json`中设置`tabbar`

```json
,
	"tarBar": {
		"color": "#7a7e83",
		// 点击后的颜色
		"selectedColor": "#2867ce",
		"borderStyle": "#000",
		"backgroundColor": "#fff",
		// 页面路径
		"list": [
			{
				"pagePath": "page/index/index",	
				"iconPath": "static/tabbar/ly-home01.png",
				"selectedIconPath": "static/tabbar/ly-home.png",
				"text": "首页"
			}, {
				"pagePath": "page/like/like",	
				"iconPath": "static/tabbar/ly-link01.png",
				"selectedIconPath": "static/tabbar/ly-link.png",
				"text": "喜欢"
			}, {
				"pagePath": "page/my/my",	
				"iconPath": "static/tabbar/ly-my01.png",
				"selectedIconPath": "static/tabbar/ly-my.png",
				"text": "我的"
			}
		]
	}
	,
```

## 2、导入uview-plus组件

![image](https://github.com/user-attachments/assets/f8534ec9-f5de-4751-88a6-dba98cc0621e)


### [NPM安装方式配置](https://uview-plus.jiangruyi.com/components/npmSetting.html)

跟着官网手册来配置，安装相关的库。

```
npm init -y
npm install uview-plus dayjs clipboard
```

在`main.js`中导入uviewPlus

```js
// #ifdef VUE3
import { createSSRApp } from 'vue'
import uviewPlus from 'uview-plus'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
// #endif
```

`uni.scss`中

```scss
@import 'uview-plus/theme.scss';
```

### 引入uview-plus基础样式

注意！

在`App.vue`中**首行**的位置引入，注意给style标签加入lang="scss"属性

### 配置manifest

在项目的manifest.json中增加mergeVirtualHostAttributes配置

```text
"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}
```

在`pages.json`中配置

```json
	"easycom": {
		"autoscan": true,
		// 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
		"custom": {
			"^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
			"^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
			"^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue"
			}
		},
```

`index.vue`中

```vue
<template>
	<view class="content">
		<up-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></up-button>
	</view>
</template>
```

![image](https://github.com/user-attachments/assets/5bb1e324-ac40-477f-9ac0-0bb6a9422634)


## 3、接口和http请求封装

v3陪诊接口文档：https://apifox.com/apidoc/shared-8776d148-3d28-42a1-bf4b-c2285ac6e644/api-264486153

[uni.request(OBJECT)](https://uniapp.dcloud.net.cn/api/request/request.html#request)发起网络请求

### API的封装，http请求类

1. 处理公共的请求前和响应后的逻辑
2. 处理公共的参数和请求头

在项目根目录下新建`/api/http.js`，这个文件迎来请求api的

```js
let baseUrl = 'https://apifoxmock.com/m1/4728220-0-default'

export default function http(url, data={}, method = 'GET') {
	// 对外支持链式调用
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header: {
				'token': uni.getStorageSync('token') || ''
			},
			success: res => {
				// http 状态码
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						resolve(res.data.data)
					} else if (res.data.code == 0) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						reject(res.data.msg)
					}
				}
			},
			fail: () => {
				uni.showToast({
					title: '服务器请求异常',
					icon: 'none'
				})
			}
		})
	})
}
```

新建`/api/api.js`

[onLOAD](https://uniapp.dcloud.net.cn/tutorial/page.html#onload)

```js
import http from "./http"

// 首页banner
export const getBanner = () => {
	return http('/user/getBanner')
}
```

在`index.vue`中调用

```vue
<script setup>
	import { getBanner } from '../../api/api.js'
	import { onLoad } from '@dcloudio/uni-app'
	
	onLoad(() => {
		getBanner().then(res => {
			console.log(res, 'res')
		})
	})
</script>
```

![image](https://github.com/user-attachments/assets/09d0e370-d8c2-4d9f-bb99-1e2fe0467b06)


![image](https://github.com/user-attachments/assets/f6425ee3-0c6d-4a21-81ab-0025ae46c507)


## 4、小程序和H5数据mock过程

微信小程序设置mock：当后端接口还没开发好，可以使用mock数据进行模拟

![image](https://github.com/user-attachments/assets/6934af5c-e882-439b-a3e4-2c0eace1fc10)


微信小程序mock数据

```json
{
  "statusCode": 200,
  "data": {
    "code": 1,
    "data": {
      "bannerList": [{
        "image": "http://159.75.169.224:5500/ComfyUI_00006_.png",
        "title": "身无彩凤双飞翼，心有灵犀一点通"
      }, {
        "image": "http://159.75.169.224:5500/ComfyUI_00006_.png",
        "title": "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
      }]
    },
    "msg": ""
  },
  "header": {
    "content-type": "application/json; charset=utf-8"
  }
}
```

代码中配置一下mock，在`api/http.js`中添加：

```js
// 通过环境来判断
if (process.env.NODE_ENV === 'development') {
	baseURL= 'http://localhost:5173/api'
} else {
	baseUrl = 'https://apifoxmock.com/m1/4728220-0-default/api'
}
```

(1)要在浏览器H5端中也能调试，需要配置

安装插件mockjs

```
npm i mockjs
```

将资料中的`mockData`粘贴到api文件夹下，新建`api/mock.js`文件

```js
import Mock from 'mockjs'
import pageApi from './mockData/pageApi.js'

// Mock.mock('http://localhost:5173/api')

// 正则匹配
Mock.mock(/api\/user\/getBanner/, 'get', pageApi.getBanner)
```

在`main.js`中导入

```js
import './api/mock.js'
```

运行在谷歌浏览器打开

![image](https://github.com/user-attachments/assets/05906399-ae70-4b8b-b2d4-826971d3e487)


## 5、首页banner和搜索

(1) 修改首页页面，添加搜索组件

`index.vue`删掉初始样式，

```vue
<template>
	<view class="content">
		
	</view>
</template>

<script setup>
	import { getBanner } from '../../api/api.js'
	import { onLoad } from '@dcloudio/uni-app'
	
	onLoad(() => {
		getBanner().then(res => {
			console.log(res, 'res')
		})
	})
</script>

<style lang="scss">
	.content {
		padding: 20px 20px;
	}
</style>
```

看下[搜索组件](https://uview-plus.jiangruyi.com/components/search.html)

```vue
<template>
	<view class="content">
		<up-search placeholder="搜索景点" bg-color="#e3e3e3" v-model="keyword"></up-search>
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
	
	onLoad(() => {
		getBanner().then(res => {
			console.log(res, 'res')
		})
	})
</script>
```

重启一下，显示正常：

![image](https://github.com/user-attachments/assets/9eb0fae7-374b-44b3-b6ae-f98a7adabd91)


（2）显示[swiper轮播图](https://uview-plus.jiangruyi.com/components/swiper.html)

这里主要需要熟悉`up-swiper`标签的属性：

- 添加v-if，因为bannerList最初的时候是空的，直接渲染会出错，添加v-if判断一下
- keyName：list数组中指定对象的目标属性名
- showTitle：是否显示标题，要求数组对象中有title属性
- list：轮播图数据，见上方"基本使用"说明
- autoplay：是否自动切换

```vue
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
```

修改`htpp.js`，开发环境依旧使用`baseUrl = 'https://apifoxmock.com/m1/4728220-0-default/api'`

```js
// 通过环境来判断
if (process.env.NODE_ENV === 'development') {
	// baseUrl = 'http://localhost:5173/api'
	baseUrl = 'https://apifoxmock.com/m1/4728220-0-default/api'
} else {
	baseUrl = 'https://apifoxmock.com/m1/4728220-0-default/api'
}
```

运行后：

![image](https://github.com/user-attachments/assets/95214d19-bdd2-429a-b2cc-b49e8b351f24)



（3）[NoticeBar](https://uview-plus.jiangruyi.com/components/noticeBar.html)组件










