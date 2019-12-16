document.getElementById("getData").addEventListener("click", rzecz);
document.getElementById("filter1").addEventListener("change", search(document.getElementById("filter1").value,document.getElementById("filter2").value));
document.getElementById("filter2").addEventListener("change", search(document.getElementById("filter1").value,document.getElementById("filter2").value));
//document.getElementById("filter").addEventListener("onchange", search(getElementById("filter")));

window.onload = function() {
    rzecz();
  };
var trn=1;
var table=document.getElementById("table");
var dataset=[]; 
async function rzecz()
{
   await fetch('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json') 
    .then(response => response.json()) 
    .then(data => {
 	dataset = data;
    logDataset(); 
});
};


function logDataset () { 
    
    var filterValue="dairy";
    
    
    
    for(i=0;i<dataset.length;i++)
    {
        if(dataset[i].type==="dairy")
        {
            var row=table.insertRow(trn);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            cell1.innerHTML =dataset[i].title;
            cell2.innerHTML =dataset[i].type;
            cell3.innerHTML =dataset[i].description;
            cell4.innerHTML =dataset[i].filename;
            cell5.innerHTML =dataset[i].height;
            cell6.innerHTML =dataset[i].width;
            cell7.innerHTML =dataset[i].price;
            cell8.innerHTML =dataset[i].rating;
            trn++;
        }
   
    }
    
    console.log(dataset.length);
    //console.table(dataset.title);
}
function search(x,y)
{
   



console.log(2);
}