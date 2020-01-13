function setItem(name, value, storage) {
    storage.setItem(name, value, storage);
}

function getItem(name, storage) {
    return storage.getItem(name)
}

function displayUl(list) {
    $('#list').html('')
    for (let i = 0; i < list.length; ++i)
        $('#list').append(`<li class="list-group-item">${list[i][0].value} ${list[i][1].value} ${list[i][2].value}</li>`)
}

function addSomeInfo(db, message) {
    console.log(message)
    // Start a database transaction and get the notes object store
    let tx = db.transaction(['Persons'], 'readwrite');
    let store = tx.objectStore('Persons');
    // Put the sticky note into the object store
    let note = {
        name: message.name,
        value: message.value
    };
    store.add(note);
    // Wait for the database transaction to complete
    tx.oncomplete = function () {
        console.log('stored person!')
    }
    tx.onerror = function (event) {
        alert('error storing person ' + event.target.errorCode);
    }
}

let list = []
$(document).ready(() => {
    let db;
    let dbReq = indexedDB.open('db', 1);
    dbReq.onupgradeneeded = function (event) {
        // Set the db variable to our database so we can use it!  
        db = event.target.result;

        // Create an object store named notes. Object stores
        // in databases are where data are stored.
        let persons = db.createObjectStore('Persons', {
            autoIncrement: true
        });
    }
    dbReq.onsuccess = function (event) {
        db = event.target.result;
    }
    dbReq.onerror = function (event) {
        alert('error opening database ' + event.target.errorCode);
    }

    $("#form").on('submit', e => {
        e.preventDefault()
        let data = $('#form').serializeArray()
        data.forEach(element => {
            setItem(element.name, element.value, localStorage)
            setItem(element.name, element.value, sessionStorage)
        });
        list.push(data)
        displayUl(list)

        addSomeInfo(db, data)
    })
})