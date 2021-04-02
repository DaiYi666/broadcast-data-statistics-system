$(function () {
    for (let i = 0; i < 50; i++) {
        let htmlCode = "";
        htmlCode += "<tr>";
        htmlCode += "<td>董诗园</td>";
        htmlCode += "<td>2021-03-01</td>";
        htmlCode += "<td>546</td>";
        htmlCode += "<td>64512</td>";
        htmlCode += "<td>2.1</td>";
        htmlCode += "<td>5.9</td>";
        htmlCode += "<td>564</td>";
        htmlCode += "<td>21</td>";
        htmlCode += "</tr>";
        $(".data-table>tbody").append(htmlCode);
    }
});