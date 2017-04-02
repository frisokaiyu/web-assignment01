//the main function must occur after the page is loaded, hence being inside the wondow.onload event handler.
window.onload = function() {
    var mysearch = document.getElementById("searchTitle").textContent;
    document.write(mysearch.search)
    var obj = document.getElementsByTagName("select");
    var index = obj.selectedIndex;
    var val = obj.options[index].text;

    function myFunction(tableId) {
        var tableInfo = "";
        var tableObj = document.getElementById(tableId);
        for (var i = 0; i < tableObj.rows.length; i++) {
            for (var j = 0; j < tableObj.rows[i].cells[j].length; j++) {
                tableInfo += tableObj.rows[i].cells[j].innerText;
                tableInfo += " ";
            }
            tableInfo += "\n";

            return tableInfo;
            function searchTable(tableInfo) {
                if (mysearch == tableInfo) {
                    tableObj.rows[i] = function () {
                        this.style.backgroundColor = "green";
                    }
                    tableObj.rows[i] = function () {
                        this.style.backgroundColor = "#FFFFFF";
                        this.style.fontWeight = "normal";

                    }
                }
                if (val == tableInfo) {
                    tableObj.rows[i] = function () {
                        this.style.backgroundColor = "green";
                    }
                    tableObj.rows[i] = function () {
                        this.style.backgroundColor = "#FFFFFF";
                        this.style.fontWeight = "normal";

                    }
                }
            }

        }
        myFunction("Table");

    }
}


