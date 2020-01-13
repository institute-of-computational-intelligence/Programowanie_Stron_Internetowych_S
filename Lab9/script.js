
function id(x)
{
    return document.getElementById(x);
}
    
window.addEventListener("load", _=>
{
    var request = window.indexedDB.open("MyDB");
    var db;
    request.onerror = function(event) {
        id("dbstate").style.color="#F33";
        id("dbstate").innerHTML+=" (error)"
    };
    request.onsuccess = function(event) {
        id("dbstate").style.color="#3F3";
        id("dbstate").innerHTML+=" (success!)"
        db = event.target.result;
    };
    
    request.onupgradeneeded = function(event) {
        var db = event.target.result;

        var objectStore = db.createObjectStore("Persons", { keyPath: "ssn" });

        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("surname", "surname", { unique: false });
        objectStore.createIndex("salary", "salary", { unique: false });

        objectStore.transaction.oncomplete = function(event) {
          var PersonStore = db.transaction("Persons", "readwrite").objectStore("Persons");
          personData.forEach(function(person) {
            PersonStore.add(person);
          });
        };
      };






    var list1=[];

    id("button1").addEventListener("click", function(){
        list1.push(id("ipt_name").value);
        list1.push(id("ipt_lname").value);
        list1.push(id("ipt_salary").value);
        setItem("list1", list1, "Cookies");
    });

    id("button2").addEventListener("click", function(){
        list1 = getItem("list1", "Cookies").split(",");
        id("result").innerHTML+=`<ul>`;
        console.log(list1);
        for (element of list1) {
        id("result").innerHTML+=`<li>${element}</li>`;
        }
        id("result").innerHTML+=`</ul>`;
    });

    function setItem(name, value, storage) {
        if (storage == "Cookies")
        {
            Cookies.set(name, value);
        } else
        storage[name] = value;
        
    }

    function getItem(name, storage) {
        if (storage == "Cookies")
        {
            return Cookies.get(name);
        } else
        return storage[name];
        
    }


});