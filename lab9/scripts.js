$(function () {
    $('#btn').click(function () {

        const name = $('#first').val();
        const surname = $('#last').val();
        const salary = $('#salary').val();
        let list = new Array(name, surname, salary);
        setItem('lista1', list, 'localStorage');
        setItem('lista2', list, 'localStorage');
        // setItem('lista3', list, 'localStorage');
        // setItem('lista4', list, 'localStorage');
        // setItem('lista5', list, 'sessionStorage');
        let de = localStorage.getItem("lista1");
        //  getItem('lista1', 'localStorage');
        console.log(de);
    })

    function setItem(name, value, storage) {
        if (storage === 'localStorage') {
            localStorage.setItem(name, value);
        } else {
            sessionStorage.setItem(name, value);
        }
    }

    function getItem(name, storage) {
        if (storage === 'localStorage') {
            localStorage.getItem(name);
        } else {
            sessionStorage.getItem(name);
        }
    }
});