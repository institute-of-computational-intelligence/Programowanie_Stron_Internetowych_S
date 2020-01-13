function addToList(firstName, lastName, salary) {
    let transaction = db.transaction(["persons"], "readwrite");

    let persons = transaction.objectStore("persons"); // (2)

    let person = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
    };

    let request = persons.add(person); // (3)

    request.onsuccess = function() { // (4)
    console.log("Osoba dodana ", request.result);
    };

    request.onerror = function() {
    console.log("Błąd ", request.error);
    }
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
let db;

openRequest.onupgradeneeded = function() {
    db = openRequest.result;

    if (!db.objectStoreNames.contains('persons')) {
        var objectStore = db.createObjectStore('persons', {autoIncrement: true}); // create it

        //objectStore.createIndex('test', 'test', { unique: false });
    }
  };
  

  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
  };
  
  openRequest.onsuccess = function() {
    db = openRequest.result;
   
    addToList("Jan", "Kowalski", 10000);
    addToList("Piotr", "Nowak", 20000);
    addToList("Tomasz", "Przybylski", 30000);

  }; 

