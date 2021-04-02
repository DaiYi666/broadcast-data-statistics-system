function validateEmail(email) {//校验邮箱
    if (email !== null && email !== "") {
        let standard = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (standard.test(email)) {
            return true;
        }
    }
    return false;
}


function validateCompereId(compereId) {//校验邮箱
    if (compereId !== null && compereId !== "") {
        let standard = /^\d{12}$/;
        if (standard.test(compereId)) {
            return true;
        }
    }
    return false;
}


function getDayOfThisMonth() {
    let date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let lastDay = new Date(year, month, 0).getDate();
    let days = [];
    for (let i = 1; i <= lastDay; i++) {
        days.push(i);
    }
    return days;
}




function logOut() {
    $.ajax({
        url: "/user/logOut",
        method: "GET",
    });

    location.href = "/index.html";
}


const ResponseCode = {
    SUCCESSFUL: 200,
    REGISTERED_SUCCESSFUL: 201,
    FAILED: 300,
    REPEAT_ADD:302,
    EMAIL_ALREADY_EXISTS: 301
}

const UserType = {
    ADMINISTRATOR: "administrator",
    OTHER: "other"
}

function CommonResult(result) {
    this.responseCode = result.responseCode;
    this.message = result.message;
    this.data = result.data;
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
