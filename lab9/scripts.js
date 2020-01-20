// Zadanie 5
function addToList(firstName, lastName, salary) {

  if(firstName !== undefined && lastName !== undefined && salary !== undefined) {
    $("#list").append('<li>'+firstName+' '+lastName+', '+salary+'</li>');

    $('form input[type="text"]').each(function(){
      $(this).val("");
    })
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


// Zadanie 6
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

// Zadanie 7
function setCookie(name, value, expireDays) {
    $.cookie(name, value, { expires: expireDays });
}

// Zadanie 8
// test
//setItem('local', 'local value', 'LocalStorage');
//setItem('session', 'session value', 'SessionStorage');
//setCookie('testCookie', 'test value', 2);


// Zadanie 9
let openRequest = indexedDB.open('persons', 1);
let db;

openRequest.onupgradeneeded = function() {
    db = openRequest.result;

    if (!db.objectStoreNames.contains('persons')) {
        db.createObjectStore('persons', {autoIncrement: true}); // create it

    }
  };
  

  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
  };
  
  openRequest.onsuccess = function() {
    db = openRequest.result;

  }; 


  // Zadanie 10
  $("#addThreePersons").click(function(){

    let transaction = db.transaction(["persons"], "readwrite");

    transaction.oncomplete = function(event) {
      console.log("Transakcja wykonana");
    };

    transaction.onerror = function(event) {
      console.log("Błąd ", transaction.error);
    };

    let persons = transaction.objectStore("persons"); // (2)

    let personsArray = [
      {
        firstName: "Jan",
        lastName: "Kowalski",
        salary: 10000
      },
      {
        firstName: "Tomasz",
        lastName: "Nowak",
        salary: 5000
      },
      {
        firstName: "Karol",
        lastName: "Wiśniewski",
        salary: 10000
      }
    ];

    personsArray.forEach(function(person){
      let request = persons.add(person);

      request.onsuccess = function() {
        console.log("Osoba dodana ", request.result);
      };

      request.onerror = function() {
        console.log("Błąd ", request.error);
      }
    });

  });

  // Zadanie 11
  $("#lastModify").click(function(){
    let objectStore = db.transaction(["persons"], "readwrite").objectStore("persons");

    let cursorLastKey;

    objectStore.openCursor().onsuccess = function(event) {

      let cursor = event.target.result;
      if (cursor) {
        cursorLastKey = cursor.key;
        cursor.continue();
      }
      else {
        if(cursorLastKey != null) {
          let request = objectStore.get(cursorLastKey);

          request.onerror = function(event) {
            console.log("Błąd ", request.error);
          };
          request.onsuccess = function(event) {
            let data = event.target.result;

            data.lastName = "Przybylski";
            let requestUpdate = objectStore.put(data);
            requestUpdate.onerror = function(event) {
              console.log("Błąd ", request.error);
            };
            requestUpdate.onsuccess = function(event) {
              objectStore.delete(cursorLastKey);
              console.log("Pomyślnie zaktualizowano nazwisko");
            };

          };
        }

      }
    };
  });

  // Zadanie 12
$("#delete").click(function(){

  let keyDelete = $(this).data('delete');

  if(keyDelete == undefined) {
    return;
  }

  let objectStore = db.transaction(["persons"], "readwrite").objectStore("persons");

  let cursorKey;
  let index = 0;

  objectStore.openCursor().onsuccess = function(event) {

    let cursor = event.target.result;
    if (cursor) {
      if(index+1 == keyDelete) {
        cursorKey = cursor.key;
      }

      cursor.continue();
      index++;
    }
    else {
      if(cursorKey != null) {
        let request = objectStore.get(cursorKey);

        request.onerror = function(event) {
          console.log("Błąd ", request.error);
        };
        request.onsuccess = function(event) {
          objectStore.delete(cursorKey);
          console.log("Usunięto obiekt o kluczu " + cursorKey);
        };
      }

    }
  };
});

  // Zadanie 13
  $("#getAll").click(function(){
    let customers = [];

    let objectStore = db.transaction("persons").objectStore("persons");

    objectStore.openCursor().onsuccess = function(event) {
      let cursor = event.target.result;
      if (cursor) {
        customers.push(cursor.value);
        cursor.continue();
      }
      else {
        console.log(customers);
      }
    };
  });

  // Zadanie 14
  $("#getFirst").click(function(){

    let objectStore = db.transaction("persons").objectStore("persons");

    objectStore.openCursor().onsuccess = function(event) {
      let cursor = event.target.result;
      if (cursor) {
        console.log(cursor.value);
      }

    };
  });
