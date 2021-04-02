$(function () {

    /*
        Fullscreen background
    */
    $.backstretch(["/img/2.jpg", "/img/3.jpg", "/img/1.jpg"], {duration: 3000, fade: 750});

    /*
        Form validation
    */
    $(".login-form input[type='text'], .login-form input[type='password']").on("focus", function () {
        $(this).removeClass("input-error");
    });

    $("#loginButton").on("click", function (e) {
        let email = $("#email");
        let password = $("#password");
        if (!validateEmail(email.val())) {
            email.addClass("input-error");
        } else if (password.val() === null || password.val() === "") {
            password.addClass("input-error");
        } else if (password.val().length < 6) {
            password.addClass("input-error");
        } else {
            $.ajax({
                url: "/user/authentication",
                method: "POST",
                data: JSON.stringify({"email": email.val(), "password": password.val()}),
                dataType: "JSON",
                contentType: "application/json",
                async: false,
                success: function (result) {
                    let commonResult = new CommonResult(result);
                    if (commonResult.responseCode === ResponseCode.SUCCESSFUL) {
                        location.href = "/workbench/workbench-main.html";
                    } else if (commonResult.responseCode === ResponseCode.FAILED) {
                        password.addClass("input-error");
                    } else {
                        $.dialog({title: "错误", content: "服务器冒烟了，请联系代毅处理吧！"});
                    }
                }
            });
        }

        return false;
    });
});