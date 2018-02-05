var frase = $(".frase").text();

var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase").text(numPalavras);



$(".campo-digitacao").click(function(){
	var pegaTexto=$(this).val().length;
	
	var palavras = $(this).text();
	var pegaPalavras = palavras.split(" ").length;
	
	console.log(pegaPalavras);
   
	$("#contador-caracteres").text(pegaTexto);
	$("#contador-palavras").text(pegaPalavras);

});