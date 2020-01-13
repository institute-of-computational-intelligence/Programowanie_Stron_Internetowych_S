window.addEventListener('load',_=>
{
    $('#btn')[0].addEventListener('click',_=>
    {
        let content = "";
        content += `<li>First Name: ${$('input')[0].value}</li>`;
        content += `<li>Last Name: ${$('input')[1].value}</li>`;
        content += `<li>Salary: ${$('input')[2].value}</li>`;
        $('#list')[0].innerHTML = content;
    });
});

const setItem = (name,value,storage)=>
{
    storage[name] = value;
}

const getItem = (name,storage)=>
{
    return storage[name];
}

const setCookie = (name, value)=>
{
    Cookies.set(name,value);
}

const getCookie = (name)=>
{
    return Cookies.get(name);
}
