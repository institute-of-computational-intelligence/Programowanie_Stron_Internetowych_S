//*zad1
$('#zmienKolor').click(() => {
    $('#component').children('p').css('color', 'red');
    $('#component').children('div').css('color', 'blue');
    $('#component').children('.orange').css('color', 'orange');
})
//*zad 4
$('#addToFront').click(() => {
    const i = $('#zad4').children('input').val();
    $('#zad4').children('ul')
        .prepend('<li> ' +
            i + '</li>');
});
$('#addToEnd').click(() => {
    const i = $('#zad4').children('input').val();
    $('#zad4').children('ul')
        .append('<li> ' +
            i + '</li>');
});