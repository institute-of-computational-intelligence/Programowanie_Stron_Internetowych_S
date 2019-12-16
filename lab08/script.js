var gridDate2 = [];
var gridDate3 = [];

addEventListener('load', async(sender) => {
    var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    gridDate2 = await response.json()
    console.log(gridDate2)
    add(gridDate2);
});

function add(gridDate) {
    var element = document.getElementById("tableAdd");
    element.innerHTML = "";
    for (i = 0; i < gridDate.length; i++) {
        var row = document.createElement("tr");
        var number = document.createElement("th");
        var col = [7];
        var id = ['title', 'type', 'description', 'height', 'width', 'price', 'rating'];
        for (j = 0; j < 7; j++) {
            col[j] = document.createElement("td");
            col[j].innerHTML = gridDate[i][id[j]];
        }
        number.innerHTML = i + 1;

        row.appendChild(number);
        for (j = 0; j < id.length; j++) {
            row.appendChild(col[j]);
        }
        element.appendChild(row);
    }
}

document.getElementById("filter").addEventListener('input', filtrowanie);

function filtrowanie() {
    var list = document.getElementById("inputGroupSelect01");
    var nubmerChoose = list.options[list.selectedIndex].value;
    var value = filter.value.toLowerCase();
    switch (nubmerChoose) {
        case '1':
            grid = gridDate2.filter(x => x.title.toLowerCase().includes(value));
            break;

        case '2':
            grid = gridDate2.filter(x => x.title.toLowerCase().startsWith(value));
            break;

        case '3':
            grid = gridDate2.filter(x => x.title.toLowerCase().endsWith(value));
            break;
    }
    gridDate3 = grid;
    add(grid);
}

var bool = true;

function sort(n) {
    if (gridDate3.length == 0) {
        gridDate3 = gridDate2;
    }
    switch (n) {
        case 1:
            if (bool == true) {
                var grid = gridDate3.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.title !== b.title ? a.title < b.title ? 1 : -1 : 0);
            }
            add(grid);
            break;
        case 2:
            if (bool == true) {
                var grid = gridDate3.sort((a, b) => a.type !== b.type ? a.type < b.type ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.type !== b.type ? a.type < b.type ? 1 : -1 : 0);
            }
            add(grid);
            break;
        case 3:
            if (bool == true) {
                var grid = gridDate3.sort((a, b) => a.description !== b.description ? a.description < b.description ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.description !== b.description ? a.description < b.description ? 1 : -1 : 0);
            }
            add(grid);
            break;
        case 4:
            if (bool == true) {
                var grid = gridDate3.sort((a, b) => a.height !== b.height ? a.height < b.height ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.height !== b.height ? a.height < b.height ? 1 : -1 : 0);
            }
            add(grid);
            break;
        case 5:
            if (bool == true) {
                var grid = gridDate3.sort((a, b) => a.width !== b.width ? a.width < b.width ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.width !== b.width ? a.width < b.width ? 1 : -1 : 0);
            }
            add(grid);
            break;
        case 6:
            if (bool == true) {
                var grid = gridDate3.sort((a, b) => a.price !== b.price ? a.price < b.price ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.price !== b.price ? a.price < b.price ? 1 : -1 : 0);
            }
            add(grid);
            break;
        case 7:
            if (bool == true) {
                var grid = gridDate3.sort((a, b) => a.rating !== b.rating ? a.rating < b.rating ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.rating !== b.rating ? a.rating < b.rating ? 1 : -1 : 0);
            }
            add(grid);
            break;
    }
    if (bool == true) { bool = false; } else { bool = true; }
}