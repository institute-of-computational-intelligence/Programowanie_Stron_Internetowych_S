var x = [];
var db;
function openDB() {
 var DBOpenRequest = window.indexedDB.open('Persons');
 DBOpenRequest.onsuccess = function(e) {
   db = DBOpenRequest.result;
   var trans1 = db.transaction("Persons", "readwrite");
   var objectStore1 = trans1.objectStore("Persons");
   objectStore1.put("1","Klaun");
   objectStore1.put("2","Klaun2");
   objectStore1.put("3","Klaun3");
 }
}