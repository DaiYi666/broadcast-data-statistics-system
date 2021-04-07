$(function () {

    let data = function () {
        let data = {};
        $.ajax({
            url: "/broadcastData/getAllChartDataOfThisMonth",
            data: {"compereId": $(".checked", window.parent.document).attr("compere-id")},
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
        let container = document.querySelector(".paid-orders");
        $(container).css("height", (resultSet.dataArray.length + 1) * 100 + "px");
        let echarts = window.echarts.init(container);
        let option = {
            title: {
                text: '支付订单排行榜'
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
                data: resultSet.nameArray
            },
            series: [
                {
                    type: 'bar',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let resultSet = processData(data.paidAmount);
        let container = document.querySelector(".paid-amount");
        $(container).css("height", (resultSet.dataArray.length + 1) * 100 + "px");
        let echarts = window.echarts.init(container);
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
                data: resultSet.nameArray
            },
            series: [
                {
                    type: 'bar',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单UV
    (function () {
        let resultSet = processData(data.ordersUv);
        let container = document.querySelector(".orders-uv");
        $(container).css("height", (resultSet.dataArray.length + 1) * 100 + "px");
        let echarts = window.echarts.init(container);
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
                data: resultSet.nameArray
            },
            series: [
                {
                    type: 'bar',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单pv
    (function () {
        let resultSet = processData(data.ordersPv);
        let container = document.querySelector(".orders-pv");
        $(container).css("height", (resultSet.dataArray.length + 1) * 100 + "px");
        let echarts = window.echarts.init(container);
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
                data: resultSet.nameArray
            },
            series: [
                {
                    type: 'bar',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let resultSet = processData(data.increasedAttention);
        let container = document.querySelector(".increased-attention");
        $(container).css("height", (resultSet.dataArray.length + 1) * 100 + "px");
        let echarts = window.echarts.init(container);
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
                data: resultSet.nameArray
            },
            series: [
                {
                    type: 'bar',
                    data: resultSet.dataArray
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享
    (function () {
        let resultSet = processData(data.shareStudio);
        let container = document.querySelector(".share-studio");
        $(container).css("height", (resultSet.dataArray.length + 1) * 100 + "px");
        let echarts = window.echarts.init(container);
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
                data: resultSet.nameArray
            },
            series: [
                {
                    type: 'bar',
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

    for (let i = 0; i < dataArray.length - 1; i++) {
        for (let j = i + 1; j < dataArray.length; j++) {
            if (dataArray[i] > dataArray[j]) {
                let DataTemp = dataArray[i];
                dataArray[i] = dataArray[j];
                dataArray[j] = DataTemp;

                let nameTemp = nameArray[i];
                nameArray[i] = nameArray[j];
                nameArray[j] = nameTemp;
            }
        }
    }

    // if (dataArray.length < 10) {
    //     for (let i = dataArray.length; i < 10; i++) {
    //         nameArray.splice(0, 0, "*");
    //         dataArray.splice(0, 0, 0);
    //     }
    // }

    return {
        nameArray: nameArray,
        dataArray: dataArray
    }
}
