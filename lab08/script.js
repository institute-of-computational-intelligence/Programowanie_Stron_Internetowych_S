var gridDataFetch = []
document.getElementById("get-data-btn").addEventListener("click", async (sender) => {
    var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    gridDataFetch = await response.json()
    console.log("po deserializacji")
    console.log(gridDataFetch)

    Add();
});

function Add() {
    var table = document.getElementById("tableAdd");
    for(var i = 0; i<gridDataFetch.length; i++){
        var row = document.createElement("tr");
        
        var index = document.createElement("th");
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");
        var col5 = document.createElement("td");
        var col6 = document.createElement("td");
        var col7 = document.createElement("td");

        index.innerHTML = i+1;
        col1.innerHTML = gridDataFetch[i].title;
        col2.innerHTML = gridDataFetch[i].type;
        col3.innerHTML = gridDataFetch[i].description;
        col4.innerHTML = gridDataFetch[i].height;
        col5.innerHTML = gridDataFetch[i].width;
        col6.innerHTML = gridDataFetch[i].price;
        col7.innerHTML = gridDataFetch[i].rating;

        row.appendChild(index);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);

        table.appendChild(row);
    }
    
}