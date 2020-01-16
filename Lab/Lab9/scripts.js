$(document).ready(function(){

    $.cookie('name', 'value', { expires: 7, path: '/' });
    console.log($.cookie())
})