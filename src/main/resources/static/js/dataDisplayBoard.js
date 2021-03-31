var echarts = echarts.init(document.getElementById("comprehensiveThisMonth"));
let option = {
    title: {
        text: '本月综合数据表'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['董诗园', '胡颖', '任雨涵', '程思睿']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '董诗园',
            type: 'line',
            data: [120, 125, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330, 310, 232, 443, 64, 33, 865, 234, 765]
        },
        {
            name: '胡颖',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 232, 201, 154, 190, 330, 410, 242, 432, 53, 567, 567, 234, 345]
        },
        {
            name: '任雨涵',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410, 332, 301, 334, 390, 330, 320, 323, 545, 645, 234, 453, 253, 745]
        },
        {
            name: '程思睿',
            type: 'line',
            data: [320, 332, 301, 334, 390, 266, 320, 546, 191, 234, 402, 330, 560, 234, 324, 64, 745, 345, 353, 123]
        }
    ]
};

echarts.setOption(option);