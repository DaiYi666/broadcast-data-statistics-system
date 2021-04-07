$(function () {

    let data = function () {
        let data = {};
        $.ajax({
            url: "/broadcastData/getAllChartDataOfThisMonth",
            method: "GET",
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
            series: (function () {
                let resultSet = parseResultSet(data.paidOrders);
                for (let i = 0; i < resultSet.length; i++) {
                    resultSet[i].type = "line";
                }
                return resultSet;
            })()
        };
        echarts.setOption(option);
    })();


    (function () {
        let echarts = window.echarts.init(document.querySelector(".paid-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付金额(元)'
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
            series: (function () {
                let resultSet = parseResultSet(data.paidAmount);
                for (let i = 0; i < resultSet.length; i++) {
                    resultSet[i].type = "line";
                }
                return resultSet;
            })()
        };
        echarts.setOption(option);
    })();


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
            series: (function () {
                let resultSet = parseResultSet(data.ordersUv);
                for (let i = 0; i < resultSet.length; i++) {
                    resultSet[i].type = "line";
                }
                return resultSet;
            })()
        };
        echarts.setOption(option);
    })();


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
            series: (function () {
                let resultSet = parseResultSet(data.ordersPv);
                for (let i = 0; i < resultSet.length; i++) {
                    resultSet[i].type = "line";
                }
                return resultSet;
            })()
        };
        echarts.setOption(option);
    })();


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
            series: (function () {
                let resultSet = parseResultSet(data.increasedAttention);
                for (let i = 0; i < resultSet.length; i++) {
                    resultSet[i].type = "line";
                }
                return resultSet;
            })()
        };
        echarts.setOption(option);
    })();


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
            series: (function () {
                let resultSet = parseResultSet(data.shareStudio);
                for (let i = 0; i < resultSet.length; i++) {
                    resultSet[i].type = "line";
                }
                return resultSet;
            })()
        };
        echarts.setOption(option);
    })();


});
