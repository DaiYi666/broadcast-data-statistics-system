function validateEmail(email) {//校验邮箱
    if (email !== null && email !== "") {
        let standard = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (standard.test(email)) {
            return true;
        }
    }
    return false;
}


function logOut() {
    $.ajax({
        url: "/user/logOut",
        method: "GET",
    });

    location.href = "/index.html";
}


const ResponseCode = {
    AUTHENTICATION_SUCCESSFUL: 200,
    REGISTERED_SUCCESSFUL: 201,
    AUTHENTICATION_FAILED: 300,
    EMAIL_ALREADY_EXISTS: 301
}

const UserType = {
    ADMINISTRATOR: "administrator",
    OTHER: "other"
}

let BroadcastData = {
    compereName: "",
    paidOrders: [],
    paidAmount: [],
    ordersUv: [],
    ordersPv: [],
    increasedAttention: [],
    shareStudio: []
}
