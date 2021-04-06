$(function () {

    (function () {
        let echarts = window.echarts.init(document.querySelector(".paid-orders"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '3%',
                data: ['董诗园', '胡颖', '任雨涵', '程思睿']
            },
            grid: {
                top: '20%',
                left: '2%',
                right: '2%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: getDayOfThisMonth()
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '董诗园',
                    type: 'line',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 330, 310, 232, 443, 64, 33, 865, 234, 765]
                },
                {
                    name: '胡颖',
                    type: 'line',
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
    })();
});


function analyticalData(data) {
    for (let index in data) {
        let series = {};
        if (data.hasOwnProperty(index)) {
            series.type="line";
            series.name=data[index].name;
        }
    }
}