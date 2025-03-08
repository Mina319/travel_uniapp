import http from "./http"

// 首页banner
export const getBanner = () => {
	return http('/user/getBanner')
}