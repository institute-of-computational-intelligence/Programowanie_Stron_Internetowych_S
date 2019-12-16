async function GetData1() {
    var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
    gridDataFetch = await response.json();
    console.log("data downloaded by fetch");
    console.log(gridDataFetch);
}

async function GetData2() { 
    gridDataFetch = await $.ajax("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
    console.log("data downloaded by fetch");
    console.log(gridDataFetch);
};
  
async function GetData3() {
    gridDataFetch = await $.get("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
    console.log("data downloaded by fetch");
    console.log(gridDataFetch);
}

async function ShowData() {
    var response = await $.get("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
	var gridDataFetch = await JSON.parse(response)
    $('#table').bootstrapTable({
        data: gridDataFetch
    });
}

btn = document.getElementById("get-data-btn");
btn.addEventListener("click", GetData1);
btn.addEventListener("click", GetData2);
btn.addEventListener("click", GetData3);
btn.addEventListener("click", ShowData);

document.onload = ShowData();

$(document).ready(async function(){
    value = document.getElementById("kolumnaFormControlSelect").value;
    $("#input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(async function() {
            await $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});