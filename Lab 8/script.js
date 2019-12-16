
const $list = $('tbody');
var counter = 1;
const apiUrl = "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json";
$(document).ready(function () {
    $.ajax({
        url: apiUrl,
        dataType: 'json'
    })
        .done((res) => {
            //czyścimy listę przed dodaniem użytkowników
            //inaczej ponowne kliknięcie duplikowało by użytkowników na liście
            $list.empty();
            counter = 1;
            //robimy pętlę po zwróconej tablicy
            //dołączając do listy kolejne LI z imieniem i emailem użytkownika
            res.forEach(el => {
                $list.append(`<tr><td>${counter}</td><td>${el.title}</td><td>${el.type}</td><td>${el.description}</td><td>${el.filename}</td><td>${el.height}</td><td>${el.width}</td><td>${el.price}</td><td>${el.rating}</td></tr>`);
                counter += 1;
            })
        })
    $('.test-ajax').on('click', function () {
        const $btn = $(this);

        //dodajemy klasę .loading do buttona, która doda mu ikonkę ładowania
        //i wyłączamy go by użytkownik nie był nadgorliwy
        $btn.prop('disabled', true);
        $btn.addClass('loading');
        //wykonujemy połączenie
        $.ajax({
            url: apiUrl,
            dataType: 'json'
        })
            .done((res) => {
                //czyścimy listę przed dodaniem użytkowników
                //inaczej ponowne kliknięcie duplikowało by użytkowników na liście
                $list.empty();
                counter = 1;
                //robimy pętlę po zwróconej tablicy
                //dołączając do listy kolejne LI z imieniem i emailem użytkownika
                res.forEach(el => {
                    $list.append(`<tr><td>${counter}</td><td>${el.title}</td><td>${el.type}</td><td>${el.description}</td><td>${el.filename}</td><td>${el.height}</td><td>${el.width}</td><td>${el.price}</td><td>${el.rating}</td></tr>`);
                    counter += 1;
                })
            })
            .always(() => {
                //po zakończeniu wczytywania wyłączamy loading
                //i włączamy przycisk
                $btn.removeClass('loading');
                $btn.prop('disabled', false);
            });
    });
    $('#data').click(function () {
        fetch(apiUrl)
            .then(response => {
                response.json().then(json => {
                    gridDataFetch = json
                    console.log("data downloaded by fetch")
                    console.log(gridDataFetch);
                })
            })
            .catch((err) => console.error(err))
    });
    $('#data2').click(function () {
        async function fetchAsync() {
            let response = await fetch(apiUrl);
            let data = await response.json();
            return data;
        }
        fetchAsync()
            .then(data => console.log(data))
            .catch(reason => console.log(reason.message))
    });
});
