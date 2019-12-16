
function id(x)
{
    return document.getElementById(x);
}
    
window.addEventListener("load", _=>
{


    // Wyciąganie danych za pomocą fetch:
    // id("btn_get1").addEventListener("click", function(){
    //     fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    //     .then(response => {
    //         response.json().then(json => {
    //             gridDataFetch = json;
    //             console.log("Fetched data:");
    //             console.log(gridDataFetch);
    //         })
    //     })
    //     .catch((err) => console.error(err));
    // });


    // Wyciąganie danych za pomocą async await fetch:
    // id("btn_get1").addEventListener("click", async function(){
    //     var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    //     var gridDataFetch = await response.json();
    //     console.log("Awaited fetched data:");
    //     console.log(gridDataFetch);
    // });

    
    // Wyciąganie danych za pomocą ajax/get
    // id("btn_get1").addEventListener("click", function(){
    //     $.getJSON("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json", response=>{
    //         var gridDataFetch = response;
    //         console.log("jQueried fetched data:");
    //         console.log(gridDataFetch);
    //     });
    // });
    var gridDataFetch;
    (async ()=>{
        var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        gridDataFetch = await response.json();
        console.log("Awaited fetched data:");
        console.log(gridDataFetch);
        
        var propertyNames = Object.getOwnPropertyNames(gridDataFetch[0]);

        console.log(propertyNames);
        var table = "";

        table+="<tr>";
        for(propertyName of propertyNames) {
            table+="<th>"+propertyName+"</th>";
        }
        table+="</tr>";

        gridDataFetch.forEach( gridDataFetched=>{
            table+="<tr>";
            for(propName of propertyNames) {
                table+="<td>"+gridDataFetched[propName]+"</td>";
            }
            table+="</tr>";
            
        });

        id("table1").innerHTML=table;
    })();
    

    





});