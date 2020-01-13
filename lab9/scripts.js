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
    else if(storage === "SessionStorage"){ // SessionStorage
        sessionStorage.setItem(name, value);
    }
}

function getItem(name, storage) {
    if(storage === "LocalStorage") {
        return localStorage.getItem(name);
    }
    return sessionStorage.getItem(name);
}

function setCookie(name, value, expireDays) {
    $.cookie(name, value, { expires: expireDays });
}

// test
//setItem('local', 'local value', 'LocalStorage');
//setItem('session', 'session value', 'SessionStorage');
//setCookie('testCookie', 'test value', 2);

var openRequest = indexedDB.open('Persons', 1);

openRequest.onupgradeneeded = function() {
    // triggers if the client had no database
    // ...perform initialization...
  };
  
  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
  };
  
  openRequest.onsuccess = function() {
    let db = openRequest.result;
    // continue to work with database using db object
  };