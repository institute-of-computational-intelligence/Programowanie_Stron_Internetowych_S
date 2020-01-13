var dataArr = [];

function displayUI() {
    $('#list').html('')
    console.log(dataArr)
    for (let i = 0; i < dataArr.length; i++)
        $('#list').append(`<li class="list-inline-item">firstName: ${dataArr[i].firstName} lastName: ${dataArr[i].lastName} salary: ${dataArr[i].salary}</li>`)
}

function addBtn()
{
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var salary = $("#salary").val();
    var data = {
        firstName: firstName,
        lastName: lastName,
        salary: salary,
    };
    dataArr.push(data);
    displayUI();
    console.log(dataArr);
    setItem("lastName", data.lastName, localStorage);
    console.log(getItem("lastName", localStorage));
    setItem("lastName", data.lastName, sessionStorage);
    console.log(getItem("lastName", sessionStorage));
    setItem("lastName", data.lastName, Cookies);
    console.log(getItem("lastName", Cookies));
}

function setItem(name, value, storage) {
    storage.setItem(name, value);
}

function getItem(name, storage) {
    return storage.getItem(name);
}

document.getElementById("add-btn").addEventListener("click", addBtn);

