$(function () {
    $.ajax({
        url: "/broadcastData/getAllDataOfThisMonth",
        method: "GET",
        dataType: "JSON",
        success: function (result) {
            let commonResult = new CommonResult(result);
            if (commonResult.responseCode === ResponseCode.SUCCESSFUL) {
                for (let index in commonResult.data) {
                    if (commonResult.data.hasOwnProperty(index)) {
                        createDataRow(commonResult.data[index], false);
                    }
                }
            }
        }
    });
});
