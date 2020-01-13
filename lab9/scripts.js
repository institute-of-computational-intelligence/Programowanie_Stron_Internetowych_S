function addToList(firstName, lastName, salary) {
    $("#list").append("<li>"+firstName+" "+lastName+", "+salary+"</li>");
}

$(function(){
    $("#add").click(function(){
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var salary = $("#salary").val();
        if(firstName.length > 0 && lastName.length > 0 && salary.length > 0) {
            addToList(firstName, lastName, salary);
        }
        
    })
});

function setItem(name, value, storage) {
    if(storage === "LocalStorage") {
        localStorage.setItem(name, value);
    }
    else { // SessionStorage
        sessionStorage.setItem(name, value);
    }
}

function getItem(name, storage) {
    if(storage === "LocalStorage") {
        return localStorage.getItem(name);
    }
    return sessionStorage.getItem(name);
}


