var gridDataQueryAjax = []

async function fun1()
{
    await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        .then(response => {
            response.json().then(json => {
                gridDataFetch = json
                console.log("data downloaded by fetch")
                console.log(gridDataFetch);
            })
        })
        .catch((err) => console.error(err))
}

var button1 = document.getElementById("b1");
button1.addEventListener("click", fun1);

$("b1").on("click", async function(){
        //7
        try {
            gridDataQueryAjax = await $.ajax({
                url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
                type: 'GET'
            });
            console.log("data downloaded by jquery await")
            console.log(gridDataQueryAjax);
        } catch (error) {
            console.error(error);
        }
});




