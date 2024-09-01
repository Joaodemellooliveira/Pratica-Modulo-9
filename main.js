

$('header button').click(function(){
    $('.form-container').slideDown();
});

$('#botao-cancelar').on('click', function () {
    $('.form-container').slideUp();
});

$("ul").on('mouseenter', 'li', function() {
    $(".botao-completar", this).animate({width:'toggle'},350);
});

$("ul").on('mouseleave', 'li', function() {
    $(".botao-completar", this).animate({width:'toggle'},350);
});

$('ul').on('click', 'li .botao-completar', function (e) { 
    e.preventDefault();
    $(this).prev().addClass('h2-completo');
    $(this).replaceWith(`<button type="button" title="Tarefa completa!" class="botao-completo"><img src="./Images/Done.png" alt="circulo marcado de tarfa completa"></button>`);
});

$('form').submit(function (e) { 
    e.preventDefault();
    $('ul').slideDown(350);
    const descritivoTarefa = $('#input-tarefa').val();
    const novoItem = $('<li style = "display: none"></li>');
    
    $(`<h2>${descritivoTarefa}</h2>`).appendTo(novoItem);
    $(`<button type="button" title="Tarefa completada?" class="botao-completar"><img src="./Images/Task.png" alt="circulo vazio de tarefa não completada"></button>`).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#input-tarefa').val('');
    
});