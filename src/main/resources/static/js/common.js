function validateEmail(emailAddress) {//校验邮箱
    if (emailAddress !== null && emailAddress !== "") {
        let standard = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (standard.test(emailAddress)) {
            return true;
        }
    }
    return false;
}
