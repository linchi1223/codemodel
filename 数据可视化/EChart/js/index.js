(function () {
	let infotext = [
		{
			year: '2019',
			data: [[5, 420, 36, 110, 10, 20], [25, 20, 136, 10, 40, 220]]
		}, {
			year: '2020',
			data: [[15, 420, 236, 110, 10, 20], [125, 320, 136, 10, 340, 220]]
		}
	];
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.querySelector('.chartbar'));
	// 指定图表的配置项和数据
	var option = {
		title: {
			// text: 'ECharts 入门示例'
		},
		color: 'white',
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			}
		},
		legend: {
			// 顶端颜色
			textStyle: {
				color: "white"
			},
			data: ['销量', '需求']
		},
		xAxis: {
			axisLabel: { color: ['white'] },
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		},

		yAxis: {
			axisLabel: { color: ['white'] },
		},
		series: [{
			color: ['#3398d8'],
			name: '销量',
			type: 'bar',
			barWidth: '40%',
			itemStyle: {
				barBorderRadius: 2
			},
			data: infotext[0].data[0]
		}, {
			name: '需求',
			color: ['#dd42eb'],
			type: 'line',
			// 圆滑 true
			smooth: true,
			data: infotext[0].data[1]
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	//图表自适应
	window.addEventListener("resize", function () {
		myChart.resize();
	});


	$('.firstpanel .nian').toggle("click", function () {
		// console.log(infotext[$(this).index()]);

		if ($(this).hasClass("textcolor")) {
			$(this).removeClass("textcolor");
		}
		else {
			$(".firstpanel .nian").each(function () {
				$(this).removeClass("textcolor");
			})
			$(this).addClass("textcolor");
		}

		var obj = infotext[$(this).index()];
		option.series[0].data = obj.data[0];
		option.series[1].data = obj.data[1];
		myChart.setOption(option)
	});
})();
(function () {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.querySelector('.chartbars'));
	// 指定图表的配置项和数据

	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			// 文字颜色
			textStyle: {
				color: "white"
			},
			data: ['直接访问', '视频广告', '搜索引擎']
		},
		// grid: {
		// 	left: '3%',
		// 	right: '4%',
		// 	bottom: '3%',
		// 	containLabel: true
		// },
		xAxis: {
			type: 'value',
			show: false
		},
		yAxis: {
			type: 'category',
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			axisLine: {
				show: false
			},
			axisLabel: {
				color: "#fff"
			}
		},
		series: [
			{
				name: '直接访问',
				type: 'bar',
				stack: '总量',
				label: {
					show: true,
					position: 'insideRight'
				},
				data: [320, 302, 301, 334, 390, 330, 320]
			},

			{
				name: '视频广告',
				type: 'bar',
				stack: '总量',
				label: {
					show: true,
					position: 'insideRight'
				},
				data: [150, 212, 201, 154, 190, 330, 410]
			},
			{
				name: '搜索引擎',
				type: 'bar',
				stack: '总量',
				label: {
					show: true,
					position: 'insideRight'
				},
				data: [820, 832, 901, 934, 1290, 1330, 1320]
			}
		]
	};
	// 使用刚指定的配置项和数据显示图表。

	myChart.setOption(option);
	//图表自适应
	window.addEventListener("resize", function () {
		myChart.resize();

	});
})();


(function () {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.querySelector(".chartlines"));

	var data = [70, 34, 60, 78, 69];
	var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
	var valdata = [702, 350, 610, 793, 664];
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	option = {
		//图标位置
		grid: {
			top: "0%",
			left: "22%",
			// bottom: "10%"
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				show: true,
				data: titlename,
				inverse: true,
				axisLine: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#fff",

					rich: {
						lg: {
							backgroundColor: "#339911",
							color: "#fff",
							borderRadius: 15,
							// padding: 5,
							align: "center",
							width: 15,
							height: 15
						}
					}
				}
			},
			{
				show: true,
				inverse: true,
				data: valdata,
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: "#fff"
					}
				}
			}
		],
		series: [
			{
				name: "条",
				type: "bar",
				yAxisIndex: 0,
				data: data,
				barCategoryGap: 50,
				barWidth: 10,
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						color: function (params) {
							var num = myColor.length;
							return myColor[params.dataIndex % num];
						}
					}
				},
				label: {
					normal: {
						show: true,
						position: "inside",
						formatter: "{c}%"
					}
				}
			},
			{
				name: "框",
				type: "bar",
				yAxisIndex: 1,
				barCategoryGap: 50,
				data: [100, 100, 100, 100, 100],
				barWidth: 15,
				itemStyle: {
					normal: {
						color: "none",
						borderColor: "#00c1de",
						borderWidth: 3,
						barBorderRadius: 15
					}
				}
			}
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	window.addEventListener("resize", function () {
		myChart.resize();
	});
})();





// 地图使用
(function () {
	var myChart = echarts.init(document.querySelector('.chartmap'));
	//地图样式China.js要先引入

	var geoCoordMap = {
		'新疆玛纳斯基地': [86.22, 44.30],
		'九江': [116.00, 29.70],
		'新乡': [116.402217, 35.311657],
		' ': [79.92, 37.12],
		'  ': [86.85, 47.70],
		'若羌县': [88.17, 39.02],
		'上海': [121.4648, 31.2891],
		'东莞': [113.8953, 22.901],
		'东营': [118.7073, 37.5513],
		'中山': [113.4229, 22.478],
		'临汾': [111.4783, 36.1615],
		'临沂': [118.3118, 35.2936],
		'丹东': [124.541, 40.4242],
		'丽水': [119.5642, 28.1854],
		'乌鲁木齐': [87.9236, 43.5883],
		'佛山': [112.8955, 23.1097],
		'保定': [115.0488, 39.0948],
		'兰州': [103.5901, 36.3043],
		'包头': [110.3467, 41.4899],
		'北京': [116.4551, 40.2539],
		'北海': [109.314, 21.6211],
		'南京': [118.8062, 31.9208],
		'南宁': [108.479, 23.1152],
		'南昌': [116.0046, 28.6633],
		'南通': [121.1023, 32.1625],
		'厦门': [118.1689, 24.6478],
		'台州': [121.1353, 28.6688],
		'合肥': [117.29, 32.0581],
		'呼和浩特': [111.4124, 40.4901],
		'咸阳': [108.4131, 34.8706],
		'哈尔滨': [127.9688, 45.368],
		'唐山': [118.4766, 39.6826],
		'嘉兴': [120.9155, 30.6354],
		'大同': [113.7854, 39.8035],
		'大连': [122.2229, 39.4409],
		'天津': [117.4219, 39.4189],
		'太原': [112.3352, 37.9413],
		'威海': [121.9482, 37.1393],
		'宁波': [121.5967, 29.6466],
		'宝鸡': [107.1826, 34.3433],
		'宿迁': [118.5535, 33.7775],
		'常州': [119.4543, 31.5582],
		'广州': [113.5107, 23.2196],
		'廊坊': [116.521, 39.0509],
		'延安': [109.1052, 36.4252],
		'张家口': [115.1477, 40.8527],
		'徐州': [117.5208, 34.3268],
		'德州': [116.6858, 37.2107],
		'惠州': [114.6204, 23.1647],
		'成都': [103.9526, 30.7617],
		'扬州': [119.4653, 32.8162],
		'承德': [117.5757, 41.4075],
		'拉萨': [91.1865, 30.1465],
		'无锡': [120.3442, 31.5527],
		'日照': [119.2786, 35.5023],
		'昆明': [102.9199, 25.4663],
		'杭州': [119.5313, 29.8773],
		'枣庄': [117.323, 34.8926],
		'柳州': [109.3799, 24.9774],
		'株洲': [113.5327, 27.0319],
		'武汉': [114.3896, 30.6628],
		'汕头': [117.1692, 23.3405],
		'江门': [112.6318, 22.1484],
		'沈阳': [123.1238, 42.1216],
		'沧州': [116.8286, 38.2104],
		'河源': [114.917, 23.9722],
		'泉州': [118.3228, 25.1147],
		'泰安': [117.0264, 36.0516],
		'泰州': [120.0586, 32.5525],
		'济南': [117.1582, 36.8701],
		'济宁': [116.8286, 35.3375],
		'海口': [110.3893, 19.8516],
		'淄博': [118.0371, 36.6064],
		'淮安': [118.927, 33.4039],
		'深圳': [114.5435, 22.5439],
		'清远': [112.9175, 24.3292],
		'温州': [120.498, 27.8119],
		'渭南': [109.7864, 35.0299],
		'湖州': [119.8608, 30.7782],
		'湘潭': [112.5439, 27.7075],
		'滨州': [117.8174, 37.4963],
		'潍坊': [119.0918, 36.524],
		'烟台': [120.7397, 37.5128],
		'玉溪': [101.9312, 23.8898],
		'珠海': [113.7305, 22.1155],
		'盐城': [120.2234, 33.5577],
		'盘锦': [121.9482, 41.0449],
		'石家庄': [114.4995, 38.1006],
		'福州': [119.4543, 25.9222],
		'秦皇岛': [119.2126, 40.0232],
		'绍兴': [120.564, 29.7565],
		'聊城': [115.9167, 36.4032],
		'肇庆': [112.1265, 23.5822],
		'舟山': [122.2559, 30.2234],
		'苏州': [120.6519, 31.3989],
		'莱芜': [117.6526, 36.2714],
		'菏泽': [115.6201, 35.2057],
		'营口': [122.4316, 40.4297],
		'葫芦岛': [120.1575, 40.578],
		'衡水': [115.8838, 37.7161],
		'衢州': [118.6853, 28.8666],
		'西宁': [101.4038, 36.8207],
		'西安': [109.1162, 34.2004],
		'贵阳': [106.6992, 26.7682],
		'连云港': [119.1248, 34.552],
		'邢台': [114.8071, 37.2821],
		'邯郸': [114.4775, 36.535],
		'郑州': [113.4668, 34.6234],
		'鄂尔多斯': [108.9734, 39.2487],
		'重庆': [107.7539, 30.1904],
		'金华': [120.0037, 29.1028],
		'铜川': [109.0393, 35.1947],
		'银川': [106.3586, 38.1775],
		'镇江': [119.4763, 31.9702],
		'长春': [125.8154, 44.2584],
		'长沙': [113.0823, 28.2568],
		'长治': [112.8625, 36.4746],
		'阳泉': [113.4778, 38.0951],
		'青岛': [120.4651, 36.3373],
		'韶关': [113.7964, 24.7028]
	};

	var BJData = [
		[{
			name: '新乡'
		}, {
			name: '新乡',
			value: 200
		}],
		[{
			name: '新乡'
		}, {
			name: '呼和浩特',
			value: 90
		}],
		[{
			name: '新乡'
		}, {
			name: '哈尔滨',
			value: 90
		}],
		[{
			name: '新乡'
		}, {
			name: '石家庄',
			value: 90
		}],
		[{
			name: '新乡'
		}, {
			name: '昆明',
			value: 30
		}],
		[{
			name: '新乡'
		}, {
			name: '北京',
			value: 100
		}],
		[{
			name: '新乡'
		}, {
			name: '长春',
			value: 40
		}],
		[{
			name: '新乡'
		}, {
			name: '重庆',
			value: 40
		}],
		[{
			name: '新乡'
		}, {
			name: '贵阳',
			value: 50
		}],
		[{
			name: '新乡'
		}, {
			name: '南宁',
			value: 30
		}],
		[{
			name: '新乡'
		}, {
			name: '济南',
			value: 10
		}],
		[{
			name: '新乡'
		}, {
			name: '太原',
			value: 40
		}],
		[{
			name: '新乡'
		}, {
			name: '西安',
			value: 60
		}],
		[{
			name: '新乡'
		}, {
			name: '武汉',
			value: 50
		}],
		[{
			name: '新乡'
		}, {
			name: '合肥',
			value: 40
		}],
		[{
			name: '新乡'
		}, {
			name: '南京',
			value: 30
		}],
		[{
			name: '新乡'
		}, {
			name: '沈阳',
			value: 20
		}],
		[{
			name: '新乡'
		}, {
			name: '成都',
			value: 10
		}]
	];

	var SHData = [
		[{
			name: '九江'
		}, {
			name: '九江',
			value: 200
		}],

		[{
			name: '九江'
		}, {
			name: '长沙',
			value: 95
		}],
		[{
			name: '九江'
		}, {
			name: '武汉',
			value: 30
		}],
		[{
			name: '九江'
		}, {
			name: '南昌',
			value: 20
		}],
		[{
			name: '九江'
		}, {
			name: '合肥',
			value: 70
		}],
		[{
			name: '九江'
		}, {
			name: '南京',
			value: 60
		}],
		[{
			name: '九江'
		}, {
			name: '福州',
			value: 50
		}],
		[{
			name: '九江'
		}, {
			name: '上海',
			value: 100
		}],
		[{
			name: '九江'
		}, {
			name: '深圳',
			value: 100
		}],

	];

	var GZData = [
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '新疆玛纳斯基地',
			value: 200
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '  ',
			value: 90
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: ' ',
			value: 40
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '呼和浩特',
			value: 90
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '昆明',
			value: 40
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '成都',
			value: 10
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '兰州',
			value: 95
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '银川',
			value: 90
		}],
		[{
			name: '新疆玛纳斯基地'
		}, {
			name: '西宁',
			value: 80
		}],
		[{
			name: '北京'
		}, {
			name: '台州',
			value: 10
		}],
	];

	var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push([{
					coord: fromCoord
				}, {
					coord: toCoord
				}]);
			}
		}
		return res;
	};

	var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
	var series = [];
	[
		['新乡', BJData],
		['九江', SHData],
		['新疆', GZData]
	].forEach(function (item, i) {
		series.push({
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.4,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function (val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function (dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});

	option = {
		backgroundColor: '',
		title: {
			text: '',
			subtext: '',
			left: 'left',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			top: 'bottom',
			left: 'right',
			data: ['北京 Top10', '上海 Top10', '广州 Top10'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#091072',
					borderColor: '#0692a4'
				},
				emphasis: {
					areaColor: '#2b91b7'
				}
			}
		},
		zoom:1.2,
		series: series
	};
	myChart.setOption(option);
	window.addEventListener("resize", function () {
		myChart.resize();
	});
})()