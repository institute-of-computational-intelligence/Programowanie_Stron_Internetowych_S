document.getElementById("getData").addEventListener("click", getDataFunction);
document.getElementById("searchBtn").addEventListener("click", searchFunction);

async function getDataFunction(){
    //fetch
    fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        .then(Response => {
            Response.json().then(json =>{
                gridDataFetch = json
                console.log("data downloaded by fetch")
                console.log(gridDataFetch);
            })
        })
    .catch((err) => console.error(err))

    //await fetch
    try{
        let response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
        let user = await response.json().then(json =>{
            gridDataAwaitFetch = json
            console.log("data downloaded by fetch async")
            console.log(gridDataAwaitFetch);
        })
    }
    catch(err) { 
        console.error(err);
    }
}

//$.ajax
$.ajax({
    url : "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
    dataType : "json"
})
.done(json =>{
    gridDatajQuery = json
    console.log("data downloaded by jQuery")
    console.log(gridDatajQuery)
    var col = [];
    for (var i = 0; i < gridDatajQuery.length; i++) {
       for (var key in gridDatajQuery[i]) {
           if (col.indexOf(key) === -1) {
               col.push(key);
            }
        }
    }
    var table = document.getElementById("table");
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < gridDatajQuery.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = gridDatajQuery[i][col[j]];
        }
    }

})

async function searchFunction(){
    $("#table").empty(); 
    var a = document.getElementById("search").value;
    var col = [];
    arr1 = gridDatajQuery.filter(d => d.type == a)
    for (var i = 0; i < arr1.length; i++) {
       for (var key in arr1[i]) {
           if (col.indexOf(key) === -1) {
               col.push(key);
            }
        }
    }
    var table = document.getElementById("table");
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < arr1.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = arr1[i][col[j]];
        }
    }

}
