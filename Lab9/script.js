const $list = $('ul');
var persona=[];
$('#Add').click(function(){
    tekst=$('#FirstName').val()+" "+$('#LastName').val()+" "+$('#Salary').val();
    persona.push(tekst);
    $list.append(`<li>${persona[persona.length-1].toString()}</li>`);
})
function setItem(name, value, storage){
    storage.setItem(name, value);
}
function getItem(name, storage){
    storage.getItem(name);
}