document.getElementById("getData").addEventListener("click", rzecz);


window.onload = function()
  {
    rzecz();
    document.getElementById("filter1").addEventListener("keyup", search);
    document.getElementById("filter2").addEventListener("keyup", search);
  };


var trn=1;
var table=document.getElementById("table");
var dataset=[]; 
async function rzecz()
{
    response= await fetch('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json') ;
    dataset=await response.json();
    logDataset(); 
};



function logDataset (filterValue) { 
    
    
    
    
    console.log(filterValue);
    
        var tabTop="";
        tabTop=Object.getOwnPropertyNames(dataset[0]);
        var gg="";
        for(var title of tabTop)
        {
            gg+=`<th scope="col">${title.toUpperCase()}</th>`;
        }
     
        document.getElementById("tableTop").innerHTML=gg;
        var tbody="";
        for(i=0;i<dataset.length;i++)
        {
        tbody+="<tr>"
        if(dataset[i].type===filterValue )
        {
            
            for(var value of tabTop)
            {
              tbody+=`<th >${dataset[i][value]}</th>` ;
            }
           
        }
        tbody+="</tr>";
   
    }
    document.getElementById("tbody").innerHTML=tbody;
    
    console.log(dataset.length);
}
function search(e)
{
   logDataset(e.target.value);

console.log(e.target.value);
}