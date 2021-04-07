$(function () {

    (function () {
        let echarts = window.echarts.init(document.querySelector(".paid-orders"));
        let option = {
            title: {
                // top: "2%",
                left: "2%",
                text: "这是一个表"
            },
            grid: {
                // top:"10%",
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        echarts.setOption(option);
    })();


});