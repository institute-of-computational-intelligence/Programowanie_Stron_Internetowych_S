var data;

const inputInit = _=>
{
    const propertyNames = Object.getOwnPropertyNames(data[0]);
    var table = '<tr>';
    for(propertyName of propertyNames)
    {
        table += `<td><input class="form-control form-control-sm" id="input-${propertyName}" type="text" placeholder="${propertyName}"></td>`;
    }
    table += '</tr><tr>';
    for(propertyName of propertyNames)
    {
        table += '<td><div class="form-check my-n2">';
        table += `<input class="form-check-input" id="${propertyName}-contains" name="${propertyName}-filter-type" type="radio" checked>`;
        table += '<label class="form-check-label">Contains</label>';
        table += `<input class="form-check-input" id="${propertyName}-starts-with" name="${propertyName}-filter-type" type="radio">`;
        table += '<label class="form-check-label">Starts With</label>';
        table += `<input class="form-check-input" id="${propertyName}-ends-with" name="${propertyName}-filter-type" type="radio">`;
        table += '<label class="form-check-label">Ends With</label>';
        table += '</div></td>';
    }
    table += '</tr>';
    $("#table-input")[0].innerHTML = table;
    for(propertyName of propertyNames)
    {
        $(`#input-${propertyName}`)[0].addEventListener("keyup",_=>fillTable(filter()));
    }
}

const fillTable = source=>
{
    const propertyNames = Object.getOwnPropertyNames(data[0]);
    var table = '<thead class="thead-light"><tr>';
    for(propertyName of propertyNames)
    {
        table += `<th id="${propertyName}-collumn-header">${propertyName}</th>`;
    }
    table += '</tr></thead>';
    for(entry of source)
    {
        table += '<tr>';
        for(propertyName of propertyNames)
        {
            table += `<td>${entry[propertyName]}</td>`;
        }
        table += '</tr>';
    }
    $("#table")[0].innerHTML = table;
    for(propertyName of propertyNames)
    {
        $(`#${propertyName}-collumn-header`)[0].addEventListener("click",sortBy);
    }
};

const filter = _=>
{
    propertyNames = Object.getOwnPropertyNames(data[0]);
    const filteredData = data.filter(v =>
    {
        let bool = true;
        for(propertyName of propertyNames)
        {
            bool = bool && criteriaMet(v, propertyName);
        }
        return bool;
    });
    return filteredData;
};

const criteriaMet = (value, pName)=>
{
    if($(`#${pName}-contains`)[0].checked)
        return value[pName].toString().toLowerCase().includes($(`#input-${pName}`)[0].value.toLowerCase());
    else if($(`#${pName}-starts-with`)[0].checked)
        return value[pName].toString().toLowerCase().startsWith($(`#input-${pName}`)[0].value.toLowerCase());
    else if($(`#${pName}-ends-with`)[0].checked)
        return value[pName].toString().toLowerCase().endsWith($(`#input-${pName}`)[0].value.toLowerCase());
};

const sortBy = e=>
{
    const pName = e.srcElement.innerHTML;
    var sortedData = filter();
    sortedData = sortedData.sort((st,nd)=>
    {
        if(st[pName] < nd[pName]) return -1;
        if(st[pName] == nd[pName]) return 0;
        if(st[pName] > nd[pName]) return 1;
    });
    fillTable(sortedData);
};

window.addEventListener("load",_=>
{
    const url = "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json"
    $("#get-data").click(_=>
    {
        fetch(url)
        .then(response => 
        {
            response.json().then(json => 
            {
                data = json;
                fillTable(data);
                inputInit();
            });
        });
    });

    $("#get-data-better").click(async _=>
    {
        const response = await fetch(url);
        data = await response.json();
        fillTable(data);
        inputInit();
    });

    $("#get-data-worse").click(async _=>
    {
        $.getJSON(url,response=>{
            data = response;
            fillTable(data);
            inputInit();
        }); 
    });


    (async _=>
    {
        const response = await fetch(url);
        data = await response.json()
        fillTable(data);
        inputInit();
    })();
});


