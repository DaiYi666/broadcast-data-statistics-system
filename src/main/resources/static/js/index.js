$(function () {
    $("#loginButton").on("click", function () {

        let email = $("#email").val();
        let password = $("#password").val();
        if (email === null || email === "" || !validateEmail(email)) {
            $.alert({
                title: "提醒",
                content: "请输入正确的的邮箱"
            });
        } else if (password === null || password === "" || password.length < 6) {
            $.alert({
                title: "提醒",
                content: "请输入正确的密码"
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
                        if(result.data.userType===UserType.ADMINISTRATOR){
                            location.href = "/admin/dataDisplayBoard.html";
                        }else {
                            location.href = "/workbench/main.html";
                        }
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




