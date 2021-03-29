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
        }else {
            $.alert({
                title: "警告",
                content: "你以为你都输了就可以了吗？"
            });
        }
    });
});




