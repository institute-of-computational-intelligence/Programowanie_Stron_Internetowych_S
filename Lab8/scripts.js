$('#getData').click(async (e) => {
    try {
        var response = await fetch('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json')
        gridDataFetch = await response.json()
        console.log('Data dwonloaded by fetch');
        console.log(gridDataFetch);

    } catch (err) { console.error(err) };
})

$('#getData').click(async (e) => {
    try {
        var ajax = await $.ajax('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json')
        console.log('Data dwonloaded by ajax');
        console.log(ajax);

    } catch (err) { console.error(err) };
})

$('#getData').click(async (e) => {
    try {
        var get = await $.get('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json')
        console.log('Data dwonloaded by get');
        console.log(get);

    } catch (err) { console.error(err) };
})

$('#getData').click(async (e) => {
    try {
        var response = await fetch('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json')
        gridDataFetch = await response.json()
        

    } catch (err) { console.error(err) };
})