
const $list = $('tbody');
var counter = 1;
const apiUrl = "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json";
$(document).ready(function () {
    $.ajax({
        url: apiUrl,
        dataType: 'json'
    })
        .done((res) => {
            $list.empty();
            counter = 1;
            res.forEach(el => {
                $list.append(`<tr><td>${counter}</td><td>${el.title}</td><td>${el.type}</td><td>${el.description}</td><td>${el.filename}</td><td>${el.height}</td><td>${el.width}</td><td>${el.price}</td><td>${el.rating}</td></tr>`);
                counter += 1;
            })
        })

    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
$('th').click(function () {
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) { rows = rows.reverse() }
    for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
});
function comparer(index) {
    return function (a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
}
function getCellValue(row, index) { return $(row).children('td').eq(index).text() }

$('.test-ajax').on('click', function () {
    const $btn = $(this);
    $btn.prop('disabled', true);
    $btn.addClass('loading');
    $.ajax({
        url: apiUrl,
        dataType: 'json'
    })
        .done((res) => {
            $list.empty();
            counter = 1;
            res.forEach(el => {
                $list.append(`<tr><td>${counter}</td><td>${el.title}</td><td>${el.type}</td><td>${el.description}</td><td>${el.filename}</td><td>${el.height}</td><td>${el.width}</td><td>${el.price}</td><td>${el.rating}</td></tr>`);
                counter += 1;
            })
        })
        .always(() => {
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