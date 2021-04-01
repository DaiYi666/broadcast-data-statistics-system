let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

$(function () {

    $(".option").on("click", function () {
        $(".option").removeClass("active");
        let option = $(this).addClass("active").children("a").text();
        if (option === "本月综合") {
            initializeContainer("comprehensiveOfThisMonth");
            showComprehensiveOfThisMonth();
        } else if (option === "本月早班") {
            initializeContainer("morningShiftOfThisMonth");
            showMorningShiftOfThisMonth();
        } else if (option === "本月中班") {
            initializeContainer("middleShiftOfThisMonth");
            showMiddleShiftOfThisMonth()
        } else if (option === "本月晚班") {
            initializeContainer("eveningShiftOfThisMonth");
            showEveningShiftOfThisMonth();
        } else if (option === "排行榜") {
            initializeContainer("list")
        }
    });


});


function initializeContainer(id) {
    let container = document.getElementById(id);
    $(container).css({"display": "block"}).siblings("div").css({"display": "none"});
}


/*显示本月早班*/
function showComprehensiveOfThisMonth() {
    //支付订单
    (function () {
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .paid-orders"));
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
    })();

    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .pay-amount"));
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
                    data: [323, 545, 645, 234, 453, 253, 745, 330, 310, 232, 443, 64, 33, 865, 234, 765, 234, 290, 330, 584]
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


    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .order-of-uv"));
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
                    data: [44, 22, 43, 24, 42, 64, 63, 54, 32, 12, 34, 24, 52, 43, 74, 41, 34]
                },
                {
                    name: '胡颖',
                    type: 'line',
                    data: [44, 22, 78, 78, 42, 87, 45, 86, 32, 12, 46, 24, 52, 75, 68, 34, 76]
                },
                {
                    name: '任雨涵',
                    type: 'line',
                    data: [44, 12, 43, 24, 42, 45, 78, 64, 32, 12, 48, 34, 52, 48, 78, 87, 27]
                },
                {
                    name: '程思睿',
                    type: 'line',
                    data: [44, 23, 23, 23, 42, 64, 43, 34, 32, 12, 12, 24, 33, 43, 23, 34, 12]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .order-of-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '订单UV(%)'
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
                    data: [44, 22, 43, 24, 42, 64, 63, 54, 32, 12, 34, 24, 52, 43, 74, 41, 34]
                },
                {
                    name: '胡颖',
                    type: 'line',
                    data: [44, 22, 78, 78, 42, 87, 45, 86, 32, 12, 46, 24, 52, 75, 68, 34, 76]
                },
                {
                    name: '任雨涵',
                    type: 'line',
                    data: [44, 12, 43, 24, 42, 45, 78, 64, 32, 12, 48, 34, 52, 48, 78, 87, 27]
                },
                {
                    name: '程思睿',
                    type: 'line',
                    data: [44, 23, 23, 23, 42, 64, 43, 34, 32, 12, 12, 24, 33, 43, 23, 34, 12]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .additional-attention"));
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
                    data: [323, 545, 645, 234, 453, 253, 745, 232, 310, 232, 443, 64, 33, 865, 234, 765, 234, 290, 330, 584]
                },
                {
                    name: '胡颖',
                    type: 'line',
                    data: [220, 182, 191, 234, 243, 330, 310, 232, 201, 154, 190, 330, 410, 242, 432, 53, 567, 567, 234, 345]
                },
                {
                    name: '任雨涵',
                    type: 'line',
                    data: [150, 232, 201, 234, 190, 330, 410, 332, 301, 334, 342, 330, 320, 323, 545, 423, 234, 453, 253, 745]
                },
                {
                    name: '程思睿',
                    type: 'line',
                    data: [320, 332, 301, 334, 390, 266, 234, 546, 191, 234, 402, 330, 560, 234, 324, 242, 745, 345, 353, 123]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享次数
    (function () {
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .number-of-times-shared-of-broadcast-room"));
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
                    data: [44, 22, 43, 24, 42, 24, 63, 54, 234, 12, 34, 24, 52, 43, 74, 41, 34]
                },
                {
                    name: '胡颖',
                    type: 'line',
                    data: [44, 22, 78, 78, 42, 87, 45, 86, 32, 12, 46, 342, 52, 75, 68, 34, 76]
                },
                {
                    name: '任雨涵',
                    type: 'line',
                    data: [44, 12, 43, 24, 42, 45, 78, 42, 32, 12, 48, 34, 52, 48, 78, 87, 27]
                },
                {
                    name: '程思睿',
                    type: 'line',
                    data: [44, 23, 23, 23, 42, 64, 34, 34, 32, 12, 12, 24, 33, 43, 23, 112, 12]
                }
            ]
        };
        echarts.setOption(option);
    })();


}


function getDayOfThisMonth() {
    let date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let lastDay = new Date(year, month, 0).getDate();
    let days = [];
    for (let i = 1; i <= lastDay; i++) {
        days.push(i);
    }
    return days;
}


//显示本月早班
function showMorningShiftOfThisMonth() {
    //支付订单
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .paid-orders"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '支付订单',
                    type: 'bar',
                    barWidth: '60%',
                    data: [100, 390, 330, 220]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .pay-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付金额(元)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '支付金额',
                    type: 'bar',
                    barWidth: '60%',
                    data: [44244, 4410, 4542, 42154]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .order-of-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '下单UV(%)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '下单UV',
                    type: 'bar',
                    barWidth: '60%',
                    data: [22, 44, 54, 13]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .order-of-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '订单PV(%)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '订单PV',
                    type: 'bar',
                    barWidth: '60%',
                    data: [45, 35, 12, 5]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .additional-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '新增关注(人)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '新增关注',
                    type: 'bar',
                    barWidth: '60%',
                    data: [78, 58, 785, 587]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享次数
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .number-of-times-shared-of-broadcast-room"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '直播间分享(次)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '直播间分享',
                    type: 'bar',
                    barWidth: '60%',
                    data: [87, 585, 757, 111]
                }
            ]
        };
        echarts.setOption(option);
    })();

}


//显示本月中班
function showMiddleShiftOfThisMonth() {
    //支付订单
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .paid-orders"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '支付订单',
                    type: 'bar',
                    barWidth: '60%',
                    data: [100, 390, 330, 220]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .pay-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付金额(元)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '支付金额',
                    type: 'bar',
                    barWidth: '60%',
                    data: [44244, 4410, 4542, 42154]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .order-of-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '下单UV(%)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '下单UV',
                    type: 'bar',
                    barWidth: '60%',
                    data: [22, 44, 54, 13]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .order-of-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '订单PV(%)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '订单PV',
                    type: 'bar',
                    barWidth: '60%',
                    data: [45, 35, 12, 5]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .additional-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '新增关注(人)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '新增关注',
                    type: 'bar',
                    barWidth: '60%',
                    data: [78, 58, 785, 587]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享次数
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .number-of-times-shared-of-broadcast-room"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '直播间分享(次)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '直播间分享',
                    type: 'bar',
                    barWidth: '60%',
                    data: [87, 585, 757, 111]
                }
            ]
        };
        echarts.setOption(option);
    })();
}


//显示本月晚班
function showEveningShiftOfThisMonth() {
    //支付订单
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .paid-orders"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '支付订单',
                    type: 'bar',
                    barWidth: '60%',
                    data: [100, 390, 330, 220]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .pay-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付金额(元)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '支付金额',
                    type: 'bar',
                    barWidth: '60%',
                    data: [44244, 4410, 4542, 42154]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .order-of-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '下单UV(%)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '下单UV',
                    type: 'bar',
                    barWidth: '60%',
                    data: [22, 44, 54, 13]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .order-of-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '订单PV(%)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '订单PV',
                    type: 'bar',
                    barWidth: '60%',
                    data: [45, 35, 12, 5]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .additional-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '新增关注(人)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '新增关注',
                    type: 'bar',
                    barWidth: '60%',
                    data: [78, 58, 785, 587]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享次数
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .number-of-times-shared-of-broadcast-room"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '直播间分享(次)'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿'],
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
                    name: '直播间分享',
                    type: 'bar',
                    barWidth: '60%',
                    data: [87, 585, 757, 111]
                }
            ]
        };
        echarts.setOption(option);
    })();
}