$(function (){
    //支付订单
    (function () {
        let echarts = window.echarts.init(document.querySelector(".paid-orders"));
        let option = {
            title: {
                text: '订单排行榜'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['任雨涵', '董诗园', '程思睿', '胡颖']
            },
            series: [
                {
                    type: 'bar',
                    data: [1235, 2236, 3000, 5766]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector(".paid-amount"));
        let option = {
            title: {
                text: '支付金额排行榜'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['任雨涵', '董诗园', '程思睿', '胡颖']
            },
            series: [
                {
                    type: 'bar',
                    data: [12033, 22031, 34566, 56788]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector(".orders-uv"));
        let option = {
            title: {
                text: '订单UV排行榜'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['任雨涵', '董诗园', '程思睿', '胡颖']
            },
            series: [
                {
                    type: 'bar',
                    data: [4.2, 4.5, 7.6, 9.1]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单pv
    (function () {
        let echarts = window.echarts.init(document.querySelector(".orders-pv"));
        let option = {
            title: {
                text: '下单PV排行榜'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['任雨涵', '董诗园', '程思睿', '胡颖']
            },
            series: [
                {
                    type: 'bar',
                    data: [1.3, 2.5, 7.6, 9.3]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector(".increased-attention"));
        let option = {
            title: {
                text: '新增关注排行榜'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['任雨涵', '董诗园', '程思睿', '胡颖']
            },
            series: [
                {
                    type: 'bar',
                    data: [1203, 2413, 3600, 4522]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享
    (function () {
        let echarts = window.echarts.init(document.querySelector(".share-studio"));
        let option = {
            title: {
                text: '直播间分享排行榜'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['任雨涵', '董诗园', '程思睿', '胡颖']
            },
            series: [
                {
                    type: 'bar',
                    data: [98, 354, 465, 776]
                }
            ]
        };
        echarts.setOption(option);
    })();

});