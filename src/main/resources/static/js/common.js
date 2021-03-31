function validateEmail(email) {//校验邮箱
    if (email !== null && email !== "") {
        let standard = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (standard.test(email)) {
            return true;
        }
    }
    return false;
}

const ResponseCode = {
    AUTHENTICATION_SUCCESSFUL: 200,
    REGISTERED_SUCCESSFUL: 201,
    AUTHENTICATION_FAILED: 300,
    EMAIL_ALREADY_EXISTS: 301
}
