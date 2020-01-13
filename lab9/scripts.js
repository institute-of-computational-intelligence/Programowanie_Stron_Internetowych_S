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