//var gridDataFetch=[]
//var gridDataFetchAsync=[]
var gridDatajQueryAjax=[]
//var getButton=document.querySelector("#getData");

//getButton.addEventListener("click", async (sender)=>{
    /*
    //fetch promise
    fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        .then(response =>{
            response.json().then(json =>{
                gridDataFetch=json
                console.log("data downloaded by fetch")
                console.log(gridDataFetch);
            })
        })
        .catch((err) => console.error(err))

    //fetch await
    try{
        var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        gridDataFetchAsync=await response.json()
        console.log("data downloaded by fetch await")
        console.log(gridDataFetchAsync)
    }
    catch(err){
        console.error(err)
    }
*/
async function cos(){
    //ajax jquery
    try{
        var ajaxResponse = await $.ajax({
            url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
            type: 'GET'
        });
        var dataGrid = JSON.parse(ajaxResponse);
        console.log("data downloaded by ajax")
        console.log(dataGrid)
        //var listOfKeys= Object.keys(dataGrid[0]);
        dataGrid.forEach(function(element, index){
            var tdTitle = $("<td>");
            tdTitle.html(element.title);
            var tdType = $("<td>");
            tdType.html(element.type);
            var tdDesc = $("<td>");
            tdDesc.html(element.description);
            var tdFileName = $("<td>");
            tdFileName.html(element.filename);
            var tdHeight = $("<td>");
            tdHeight.html(element.height);
            var tdWidth = $("<td>");
            tdWidth.html(element.width);
            var tdPrice = $("<td>");
            tdPrice.html(element.price);
            var tdRating = $("<td>");
            tdRating.html(element.rating);

            var tr = $("<tr>");
            tr.append(tdTitle);
            tr.append(tdType);
            tr.append(tdDesc);
            tr.append(tdFileName);
            tr.append(tdHeight);
            tr.append(tdWidth);
            tr.append(tdPrice);
            tr.append(tdRating); 
            $("#tableB tbody").append(tr);
        });
    }
    catch(err){
        console.error(err);
    }
}
cos();