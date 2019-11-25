$(document).ready(function() {
    $('#zmienKolor').click(function() {
        $('div').css('color', 'red');
        $('p').css('color', 'blue');
    });
    $('#zmienKolor2').click(function() {
        $('.orange').css('color', 'orange');
    });
    $('#begin').click(function() {
        tekst=document.getElementById("t1").value;
        $('ul').prepend('<li>'+tekst+'</li>')
    });
    $('#end').click(function() {
        tekst=$("#t1").val();
        $('ul').append('<li>'+tekst+'</li>')
    });
    $('#newdiv').click(function() {
        tekst=$("#t2").val();
        $('body').find('#mojDiv').prepend('<div><p>'+tekst+'</p></div>');
    });
    $('#find').click(function() {
        var count=$('body p').length;
        $('body p').filter(function( index ) {
            return index === count-1}).append('znalazlem');
    });
});