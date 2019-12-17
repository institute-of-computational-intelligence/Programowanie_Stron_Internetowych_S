let FetchData;
let AwaitFetchData;
let AjaxData;
document.getElementById("przycisk").addEventListener('click',function()
{
//Zadanie 5
fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
.then(response => {
    response.json().then(json => {
        FetchData = json
        console.log("Dane pobrane przez fetch")
        console.log(FetchData);
    })
})
.catch((err) => console.error(err))
});

//Zadanie 6
document.getElementById("przycisk").addEventListener('click', async function()
{
    try{
        let response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        AwaitFetchData = await response.json()
        console.log("Dane pobrane przez fetch await")
        console.log(AwaitFetchData);
    }catch{
        console.log(err)
    }
});

//Zadanie 7
document.getElementById("przycisk").addEventListener('click',async function()
{
    try{
    Ajax = await $.ajax({
        url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json"
    })
    console.log("Dane pobrane przez ajax")
    AjaxData = JSON.parse(Ajax)
    console.log(AjaxData);
}catch
{
    console.log(err);
}
});

//Zadanie 8
