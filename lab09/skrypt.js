var lista = []

function rob_liste()
{
    let singleObject = {};
    singleObject['name'] = $("#name").val();
    singleObject['last'] = $("#last").val();
    singleObject['salary'] = $("#salary").val();

    $("#tab").append("<tr><td>" + singleObject['name'] + "</td><td>" + singleObject['last'] + "</td><td>" + singleObject['salary'] + "</td></tr>");

    lista.push(singleObject);

    setItem(name, singleObject);
    create_cookie( singleObject['name'], singleObject['last'], singleObject['salary'] );
}

document.querySelector("#add").addEventListener("click", rob_liste);

function setItem(name, value, storage)
{
    if( document.querySelector("#local").checked || storage == 'local' )
    {
        localStorage.setItem(name, value);
    }
    else
    {
        sessionStorage.setItem(name, value);
    }
}

function getItem(name, storage)
{
    if( storage == 'local' )
    {
        return localStorage.getItem(name);
    }
    else
    {
        return sessionStorage.getItem(name);
    }
}

function create_cookie(name, last, value)
{
    $.cookie(name, last, value);
}

function read_cookie(name)
{
    $.cookie(name);
}

function read_all_cookie()
{
    $.cookie();
}

function delete_cookie(name)
{
    $.removeCookie('name');
}


//od 9
                                        
//str 270