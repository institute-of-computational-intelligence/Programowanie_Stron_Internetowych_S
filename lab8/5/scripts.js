$( "#bttn" ).click(downloadData);

  async function downloadData(){
    console.log("Start Download")
    let response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    let data = await response.json()
    console.log(data)
    console.log("Data downloaded sucessfully")
  }
