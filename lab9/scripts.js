document.getElementById("btnAdd").addEventListener("click", addFunction);
var lista = [];

function addFunction(){
    lista.push([$("#firstName").val(), $("#lastName").val(), $("#salary").val()]);

    $("#lista").empty();
    var i;
    for (i = 0; i < lista.length; i++){
        $("#lista").append(
            "<li>" + lista[i][0] + " " + lista[i][1] + " " + lista[i][2] + "</li>"
        );
    }
}

function setItem(name, value, storage){

}

function getItem(name, storage){
    
}