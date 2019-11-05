function load(){
    var el=document.getElementById("przycisk");
    el.addEventListener("click", changeStyle, false)
}
function changeStyle(){
    var elem = document.getElementById("pstyle");
    elem.style.color="red";
    elem.style.fontFamily="Verdana";
    elem.style.fontSize="30px";
}