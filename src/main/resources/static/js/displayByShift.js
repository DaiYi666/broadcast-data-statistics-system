$(function () {
    let data = function () {
        let data = {};
        $.ajax({
            url: "/broadcastData/getAllChartDataOfThisMonth",
            data: {"shift": $(".active", window.parent.document).attr("shift")},
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


//支付订单
    (function () {
        let resultSet = processData(data.paidOrders);
        let echarts = window.echarts.init(document.querySelector(".paid-orders"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单总和(笔)'
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
            xAxis: [
                {
                    type: 'category',
                    data: resultSet.nameArray,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '支付订单总和',
                    type: 'bar',
                    barWidth: '60%',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let resultSet = processData(data.paidAmount);
        let echarts = window.echarts.init(document.querySelector(".paid-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付金额总和(%)'
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
            xAxis: [
                {
                    type: 'category',
                    data: resultSet.nameArray,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '支付金额总和',
                    type: 'bar',
                    barWidth: '60%',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    (function () {
        let resultSet = processData(data.ordersUv);
        let echarts = window.echarts.init(document.querySelector(".orders-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '下单UV总和(%)'
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
            xAxis: [
                {
                    type: 'category',
                    data: resultSet.nameArray,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '下单UV总和',
                    type: 'bar',
                    barWidth: '60%',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    (function () {
        let resultSet = processData(data.ordersPv);
        let echarts = window.echarts.init(document.querySelector(".orders-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '订单PV总和(%)'
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
            xAxis: [
                {
                    type: 'category',
                    data: resultSet.nameArray,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '订单PV总和',
                    type: 'bar',
                    barWidth: '60%',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    (function () {
        let resultSet = processData(data.increasedAttention);
        let echarts = window.echarts.init(document.querySelector(".increased-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '新增关注总和(人)'
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
            xAxis: [
                {
                    type: 'category',
                    data: resultSet.nameArray,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '新增关注总和',
                    type: 'bar',
                    barWidth: '60%',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    (function () {
        let resultSet = processData(data.shareStudio);
        let echarts = window.echarts.init(document.querySelector(".share-studio"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '直播间分享总和(次)'
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
            xAxis: [
                {
                    type: 'category',
                    data: resultSet.nameArray,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直播间分享总和',
                    type: 'bar',
                    barWidth: '60%',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


});


function processData(data) {
    let nameArray = [];
    let dataArray = [];
    let resultSet = parseResultSet(data);
    for (let i = 0; i < resultSet.length; i++) {
        nameArray.push(resultSet[i].name);
        let count = 0;
        for (let j = 0; j < resultSet[i].data.length; j++) {
            count += resultSet[i].data[j];
        }

        count = Number(count);
        if (!isNaN(parseFloat(count.toString()))) {
            count = count.toFixed(1);//把 Number 四舍五入为指定小数位数的数字。
        }
        dataArray.push(count);
    }

    if (dataArray.length < 10) {
        for (let i = dataArray.length; i < 10; i++) {
            nameArray.push("*");
            dataArray.push(0);
        }
    }

    return {
        nameArray: nameArray,
        dataArray: dataArray
    }
}