$(function () {

    sayHello();

    $("#compereId").on("blur", function () {
        let compereId = $(this).val();
        if (compereId.length === 12) {
            getCompereNameById(compereId);
        }
    });


    $("#addRecord").on("submit", function () {

        let formData = {
            compereId: $("#compereId").val(),
            compereName: $("#compereName").val(),
            date: $("#date").val(),
            shift: $("#shift").val(),
            paidOrders: $("#paidOrders").val(),
            paidAmount: $("#paidAmount").val(),
            ordersUv: $("#ordersUv").val(),
            ordersPv: $("#ordersPv").val(),
            increasedAttention: $("#increasedAttention").val(),
            shareStudio: $("#shareStudio").val()
        };


        if (validateData(formData)) {
            $.ajax({
                url: "/broadcastData/addRecord",
                method: "POST",
                data: JSON.stringify(formData),
                dataType: "JSON",
                contentType: "application/json",
                success: function (result) {
                    let commonResult = new CommonResult(result);
                    if (commonResult.responseCode === ResponseCode.SUCCESSFUL) {
                        $modal({
                            type: 'message', //弹框类型  'alert' or  'confirm' or 'message'  message提示(开启之前如果之前含有弹框则清除)
                            icon: "success", // 提示图标显示 'info' or 'success' or 'warning' or 'error'  or 'question'
                            timeout: 2000, // 单位 ms  显示多少毫秒后关闭弹框 （ confirm 下无效 | 不传默认为 2000ms | 最短显示时间为500ms）
                            content: '添加成功', // 提示文字
                            center: false,// 是否绝对居中 默认为false  设置true后   top无效
                            top: 450, //距离顶部距离 单位px
                            transition: 300, //过渡动画 默认 200   单位ms
                            closable: true, // 是否显示可关闭按钮  默认为 false
                        });
                    } else if (commonResult.responseCode === ResponseCode.REPEAT_ADD) {
                        $modal({
                            type: 'message', //弹框类型  'alert' or  'confirm' or 'message'  message提示(开启之前如果之前含有弹框则清除)
                            icon: "error", // 提示图标显示 'info' or 'success' or 'warning' or 'error'  or 'question'
                            timeout: 2000, // 单位 ms  显示多少毫秒后关闭弹框 （ confirm 下无效 | 不传默认为 2000ms | 最短显示时间为500ms）
                            content: '此日期的记录已存在，请直接修改，或删除后重新添加', // 提示文字
                            center: false,// 是否绝对居中 默认为false  设置true后   top无效
                            top: 450, //距离顶部距离 单位px
                            transition: 300, //过渡动画 默认 200   单位ms
                            closable: true, // 是否显示可关闭按钮  默认为 false
                        });
                    } else if (commonResult.responseCode === ResponseCode.FAILED) {
                        $modal({
                            type: 'message', //弹框类型  'alert' or  'confirm' or 'message'  message提示(开启之前如果之前含有弹框则清除)
                            icon: "error", // 提示图标显示 'info' or 'success' or 'warning' or 'error'  or 'question'
                            timeout: 2000, // 单位 ms  显示多少毫秒后关闭弹框 （ confirm 下无效 | 不传默认为 2000ms | 最短显示时间为500ms）
                            content: '添加失败', // 提示文字
                            center: false,// 是否绝对居中 默认为false  设置true后   top无效
                            top: 450, //距离顶部距离 单位px
                            transition: 300, //过渡动画 默认 200   单位ms
                            closable: true, // 是否显示可关闭按钮  默认为 false
                        });
                    }
                }
            });
        }

        return false;
    });


});


function validateData(formData) {
    let isEffective = true;
    if (!validateCompereId(formData.compereId)) {
        isEffective = false;
    } else if (formData.shift === "") {
        isEffective = false;
    }
    return isEffective;
}


function getCompereNameById(compereId) {
    $.get("/broadcastData/getCompereNameById", {"compereId": compereId}, function (result) {
        let commonResult = new CommonResult(result);
        if (commonResult.responseCode === ResponseCode.SUCCESSFUL) {
            let option = document.createElement("option");
            option.setAttribute("value", commonResult.data);
            option.setAttribute("selected", "selected");
            option.innerText = commonResult.data;
            let compereName = document.getElementById("compereName");
            compereName.appendChild(option);
            $(compereName).selectpicker("refresh");
        }
    });

}


function sayHello() {
    let hour = new Date().getHours();
    let hello = $("#hello");
    if (hour < 11) {
        hello.text("hello，上午好");
    } else if (hour <= 12) {
        hello.text("hello，中午好");
    } else if (hour <= 18) {
        hello.text("hello，下午好");
    } else {
        hello.text("hello，晚上好");
    }
}