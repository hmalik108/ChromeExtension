$(function(){
    $('#name').keyup(function(){
        $('#greeting').text('Hello, '+$('#name').val() + '!');
    });
});