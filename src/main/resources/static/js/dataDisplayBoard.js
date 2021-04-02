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
            showMiddleShiftOfThisMonth();
        } else if (option === "本月晚班") {
            initializeContainer("eveningShiftOfThisMonth");
            showEveningShiftOfThisMonth();
        } else if (option === "排行榜") {
            initializeContainer("list");
            showList();
        }
    });




    $(".checked").trigger("click");
});


function initializeContainer(id) {
    let container = document.getElementById(id);
    $(container).css({"display": "block"}).siblings("div").css({"display": "none"});
}


//==============================================================================显示本月综合==========================================================================================

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
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .paid-amount"));
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
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .orders-uv"));
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
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .orders-pv"));
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
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .increased-attention"));
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
        let echarts = window.echarts.init(document.querySelector("#comprehensiveOfThisMonth> .share-studio"));
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


//==============================================================================显示本月早班==========================================================================================

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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .paid-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .orders-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .orders-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .increased-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享次数
    (function () {
        let echarts = window.echarts.init(document.querySelector("#morningShiftOfThisMonth .share-studio"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();

}


//==============================================================================显示本月中班==========================================================================================

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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .paid-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .orders-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .orders-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .increased-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享次数
    (function () {
        let echarts = window.echarts.init(document.querySelector("#middleShiftOfThisMonth .share-studio"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();

}


//==============================================================================显示本月晚班==========================================================================================

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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //支付金额
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .paid-amount"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //下单UV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .orders-uv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //订单PV
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .orders-pv"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //新增关注
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .increased-attention"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();


    //直播间分享次数
    (function () {
        let echarts = window.echarts.init(document.querySelector("#eveningShiftOfThisMonth .share-studio"));
        let option = {
            title: {
                left: '2%',
                top: '5%',
                text: '支付订单(笔)'
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
                    data: ['董诗园', '胡颖', '任雨涵', '程思睿', "*", "*", "*", "*", "*", "*"],
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
                    data: [100, 390, 330, 220, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        echarts.setOption(option);
    })();

}


//==============================================================================================排行榜==========================================================================

function showList() {
    //支付订单
    (function () {
        let echarts = window.echarts.init(document.querySelector("#list .paid-orders"));
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
        let echarts = window.echarts.init(document.querySelector("#list .paid-amount"));
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
        let echarts = window.echarts.init(document.querySelector("#list .orders-uv"));
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
        let echarts = window.echarts.init(document.querySelector("#list .orders-pv"));
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
        let echarts = window.echarts.init(document.querySelector("#list .increased-attention"));
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
        let echarts = window.echarts.init(document.querySelector("#list .share-studio"));
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

}














