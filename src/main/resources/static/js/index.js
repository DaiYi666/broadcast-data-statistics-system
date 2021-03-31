$(function () {
    $("#loginButton").on("click", function () {

        let email = $("#email").val();
        let password = $("#password").val();
        if (email === null || email === "") {
            $.alert({
                title: "提醒",
                content: "请输入您的邮箱"
            });
        } else if (password === null || password === "") {
            $.alert({
                title: "提醒",
                content: "请输入密码"
            });
        } else {
            $.ajax({
                url: "/authentication",
                data: JSON.stringify({"email": email, "password": password}),
                method: "POST",
                dataType: "JSON",
                contentType: "application/json",
                async: false,
                success: function (result) {
                    if (result.responseCode === ResponseCode.AUTHENTICATION_SUCCESSFUL) {
                        alert("登录成功");
                        location.href = "https://www.baidu.com";
                    } else if (result.responseCode === ResponseCode.AUTHENTICATION_FAILED) {
                        $.dialog({
                            title: "错误",
                            content: "邮箱或密码错误！"
                        });
                    } else {
                        $.dialog({
                            title: "错误",
                            content: "服务器冒烟了，请联系代毅处理吧！"
                        });
                    }
                }
            });
        }
    });
});




