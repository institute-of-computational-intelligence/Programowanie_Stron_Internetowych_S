//*zad1
$('#zmienKolor').click(() => {
    $('#component').children('p').css('color', 'red');
    $('#component').children('div').css('color', 'blue');
    $('#component').children('.orange').css('color', 'orange');
})