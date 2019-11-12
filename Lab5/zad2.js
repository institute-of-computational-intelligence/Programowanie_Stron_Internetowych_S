
var Image = document.getElementById('zad2image');
var changeImgSourceInp = document.getElementById('changeImgSourceInp');
function changeSrcImage() {
    Image.src = changeImgSourceInp.value;

}
var ChangeSourceBtn = document.querySelector('.ChangeSourceBtn');
ChangeSourceBtn.addEventListener('click', changeSrcImage);