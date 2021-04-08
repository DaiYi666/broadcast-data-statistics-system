$(function () {

    let data = function () {
        let data = {};
        $.ajax({
            url: "/broadcastData/getAllChartDataOfThisMonth",
            method: "GET",
            data: {"compereId": $("#dropdown-menu>.checked", window.parent.document).attr("compere-id")},
            dataType: "JSON",
            async: false,
            success: function (result) {
                let commonResult = new CommonResult(result);
                if (commonResult.responseCode === ResponseCode.SUCCESSFUL) {
                    data = commonResult.data;
                }
            }
        });
        return data;
    }();


    //支付订单
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
            series: [{
                data: data.paidOrders[0].data,
                type: 'line',
                smooth: true
            }]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector(".paid-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付金额(笔)'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '3%',
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
            series: [{
                data: data.paidAmount[0].data,
                type: 'line',
                smooth: true
            }]
        };
        echarts.setOption(option);
    })();





    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector(".orders-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '下单UV(%)'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '3%',
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
            series: [{
                data: data.ordersUv[0].data,
                type: 'line',
                smooth: true
            }]
        };
        echarts.setOption(option);
    })();





    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector(".orders-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '订单PV(%)'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '3%',
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
            series: [{
                data: data.ordersPv[0].data,
                type: 'line',
                smooth: true
            }]
        };
        echarts.setOption(option);
    })();





    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector(".increased-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '新增关注(人)'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '3%',
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
            series: [{
                data: data.increasedAttention[0].data,
                type: 'line',
                smooth: true
            }]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector(".share-studio"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '直播间分享(次)'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '3%',
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
            series: [{
                data: data.shareStudio[0].data,
                type: 'line',
                smooth: true
            }]
        };
        echarts.setOption(option);
    })();


});