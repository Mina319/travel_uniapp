export default {
	getBanner: () => {
		return {
			code: 1,
			data: {
				bannerList: [{
						image: 'https://bpic.51yuansu.com/backgd/cover/00/06/69/5b684f270f79a.jpg?x-oss-process=image/resize,h_300,m_lfit/sharpen,100',
						title: '身无彩凤双飞翼，心有灵犀一点通',
					},
					{
						image: 'https://img.yipic.cn/thumb/2ffb7e72/e5b68a08/eb5d7bc4/e3a15e30/big_2ffb7e72e5b68a08eb5d7bc4e3a15e30.png?x-oss-process=image/format,webp/sharpen,100',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
					},
				]
			},
			msg: ''
		}
	},
	getHomeList: () => {
		return {
			code: 1,
			data: [{
					id: 1,
					title: '天坛公园',
					img: '/static/tt.jpg',
					tag: ['著名', '名胜古迹'],
					isDot: '推荐',
					dot: true,
					introduce: '天坛公园（Temple of Heaven），原名“天地坛”，位于北京市东城区天坛内东里7号，始建于明永乐十八年（1420年），明嘉靖九年（1530年）改名为“天坛”，是明清两代皇帝“祭天”“祈谷”的场所，总面积273公顷，是中国现存最大的古代祭祀性建筑群。民国七年（1918年）1月1日，辟为天坛公园，对外开放',
					times: '每周一到周五9:00 -- 18:00开放',
					isPlay: false, // 是否有游玩项目
					address: ['116.410886', '39.881949']
				},
				{
					id: 2,
					title: '北京故宫',
					img: '/static/gg.jpeg',
					tag: ['著名', '名胜古迹'],
					isDot: '推荐',
					dot: false,
					introduce: '北京故宫（The Imperial Palace）是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。故宫以三大殿为中心，占地面积约72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，相传故宫一共有9999.5间，实际据1973年专家现场测量故宫有房间8707间',
					times: '每周一到周五9:00 -- 18:00开放',
				},
				{
					id: 3,
					title: '四川九寨沟',
					img: '/static/jzg.jpeg',
					tag: ['著名', '名胜古迹'],
					isDot: '推荐',
					dot: false,
					introduce: '九寨沟国家自然保护区是岷山山系大熊猫A种群的核心地和走廊带，具有典型的自然生态系统，为全国生物多样性保护的核心之一。动植物资源丰富，具有较高的生态保护、科学研究和美学旅游价值。',
					times: '每周一到周五9:00 -- 18:00开放',
				},
				{
					id: 4,
					title: '西安兵马俑',
					img: '/static/bmy.jpeg',
					tag: ['著名', '名胜古迹'],
					isDot: '推荐',
					dot: true,
					introduce: '兵马俑，即秦始皇陵兵马俑，亦简称秦兵马俑或秦俑，是第一批全国重点文物保护单位、第一批中国世界遗产，位于今陕西省西安市临潼区秦始皇陵以东1.5千米处的兵马俑坑内。先后有200多位外国元首和政府首脑参观访问，成为中国古代辉煌文明的一张金字名片，又被誉为世界十大古墓稀世珍宝之一。',
					times: '每周一到周五9:00 -- 18:00开放',
				},
				{
					id: 5,
					title: '大唐不夜城',
					img: '/static/ddbyc.jpg',
					tag: ['著名', '名胜古迹'],
					isDot: '推荐',
					dot: false,
					introduce: '大唐不夜城步行街，位于陕西省西安市雁塔区的大雁塔脚下，始建于2002年8月，北起大雁塔北广场，南至开元广场，东起慈恩东路，西至慈恩西路，街区南北长2100米，东西宽500米，总建筑面积65万平方米，是全国唯一一个以盛唐文化为背景的大型仿唐建筑群步行街，为西安地标性景区。',
					times: '全天开放',
				},
				{
					id: 6,
					title: '黄山',
					img: '/static/hs.jpeg',
					tag: ['著名', '名胜古迹'],
					isDot: '推荐',
					dot: false,
					introduce: '黄山，古称黟山，位于安徽省黄山市境内，地处安徽省南部、黄山市北部，地跨歙县、休宁县、黟县和黄山区、徽州区，东起黄狮岭，西至小岭脚，北始二龙桥，南达汤口镇，地跨东经118°01′至118°17′、北纬30°01′至30°18′，山境南北长约40千米，东西宽约30千米',
					times: '每周一到周五9:00 -- 18:00开放',
				},
				{
					id: 7,
					title: '杭州西湖',
					img: '/static/xh.jpg',
					tag: ['著名', '名胜古迹'],
					isDot: '推荐',
					dot: false,
					introduce: '西湖，又名钱塘湖，位于中国浙江省杭州市西湖区龙井路1号，杭州市区西部，汇水面积为21.22平方千米，湖面面积为6.38平方千米，为江南三大名湖之一',
					times: '全天开放',
				}
			],
			msg: ''
		}
	}
}