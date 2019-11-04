

function showTime(){
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById("one").innerHTML = n;
}

function getBack(){
    document.getElementById("one").innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
}



/*
function changeImg(){
    urlimg = document.getElementById("img_url").value;
    console.log(urlimg);
}

changeImg();


function goToPage() {
    var input = document.getElementById('img_url').value
    var img = document.getElementById('obrazek');
    img.src = input;
}
*/

/*
document.getElementById("changetxt").addEventListener("click", function(){
    document.getElementById("paragraph").style.color = "orange";
    document.getElementById("paragraph").style.fontSize = "28px";
    document.getElementById("paragraph").style.fontFamily = "Impact,Charcoal,sans-serif";

});
*/

