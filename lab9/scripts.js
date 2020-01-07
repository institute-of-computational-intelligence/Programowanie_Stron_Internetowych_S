$(function () {
    $('#btn').click(function () {

        const name = $('#first').val();
        const surname = $('#last').val();
        const salary = $('#salary').val();
        let list = new Array(name, surname, salary);
        console.log(list);
    })
});