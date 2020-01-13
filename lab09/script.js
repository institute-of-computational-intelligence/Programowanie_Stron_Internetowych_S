var list = [];

document.getElementById("submit").addEventListener("click", () =>{
    list[list.length] = {firstName: $("#fname").val(),
                   lastName: document.getElementById("lname").value,
                   salary: $("#salary").val()};
    //console.log(list);
    showUl();
    setItem1(list[list.length-1].firstName, list[list.length-1].salary, localStorage);
    setItem1(list[list.length-1].firstName, list[list.length-1].salary, sessionStorage);
    getItem1(list[list.length-1].firstName, sessionStorage);
    indexDB();
})

/*$(document).ready(()=>{
    $("#form").on('submit')
})*/

function showUl(){
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    for(i=0; i<list.length;i++){
        var wiersz = document.createElement("li");
        wiersz.append(list[i].firstName + " " + list[i].lastName + " " +list[i].salary);
        lista.append(wiersz);
    }
}

function setItem1(name, value, storage){
    storage.setItem(name, value);
}

function getItem1(name, storage){
    var zmienna = storage.getItem(name);
    console.log(zmienna);
}

function indexDB(){
    let db;
    let dbReq = indexedDB.open('Person', 1);

    dbReq.onupgradeneeded = function(event) {
    // Set the db variable to our database so we can use it!  
    db = event.target.result;

    // Create an object store named notes. Object stores
    // in databases are where data are stored.
    let notes = db.createObjectStore('person', {autoIncrement: true});
    }
    dbReq.onsuccess = function(event) {
    db = event.target.result;
    }

    dbReq.onerror = function(event) {
    alert('error opening database ' + event.target.errorCode);
    }
}