$(function () {

    getAllDataOfThisMonth();

    // let testData = {
    //     compereId: "202008080415",
    //     compereName: "代毅",
    //     date: "2020-04-15",
    //     shift: "早班",
    //     paidOrders: "530",
    //     paidAmount: "3242",
    //     ordersUv: "2.5",
    //     ordersPv: "3.1",
    //     increasedAttention: "521",
    //     shareStudio: "214"
    // }
    //
    // for (let i = 0; i < 5; i++) {
    //     createDataRow(testData);
    // }

    // $(".delete").on("click", function (e) {
    //
    //     // confirm
    //     $modal({
    //         type: 'confirm', //弹框类型  'alert' or  'confirm' or 'message'   message提示(开启之前如果之前含有弹框则清除)
    //         icon: 'warning', // 提示图标显示 'info' or 'success' or 'warning' or 'error'  or 'question'
    //         title: '提醒', // 提示文字
    //         content: '您确定要删除这一条记录吗?', // 提示文字
    //         transition: 300, //过渡动画 默认 200   单位ms
    //         closable: true, // 是否显示可关闭按钮  默认为 false
    //         mask: true, // 是否显示遮罩层   默认为 false
    //         top: 400, //距离顶部距离 单位px
    //         center: true,// 是否绝对居中 默认为false  设置true后   top无效
    //         pageScroll: false, // 是否禁止页面滚动
    //         width: 500, // 单位 px 默认显示宽度 最下默认为300
    //         maskClose: true, // 是否点击遮罩层可以关闭提示框 默认为false
    //         cancelText: '取消',// 取消按钮 默认为 取消
    //         confirmText: '确认',// 确认按钮 默认未 确认
    //         cancel: function (close) {  // 回调函数  //  函数返回关闭事件 调用-关闭弹窗
    //             // $modal({
    //             //     type: 'message', //弹框类型  'alert' or  'confirm' or 'message'   message提示(开启之前如果之前含有弹框则清除)
    //             //     icon: 'success', // 提示图标显示 'info' or 'success' or 'warning' or 'error'  or 'question'
    //             //     content: '用户点击了取消', // 提示文字
    //             // })
    //             close(); // 调用返回的 关闭弹框函数 才能关闭
    //         },
    //         confirm: function (close) { // 回调函数  //  函数返回关闭事件 调用-关闭弹窗
    //             close(); // 调用返回的 关闭弹框函数 才能关闭
    //         }
    //     });
    //
    //
    // });


});


function createDataRow(data) {
    // let compereName = $(this).parent().siblings(".compere-name").text();
    let alert = document.createElement("div");
    alert.classList.add("alert", "alert-success");
    alert.setAttribute("role", "alert");

    let row = document.createElement("div");
    row.classList.add("row", "text-center");

    let id = document.createElement("div");
    id.classList.add("col-lg-2", "id");
    id.innerText = data.compereId;

    let compereName = document.createElement("div");
    compereName.classList.add("col-lg-1", "compere-name");
    compereName.innerText = data.compereName;

    let date = document.createElement("div");
    date.classList.add("col-lg-2", "date");
    date.innerText = data.date.toString();

    let shift = document.createElement("div");
    shift.classList.add("col-lg-1", "shift");
    if (data.shift === "morningShift") {
        shift.innerText = "早班";
    } else if (data.shift === "noonShift") {
        shift.innerText = "中班";
    } else if (data.shift === "nightShift") {
        shift.innerText = "晚班";
    }

    let paidOrders = document.createElement("div");
    paidOrders.classList.add("col-lg-1", "paid-orders");
    paidOrders.innerText = data.paidOrders.toString();

    let paidAmount = document.createElement("div");
    paidAmount.classList.add("col-lg-1", "paid-amount");
    paidAmount.innerText = data.paidAmount.toString();

    let ordersUv = document.createElement("div");
    ordersUv.classList.add("col-lg-1", "orders-uv");
    ordersUv.innerText = data.ordersUv.toString();

    let ordersPv = document.createElement("div");
    ordersPv.classList.add("col-lg-1", "orders-pv");
    ordersPv.innerText = data.ordersPv.toString();

    let increasedAttention = document.createElement("div");
    increasedAttention.classList.add("col-lg-1", "increased-attention");
    increasedAttention.innerText = data.increasedAttention.toString();

    let shareStudio = document.createElement("div");
    shareStudio.classList.add("col-lg-1", "share-studio");
    shareStudio.innerText = data.shareStudio.toString();

    row.appendChild(id);
    row.appendChild(compereName);
    row.appendChild(date);
    row.appendChild(shift);
    row.appendChild(paidOrders);
    row.appendChild(paidAmount);
    row.appendChild(ordersUv);
    row.appendChild(ordersPv);
    row.appendChild(increasedAttention);
    row.appendChild(shareStudio);
    alert.appendChild(row);

    document.getElementById("table").appendChild(alert);
}


function getAllDataOfThisMonth() {
    $.ajax({
        url: "/broadcastData/getAllDataOfThisMonth",
        method: "POST",
        dataType: "JSON",
        success: function (result) {
            let commonResult = new CommonResult(result);
            for (let index in commonResult.data) {
                if (commonResult.data.hasOwnProperty(index)) {
                    createDataRow(commonResult.data[index]);
                }
            }
        }
    });
}