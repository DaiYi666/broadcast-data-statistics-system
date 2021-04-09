$(function () {
    $.ajax({
        url: "/broadcastData/getBroadcastDataByCompereId",
        data: {"compereId": $("#compereId", window.parent.document).val()},
        dataType: "JSON",
        success: function (result) {
            let commonResult = new CommonResult(result);
            if (commonResult.responseCode === ResponseCode.SUCCESSFUL) {
                let commonResult = new CommonResult(result);
                for (let index in commonResult.data) {
                    if (commonResult.data.hasOwnProperty(index)) {
                        createDataRow(commonResult.data[index], true);
                    }
                }
            }
        }
    });


    $("#table").on("click", ".delete", function (e) {
        $modal({
            type: 'confirm', //弹框类型  'alert' or  'confirm' or 'message'   message提示(开启之前如果之前含有弹框则清除)
            icon: 'warning', // 提示图标显示 'info' or 'success' or 'warning' or 'error'  or 'question'
            title: '提醒', // 提示文字
            content: '您确定要删除这一条记录吗?', // 提示文字
            transition: 300, //过渡动画 默认 200   单位ms
            closable: true, // 是否显示可关闭按钮  默认为 false
            mask: true, // 是否显示遮罩层   默认为 false
            top: 400, //距离顶部距离 单位px
            center: true,// 是否绝对居中 默认为false  设置true后   top无效
            pageScroll: false, // 是否禁止页面滚动
            width: 500, // 单位 px 默认显示宽度 最下默认为300
            maskClose: true, // 是否点击遮罩层可以关闭提示框 默认为false
            cancelText: '取消',// 取消按钮 默认为 取消
            confirmText: '确认',// 确认按钮 默认未 确认
            cancel: function (close) {  // 回调函数  //  函数返回关闭事件 调用-关闭弹窗
                close(); // 调用返回的 关闭弹框函数 才能关闭
            },
            confirm: function (close) { // 回调函数  //  函数返回关闭事件 调用-关闭弹窗
                alert("很抱歉，目前系统尚不具备删除功能，如您确实需要删除此条数据，请联系代毅为您从数据库中删除，给您带来的不便，我们深感抱歉！");
                close(); // 调用返回的 关闭弹框函数 才能关闭
            }
        });
    });


    $("#table").on("click", ".edit", function (e) {
        alert("很抱歉，目前系统尚不具备修改功能，如您确实需要修改此条数据，请联系代毅为您从数据库中进行修改，给您带来的不便，我们深感抱歉！");
    });
});

