//Efeito de esconder o formulário de cadastro

$(document).ready(function(){
    $("#botao-cadastrar").click(function(){
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("botao-cadastrar").hide();
    });
});

