const table = document.getElementById("table");

let filterType = 0;
let searchString = "";
let data = [];
let sortProperty = "";
let ascDescBool = false;

function descSort(a, b) {
  if (a[sortProperty] < b[sortProperty]) {
    return -1;
  }
  if (a[sortProperty] > b[sortProperty]) {
    return 1;
  }
  return 0;
}

function ascSort(a, b) {
  if (a[sortProperty] > b[sortProperty]) {
    return -1;
  }
  if (a[sortProperty] < b[sortProperty]) {
    return 1;
  }
  return 0;
}
const fillTable = () => {
  table.innerHTML = "";

  switch (filterType) {
    case 0:
      dataTemp = data.filter(x =>
        x.title.toLowerCase().includes(searchString.toLowerCase())
      );
      break;
    case 1:
      dataTemp = data.filter(x =>
        x.title.toLowerCase().startsWith(searchString.toLowerCase())
      );
      break;
    case 2:
      dataTemp = data.filter(x =>
        x.title.toLowerCase().endsWith(searchString.toLowerCase())
      );
      break;
  }

  if (sortProperty != "") {
    if (ascDescBool == true) {
      dataTemp.sort(ascSort);
      ascDescBool = !ascDescBool;
    } else {
      dataTemp.sort(descSort);
      ascDescBool = !ascDescBool;
    }
  }

  for (var i = 0; i < dataTemp.length; i++) {
    let node = document.createElement("tr");
    table.appendChild(node);
    Array.from(document.getElementById("tableColumns").children).forEach(e => {
      const elName = e.innerHTML.toLowerCase();
      let child = document.createElement("td");
      if (elName != "#") {
        child.innerText = dataTemp[i][elName];
      } else {
        child.innerText = i + 1;
      }
      node.appendChild(child);
    });
  }
};

const getData = async e => {
  response = await fetch(
    "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json"
  );
  data = await response.json();

  fillTable();
};

//document.getElementById("getData").addEventListener('click', getData)

window.onload = () => {
  getData();
};

const inputChanged = e => {
  searchString = e.target.value;
  fillTable();
};

document.getElementById("filterInput").addEventListener("keyup", inputChanged);

const changeFilterType = e => {
  filterType = Number(e.target.options[e.target.selectedIndex].value);
  fillTable();
};

document
  .getElementById("filterType")
  .addEventListener("change", changeFilterType);

const customSort = (text, element) => {
  if (sortProperty != text) {
    Array.from(document.getElementById("tableColumns").children).forEach(
      element => {
        element.style.color = "#FFFFFF";
      }
    );

    ascDescBool = false;
  }

  if (ascDescBool == false) element.style.color = "#00FF008F";
  else element.style.color = "#FF00008F";
  sortProperty = text;
  fillTable();
};

Array.from(document.getElementById("tableColumns").children).forEach(
  element => {
    if (element.innerHTML.toLowerCase() != "#")
      element.addEventListener("click", () =>
        customSort(element.innerHTML.toLowerCase(), element)
      );
  }
);
