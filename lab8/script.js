var button = document.querySelector("#getData");

button.addEventListener('click', async () => {
    const response = await fetch('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
})
