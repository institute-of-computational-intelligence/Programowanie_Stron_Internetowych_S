//zad5
// $ (document).ready (function () {
//   $ ('.btn.btn-primary').click (function () {
//     fetch (
//       'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json'
//     )
//       .then (Response => {
//         Response.json ().then (json => {
//           gridDataFetch = json;
//           console.log ('data downloaded by fetch');
//           console.log (gridDataFetch);
//         });
//       })
//       .catch (err => console.error (err));
//   });
// });

//zad6
// $ (document).ready (function () {
//   $ ('.btn.btn-primary').click (async function () {
//     let response = await fetch (
//       'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json'
//     );
//     let data = await response.json ();
//     console.log ('data downloaded by async fetch');
//     console.log (data);
//   });
// });

//zad7
// $(document).ready(function() {
//   $('.btn.btn-primary').click(async function() {
//     $.ajax({
//       url:
//         'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json',
//     }).done(function(z) {
//       let data = JSON.parse(z);
//       console.log(data);
//     });
//   });
// });

//zad8
$(document).ready(function () {
  $('.btn.btn-primary').click(async function () {
    $.ajax({
      url:
        'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json',
    }).done(function (z) {
      let data = JSON.parse(z);

      $('tr:has(td)').remove();
      // 2. get each article
      $.each(data, function (index, article) {
        // 2.2 Create table column for categories
        var td_categories = $('<td/>');
        article.index = index + 1;
        // 2.3 get each category of this article
        $.each(article.categories, function (i, category) {
          var span = $('<span/>');
          span.text(category);
          td_categories.append(span);
        });

        // 2.4 Create table column for tags
        var td_tags = $('<td/>');

        // 2.5 get each tag of this article
        $.each(article.tags, function (i, tag) {
          var span = $('<span/>');
          span.text(tag);
          td_tags.append(span);
        });

        // 2.6 Create a new row and append 3 columns (title+url, categories, tags)
        $('#added-articles').append(
          $('<tr/>')
            .append(
              $('<td/>').html(
                "<p='" + "'>" + article.index + '</p>'
              )
            )
            .append(
              $('<td/>').html(
                "<p='" + "'>" + article.title + '</p>'
              )
            )
            .append(
              $('<td/>').html(
                "<p='" + "'>" + article.type + '</p>'
              )
            )
            .append(
              $('<td/>').html(
                "<p='" + "'>" + article.description + '</p>'
              )
            )
            .append(
              $('<td/>').html(
                "<p='" + "'>" + article.filename + '</p>'
              )
            )
            .append(
              $('<td/>').html(
                "<p='" + "'>" + article.height + '</p>'
              )
            )
        );
      });

      console.log(data);
    });
  });
});
