import Mock from 'mockjs'
import pageApi from './mockData/pageApi.js'

// Mock.mock('http://localhost:5173/api')

// 正则匹配
Mock.mock(/api\/user\/getBanner/, 'get', pageApi.getBanner)

