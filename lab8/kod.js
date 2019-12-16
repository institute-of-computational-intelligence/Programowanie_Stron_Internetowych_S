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

$ (document).ready (function () {
  $ ('.btn.btn-primary').click (async function () {
    $.ajax ({
      url: 'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json',
    }).done (function (z) {
      console.log (z);
    });
  });
});
