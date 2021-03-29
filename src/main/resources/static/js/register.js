$(function () {

    let repeatSend = false;

    let timer = null;


    $("#registerButton").on("click", function () {
        let realName = $("#realName").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let email = $("#email").val();
        let verificationCode = $("#verificationCode").val();

        console.log(verificationCode);
        console.log(getVerificationCode());

        if (realName === null || realName === "" || realName.length < 2) {
            $.alert({
                title: "提醒",
                content: "请输入正确的姓名"
            });
        } else if (password === null || password === "" || password.length < 6) {
            $.alert({
                title: "提醒",
                content: "请输入至少6位的密码"
            });
        } else if (confirmPassword !== password) {
            $.alert({
                title: "提醒",
                content: "两次输入的密码不一致"
            });
        } else if (!validateEmail(email)) {
            $.alert({
                title: "提醒",
                content: "请输入正确的邮箱"
            });
        } else if (verificationCode !== getVerificationCode()) {
            $.alert({
                title: "提醒",
                content: "验证码不正确"
            });
        } else {
            $.alert({
                title: "提醒",
                content: "ok"
            });
        }


    });

    $("#sendVerificationCode").on("click", function () {
        if (!repeatSend) {
            repeatSend = true;
            timer = setTimeout(function () {
                repeatSend = false;
            }, 10 * 1000);
        } else {
            $.alert({
                title: "提醒",
                content: "操作频繁"
            });
        }


    });


});

function getVerificationCode() {
    let verificationCode = "";
    $.ajax({
        url: "http://localhost:8080/getVerificationCode",
        method: "GET",
        async: false,
        success: function (result) {
            verificationCode = result;
            console.log(result);
            console.log("获取到的验证码是：" + result);
        }
    });

    return verificationCode;
}