let gridDataFetch;
let gridDataAsync;
let gridDataAjax;
const link =
  "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json";
//*zad5
const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  fetch(link)
    .then(response => {
      response.json().then(json => {
        gridDataFetch = json;
        console.log("data downloaded by fetch");
        console.log(gridDataFetch);
      });
    })
    .catch(err => console.log(err));
});
//*zad6
button.addEventListener("click", async function () {
  try {
    const response = await fetch(link);

    const gridDataAsync = await response.json();
    console.log(gridDataAsync);
  } catch (err) {
    console.log(err);
  }
});
//*zad7
$(function () {
  $(".btn").click(function () {
    const w = $.get(link, data,
      function (data, textStatus, jqXHR) {
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR);
      },

    );
    console.log('w :', w);
  });
});