var gridDataFetch = [];
var butt = document.getElementById("butt");

butt.addEventListener("click", async function() {
  // fetch promise
  //   fetch(
  //     "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json"
  //   )
  //     .then(response => {
  //       response.json().then(json => {
  //         gridDataFetch = json;
  //         console.log("data downloaded by fetch");
  //         console.log(gridDataFetch);
  //       });
  //     })
  //     .catch(err => console.error(err));

  //   // fetch await
  try {
    var response = await fetch(
      "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json"
    );
    gridDataFetch = await response.json();
    console.log("data downloaded by fetch await");
    console.log(gridDataFetch);
  } catch (error) {
    console.error(error);
  }

  //   fetch ajax
  //   $.ajax({
  //     url:
  //       "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
  //     dataType: "json",
  //     method: "get"
  //   }).done(res => console.log(res));

  // create table
  var $table = $("<table>");
  // caption
  $table
    .append("<caption>Product</caption>")
    // thead
    .append("<thead>")
    .children("thead")
    .append("<tr />")
    .children("tr")
    .append("<th>A</th><th>B</th><th>C</th><th>D</th>");

  //tbody
  var $tbody = $table.append("<tbody />").children("tbody");

  // add row
  $tbody
    .append("<tr />")
    .children("tr:last")
    .append("<td>val</td>")
    .append("<td>val</td>")
    .append("<td>val</td>")
    .append("<td>val</td>");

  // add another row
  $tbody
    .append("<tr />")
    .children("tr:last")
    .append("<td></td>")
    .append("<td>val</td>")
    .append("<td>val</td>")
    .append("<td>val</td>");

  // add table to dom
  $table.appendTo("#table-here");
});
