import http from "./http"

// 首页banner
export const getBanner = () => {
	return http('/user/getBanner')
}

// 首页列表
export const getHomeList = () => {
	return http('/user/getHomeList')
}

// 登录
export const login = (code) => {
	return http('/login', { code }, 'POST')
}

// 获取用户信息
export const getUserInfo = () => {
	return http('/getUserInfo')
}

// 游玩项目
export const detailProject = () => {
	return http('/detail/project')
}

// 项目详情
export const projectInfo = (data) => {
	return http('/project/info', data)
}