$(function () {
    //标记是否重复发送，如果false，则可以发送，如果为true则已经发送，暂时不能发送
    let repeatSend = false;
    //定时器
    let timer = null;


    $("#registerButton").on("click", function () {
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let email = $("#email").val();
        let verificationCode = $("#verificationCode").val();

        if (!validateEmail(email)) {
            $.dialog({
                title: "提醒",
                content: "请输入正确的邮箱"
            });
        } else if (password === null || password === "" || password.length < 6) {
            $.dialog({
                title: "提醒",
                content: "请输入至少6位的密码"
            });
        } else if (confirmPassword !== password) {
            $.dialog({
                title: "提醒",
                content: "两次输入的密码不一致"
            });
        } else if (verificationCode === null || verificationCode === "" || verificationCode.length < 5 || verificationCode !== getVerificationCode()) {
            $.dialog({
                title: "提醒",
                content: "验证码不正确"
            });
        } else {
            $.alert({
                title: "温馨提示",
                content: "如果您是管理员用户，注册后请联系代毅把您的账户身份切换为管理员"
            });
        }


    });

    $("#sendVerificationCode").on("click", function () {
        let email = $("#email").val();
        if (!validateEmail(email)) {
            $.dialog({
                title: "提醒",
                content: "请输入正确的邮箱"
            });
        } else if (!repeatSend) {
            repeatSend = true;
            sendVerificationCode(email)
            timer = setTimeout(function () {
                repeatSend = false;
            }, 60 * 1000);
        } else {
            $.dialog({
                title: "提醒",
                content: "操作频繁，请稍后再试"
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
        }
    });
    return verificationCode;
}


function sendVerificationCode(emailAddress) {
    $.ajax({
        url: "http://localhost:8080/sendVerificationCode",
        data: {"emailAddress": emailAddress},
        method: "POST"
    });
}