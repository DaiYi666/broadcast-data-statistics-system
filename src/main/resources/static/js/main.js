$(function () {

    $(".navbar-nav>li").on("click", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        let option = $(this).children("a").text();
        console.log(option);
        if (option === "本月所有数据") {
            $("#window").attr("src", "../workbench/allTheDataThisMonth.html");
        } else if (option === "添加记录") {
            $("#window").attr("src", "../workbench/addRecords.html");
        }
    });


    $("#searchButton").on("click", function () {
        $("#window").attr("src", "../workbench/search.html");
    });

    $("#logOutButton").on("click", function () {
        logOut();
    });

});