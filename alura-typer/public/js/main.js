
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);


var campo = $(".campo-digitacao");

campo.on("input", function(){
	
   var campo = $(this).val();
   
   var conteudoSemEspaco = campo.replace(/\s+/g, '').length;//replace para retirar os espaços "tab"
   
   $(".contador-caracteres").text(conteudoSemEspaco);
	
	
   //Quantidade de palavras
   var qtdPalavras = campo.split(/\S+/).length -1;
   $(".contador-palavras").text(qtdPalavras);
		 
});
campo.on("click", Function(){
		
	alert("clicou!!!)	
		
		
		
});


/* Outra forma usando Fuction() 

function atualiza(){
	
   var campo = $(this).val();
   
   var conteudo = campo.length;
   $(".contador-caracteres").text(conteudo);
	
   var qtdPalavras = campo.split(/\S+/).length -1;
	$(".contador-palavras").text(qtdPalavras);	
}

$(".contador-palavras").on("input",atualiza);
*/