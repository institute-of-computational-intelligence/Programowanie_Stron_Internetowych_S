function zad1() {
    var p =  document.getElementById("p2");
    p.style.color = "blue";
    p.style.fontSize = 25;
  }

  function zad2() {
    var forumularz =  document.getElementById("formularz");
    var obrazek =  document.getElementById("myImage");
    obrazek.src = forumularz.value;

  }

  function zad3() {
    var element = document.getElementById("formularzCaly");

    var f2 = document.getElementById("formularz2");
    var f3 = document.getElementById("formularz3");

    var para = document.createElement("a");

    para.innerText= f2.value + f3.value;

    element.insertBefore(para, element.firstChild);
  }

// Zad4
var x;
  function mOver(obj) {
  x = obj.textContent;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy; 
    obj.innerHTML = today;
  }
  
  function mClick(obj) {
    var element = document.getElementById("dateNow");
    element.innerHTML = obj.textContent;
  }

  function mOut(obj) {
    obj.innerHTML = x;
  }
