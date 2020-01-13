$(document).ready(function(){
    $("#click").click(function(){
        let a = $("#FName").val();
        $("#tabelka tbody").append("<td>" + a + "</td>");
        $.cookie("FirstName" , a);

        let b = $("#LName").val();
        $("#tabelka tbody").append("<td>" + b + "</td>");
        $.cookie("LastName" , b);

        let c = $("#Salary").val();
        $("#tabelka tbody").append("<td>" + c + "</td>");
        $.cookie("Salary" , c);

        $("#tabelka tbody").append("<tr>" +"</tr>");
    })
})

function setItem(name, value, storage){
    storage.setItem(name, value);
}

function getItem(name, storage){
    storage.getItem(name);
}