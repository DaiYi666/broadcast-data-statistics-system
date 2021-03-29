$(function () {

    $("#registerButton").on("click", function () {
        let realName = $("#realName");
        let password = $("#password");
        let confirmPassword = $("#confirmPassword");
        let email = $("#email");
        let verificationCode = $("#verificationCode");

        if (realName === null || realName === "" || realName.length < 2) {

        } else if (password === null || password === "" || password.length < 6) {

        } else if (confirmPassword !== password) {

        } else if (password === null || password === "" || password.length < 6) {

        } else if (!validateEmail(email)) {

        }else if (email!==getVerificationCode()){

        }


    });


});

function getVerificationCode() {
    let verificationCode = "";
    $.ajax({
        url: "",
        method: "GET",
        async: true,
        success: function (result) {
            verificationCode = result;
        }
    });

    return verificationCode;
}