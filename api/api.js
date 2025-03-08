import http from "./http"

// 首页banner
export const getBanner = () => {
	return http('/user/getBanner')
}

// 首页列表
export const getHomeList = () => {
	return http('/user/getHomeList')
}