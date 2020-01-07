var x = [];
var funw = function (x){
  let y = ["<ul>"];
  
  x.forEach(element => {
    y.push("<li>"+element+"</li>");
  });
  y.push("</ul>");
  return y;
}
var funx = function (){
  x = [];
  x.push($("#FirstName").val());
  x.push($("#SecondName").val());
  x.push($("#Salary").val());
  console.log(x);
  let y=funw(x);
  console.log(y);
  $("#lista").html(y.join("\n"));
}
$("#Add").click(funx);
$("#LocalSave").click(function (){
  setitem("Salary",x.pop(),"local");
  setitem("SecondName",x.pop(),"local");
  setitem("FirstName",x.pop(),"local");
})
$("#LocalLoad").click(function (){
  getitem("FirstName","local");
  getitem("SecondName","local");
  getitem("Salary","local");
})

$("#SessionSave").click(function (){
  setitem("Salary",x.pop(),"session");
  setitem("SecondName",x.pop(),"session");
  setitem("FirstName",x.pop(),"session");
})
$("#SessionLoad").click(function (){
  getitem("FirstName","session");
  getitem("SecondName","session");
  getitem("Salary","session");
})
var setcookie = function (name,value){
    Cookies.set(name, value, { expires: 7, path: '' })
}
var getcookie = function (name){
  console.log(Cookies.get(name));
}
$("#CookieSave").click(function(){
  setcookie("Salary",x.pop());
  setcookie("SecondName",x.pop());
  setcookie("FirstName",x.pop());
})
$("#CookieGet").click(function(){
  console.log(Cookies.get());
})
$("#CookieLoad").click(function (){
  getcookie("FirstName");
  getcookie("SecondName");
  getcookie("Salary");
})
var setitem = function (name, value, storage){
  if(storage === "local"){
    window.localStorage.setItem(name,value);
  }
  else if(storage === "session"){
    window.sessionStorage.setItem(name,value);
  }

}

var getitem = function (name, storage){
  if(storage === "local"){
    console.log(window.localStorage.getItem(name));
  }
  else if(storage === "session"){
    console.log(window.sessionStorage.getItem(name));
  }
}