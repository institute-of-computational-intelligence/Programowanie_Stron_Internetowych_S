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
    $('#obramowanie').click(function() {
        $('body').find('#mojZnacznik').parent().css('border-style','solid');
    });
    $('#zmienKolor3').click(function() {
        $('h1').siblings().css('color', 'green');
        $('h1').css('color', 'green');
    });
    $('#show').click(function() {
        $('#mojDiv').show();
        $('#show').hide();
        $('#hide').show();
    });
    $('#show').hide();
    $('#hide').click(function() {
        $('#mojDiv').hide();
        $('#hide').hide();
        $('#show').show();
    });
    $('.module-toggle').on('click', function() {
        $(this).prev().fadeToggle();
    });
    $('.module-toggle2').on('click', function() {
        const $btn = $(this);
    
        $(this).prev().slideToggle(function() {
            //this tutaj wskazuje na element zwijany
    
            //sprawdzam czy tekst po zwinięciu/rozwinięciu jest widoczny
            if ($(this).is(':visible')) {
                $btn.text('Ukryj treść');
            } else {
                $btn.text('Pokaż treść');
            }
        });
    });
});