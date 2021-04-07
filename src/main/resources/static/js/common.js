function validateEmail(email) {//校验邮箱
    if (email !== null && email !== "") {
        let standard = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (standard.test(email)) {
            return true;
        }
    }
    return false;
}


function validateCompereId(compereId) {//校验主播id
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
    REPEAT_ADD: 302,
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


function createDataRow(data, isShowOption) {
    let alert = document.createElement("div");
    alert.classList.add("alert", "alert-success");
    alert.setAttribute("role", "alert");

    let row = document.createElement("div");
    row.classList.add("row", "text-center");

    let id = document.createElement("div");
    if (isShowOption) {
        id.classList.add("col-lg-1", "id");
    } else {
        id.classList.add("col-lg-2", "id");
    }
    id.innerText = data.compereId;

    let compereName = document.createElement("div");
    compereName.classList.add("col-lg-1", "compere-name");
    compereName.innerText = data.compereName;

    let date = document.createElement("div");
    if (isShowOption) {
        date.classList.add("col-lg-1", "date");
    } else {
        date.classList.add("col-lg-2", "date");
    }
    date.innerText = data.date;

    let shift = document.createElement("div");
    shift.classList.add("col-lg-1", "shift");
    if (data.shift === "morningShift") {
        shift.innerText = "早班";
    } else if (data.shift === "noonShift") {
        shift.innerText = "中班";
    } else if (data.shift === "nightShift") {
        shift.innerText = "晚班";
    }

    let paidOrders = document.createElement("div");
    paidOrders.classList.add("col-lg-1", "paid-orders");
    paidOrders.innerText = data.paidOrders;

    let paidAmount = document.createElement("div");
    paidAmount.classList.add("col-lg-1", "paid-amount");
    paidAmount.innerText = data.paidAmount;

    let ordersUv = document.createElement("div");
    ordersUv.classList.add("col-lg-1", "orders-uv");
    ordersUv.innerText = data.ordersUv;

    let ordersPv = document.createElement("div");
    ordersPv.classList.add("col-lg-1", "orders-pv");
    ordersPv.innerText = data.ordersPv;

    let increasedAttention = document.createElement("div");
    increasedAttention.classList.add("col-lg-1", "increased-attention");
    increasedAttention.innerText = data.increasedAttention;

    let shareStudio = document.createElement("div");
    shareStudio.classList.add("col-lg-1", "share-studio");
    shareStudio.innerText = data.shareStudio;

    row.appendChild(id);
    row.appendChild(compereName);
    row.appendChild(date);
    row.appendChild(shift);
    row.appendChild(paidOrders);
    row.appendChild(paidAmount);
    row.appendChild(ordersUv);
    row.appendChild(ordersPv);
    row.appendChild(increasedAttention);
    row.appendChild(shareStudio);

    if (isShowOption) {
        let option1 = document.createElement("div");
        option1.classList.add("col-lg-1");
        let edit = document.createElement("span");
        edit.classList.add("iconfont", "edit");
        edit.innerHTML = "&#xe636;";
        option1.appendChild(edit);
        row.appendChild(option1);

        let option2 = document.createElement("div");
        option2.classList.add("col-lg-1");
        let del = document.createElement("span");
        del.classList.add("iconfont", "delete");
        del.innerHTML = "&#xe61a;";
        option2.appendChild(del);
        row.appendChild(option2);
    }


    alert.appendChild(row);
    document.getElementById("table").appendChild(alert);
}




function parseResultSet(resultSet) {
    let array = [];
    for (let index in resultSet) {
        if (resultSet.hasOwnProperty(index)) {
            let result = {
                name: resultSet[index].name,
                data: resultSet[index].data
            };
            array.push(result);
        }
    }
    return array;
}