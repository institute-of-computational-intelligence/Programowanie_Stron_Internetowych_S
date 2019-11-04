function $(id)
{
    return document.getElementById(id);
}

document.body.onload = ()=>
{
    $("button1").addEventListener("click",()=>
    {
        $("p1").style.color = "red";
        $("p1").style.fontSize = "18px";
        $("p1").style.fontFamily = "Verdana";
    });

    $("button2").addEventListener("click",()=>
    {
        $("img2").src = $("input2").value; 
    });

    $("button3").addEventListener("click",()=>
    {
        $("ul3").innerHTML = `<li><a href="${$("input3_2").value}">${$("input3_1").value}</a></li>${$("ul3").innerHTML}` 
    });

    $("div4").addEventListener("mouseenter",()=>
    {
        var d = new Date();
        $("div4").innerHTML = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
    });

    $("div4").addEventListener("mouseleave",()=>
    {
        $("div4").innerHTML = "Dowolny tekst";
    });

    $("div4").addEventListener("click",()=>
    {
        $("span4").innerHTML = $("div4").innerHTML;
    });

    var buttons5 = Array.from(document.getElementsByClassName("button5"));
    buttons5.forEach(elem=>elem.addEventListener("click",(e)=>
    {
        buttons5.forEach(elem1=>
        {
            elem1.style.fontWeight = "normal";
            elem1.style.background = "#EEEEEE";
        });
        e.srcElement.style.fontWeight = "bold";
        e.srcElement.style.backgroundColor = "#CCFFFF";
    }));
}

