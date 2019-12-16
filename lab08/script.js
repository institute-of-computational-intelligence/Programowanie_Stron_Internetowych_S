var gridDate2 = [];
var gridDate3 = [];

addEventListener('load', async (sender) => {
    var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    gridDate2 = await response.json()
    console.log(gridDate2)
    for(i = 0; i < gridDate2.length;i++){
        gridDate2[i]['id'] = i+1;
    }
    console.log(gridDate2);
    addHeader(gridDate2);
    add(gridDate2);
    a();
});

function addHeader(gridDate){
    var element = document.getElementById("choose");
    var row = [8];
    var object = Object.keys(gridDate[0]);
    row[0] = document.createElement("th");
    row[0].innerHTML = "#";
    row[0].scope = "col";
    element.appendChild(row[0]);
    for(i = 1; i<8;i++){
        row[i] = document.createElement("th");
        row[i].innerHTML = object[i-1];
        row[i].scope = "col";
        element.appendChild(row[i]);
    }
}

function add(gridDate) {
    var element = document.getElementById("tableAdd");
    element.innerHTML = "";
    for (i = 0; i < gridDate.length; i++) {
        var row = document.createElement("tr");
        var number = document.createElement("th");
        var col = [7];
        
        var id = Object.keys(gridDate[0]);
        console.log(id);
        //var id = ['title', 'type', 'description', 'height', 'width', 'price', 'rating'];
        for (j = 0; j < 7; j++) {
            col[j] = document.createElement("td");
            col[j].innerHTML = gridDate[i][id[j]];
        }
        number.innerHTML = gridDate[i]['id'];

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

var bool = [true, true, true, true, true, true, true];

function sortMy(n) {
    if (gridDate3.length == 0) {
        gridDate3 = gridDate2;
    }
    console.log(n);
    switch (n) {
        case 0:
            if (bool[0] == true) {
                var grid = gridDate3.sort((a, b) => a.id !== b.id ? a.id < b.id ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.id !== b.id ? a.id < b.id ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 0) { bool[i] = false; }
            }
            break;
        case 1:
            if (bool[0] == true) {
                var grid = gridDate3.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.title !== b.title ? a.title < b.title ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 0) { bool[i] = false; }
            }
            break;
        case 2:
            if (bool[1] == true) {
                var grid = gridDate3.sort((a, b) => a.type !== b.type ? a.type < b.type ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.type !== b.type ? a.type < b.type ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 1) { bool[i] = false; }
            }
            break;
        case 3:
            if (bool[2] == true) {
                var grid = gridDate3.sort((a, b) => a.description !== b.description ? a.description < b.description ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.description !== b.description ? a.description < b.description ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 2) { bool[i] = false; }
            }
            break;
        case 4:
            if (bool[3] == true) {
                var grid = gridDate3.sort((a, b) => a.height !== b.height ? a.height < b.height ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.height !== b.height ? a.height < b.height ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 3) { bool[i] = false; }
            }
            break;
        case 5:
            if (bool[4] == true) {
                var grid = gridDate3.sort((a, b) => a.width !== b.width ? a.width < b.width ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.width !== b.width ? a.width < b.width ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 4) { bool[i] = false; }
            }
            break;
        case 6:
            if (bool[5] == true) {
                var grid = gridDate3.sort((a, b) => a.price !== b.price ? a.price < b.price ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.price !== b.price ? a.price < b.price ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 5) { bool[i] = false; }
            }
            break;
        case 7:
            if (bool[6] == true) {
                var grid = gridDate3.sort((a, b) => a.rating !== b.rating ? a.rating < b.rating ? -1 : 1 : 0);
            } else {
                var grid = gridDate3.sort((a, b) => a.rating !== b.rating ? a.rating < b.rating ? 1 : -1 : 0);
            }
            add(grid);
            for (i = 0; i < 7; i++) {
                if (i != 6) { bool[i] = false; }
            }
            break;
    }
    for (i = 0; i < 7; i++) {
        if (bool[i] == true) { bool[i] = false; } else { bool[i] = true; }
    }
}

const a = () =>{
let tab = Array.from(document.getElementById("choose").children);
for(let i = 0; i<tab.length; i++){
    tab[i].addEventListener('click', () => sortMy(i));
    
}};