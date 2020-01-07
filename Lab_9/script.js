var first=null;
var last=null;
var salary=null;

function pobierz(){
    first = document.getElementById("firstName");
    last = document.getElementById("lastName");
    salary= document.getElementById("salary");
    tab=[first, last, salary];
    return tab;
}

function wyswietl(){
    var all=[];
    all=all.concat(tab);
    all.forEach(function(element,index){
        var liFirst=$("<li>");
        liFirst.html(element.FirstName);
        var liLast=$("<li>");
        liLast.html(element.LastName);
        var liSalary=$("<li>");
        liSalary.html(element.Salary);

        var ul=$("<ul>");
        ul.append(liFirst);
        ul.append(liLast);
        ul.append(lliSalary);
    });
}