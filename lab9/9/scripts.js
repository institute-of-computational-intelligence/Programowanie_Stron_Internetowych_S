var x = [];
var db;
function openDB() {

 var DBOpenRequest = indexedDB.open('Test1');
 DBOpenRequest.onsuccess = function(e) {
   db = DBOpenRequest.result;
   db.createObjectStore("Persons");
   var trans1 = db.transaction("Persons", "readwrite");
   var objectStore1 = trans1.objectStore("Persons");
   objectStore1.add("1","Klaun");
   objectStore1.add("2","Klaun2");
   objectStore1.add("3","Klaun3");
   objectStore1.commit();
   var trans2 = db.transaction("Persons", "readwrite");
   var objectStore2 = trans2.objectStore("Persons");
   objectStore2.put("2","Klaun22");
   console.log(objectStore2.get("1"));
   console.log(objectStore2.get("2"));
   console.log(objectStore2.get("3"));
 }
}

$("#IndexedDB").click(openDB);