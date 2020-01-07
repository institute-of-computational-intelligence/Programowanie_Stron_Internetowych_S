$(function(){

    $('#Addbtn').click(function(){
        const name = $('#firstname').val();
        const lastname = $('#lastname').val();
        const salary = $('#salary').val();
        let lista = new Array(name, lastname, salary);
        setItem();
        console.log();
    })

    function setItem(name, value, storage){
        if(storage === 'localstorage')
        {
            localStorage.setItem(name, value);
        }
        else
        {
            sessionStorage.setItem(name, value);
        }
    }

    function getItem(name, storage){
        if(storage === 'localstorage')
        {
            localStorage.getItem(name);
        }
        else
        {
            sessionStorage.getItem(name);
        }
    }
})