$(function () {

    $.ajax({
        url: "/broadcastData/getCompere",
        dataType: "JSON",
        success: function (result) {
            let commonResult = new CommonResult(result);
            if (commonResult.responseCode === ResponseCode.SUCCESSFUL) {
                for (let i = 0; i < commonResult.data.length; i++) {
                    let li = document.createElement("li");
                    li.setAttribute("compere-id", commonResult.data[i].compereId)
                    li.classList.add("compere");
                    let a = document.createElement("a");
                    a.setAttribute("href", "#");
                    a.innerText = commonResult.data[i].compereName;
                    li.appendChild(a);
                    document.getElementById("dropdown-menu").appendChild(li);
                }
            }
        }
    });

    $("#dropdown-menu").on("click", ".compere", function () {
        $(".option").removeClass("active");
        $(this).addClass("checked").siblings("li").removeClass("checked");
        $("#window").attr("src", "/admin/comperePersonalPage.html");
    });


    $(".option").on("click", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        let option = $(this).children("a").text();
        if (option === "本月综合") {
            $("#window").attr("src", "/admin/comprehensiveOfThisMonth.html");
        } else if (option === "本月排行榜") {
            $("#window").attr("src", "/admin/rankList.html");
        } else {
            $("#window").attr("src", "/admin/displayByShift.html");
        }

    });

    $("#search").on("submit", function () {
        if (validateCompereId($("#compereId").val())) {
            $(".option").removeClass("active");
            // $("#window").attr("src", "/workbench/search.html");
        }
        return false;
    });


    $("#logOut").on("click", function () {
        $modal({
            type: 'confirm', //弹框类型  'alert' or  'confirm' or 'message'   message提示(开启之前如果之前含有弹框则清除)
            icon: 'warning', // 提示图标显示 'info' or 'success' or 'warning' or 'error'  or 'question'
            title: '提醒', // 提示文字
            content: '您确定要退出登录吗?', // 提示文字
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
                logOut();
            }
        });
    });


});