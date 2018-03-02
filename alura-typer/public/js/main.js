var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
	
	$("#botao-reiniciar").on("click",reiniciarJogo);
});

function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numPalavras = frase.split(" ").length;

	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);
}


function inicializaContadores(){
	
	  campo.on("input", function(){
	   var campo = $(this).val();
        
	   var conteudoSemEspaco = campo.replace(/\s+/g, '').length;//replace para retirar os espaços "tab"

	   $(".contador-caracteres").text(conteudoSemEspaco);

	   //Quantidade de palavras
	   var qtdPalavras = campo.split(/\S+/).length -1;
	   $(".contador-palavras").text(qtdPalavras);	
	  

	});
}

function inicializaCronometro(){
	$("#botao-reiniciar").attr("disabled", true);
	var tempoRestante = $("#tempo-digitacao").text();
	campo.one("focus", function(){
		var cronometroId = setInterval(function(){
			tempoRestante--;
			$("#tempo-digitacao").text(tempoRestante);
			if(tempoRestante < 1)
			{
				$(".campo-digitacao").attr('disabled',true);
				clearInterval(cronometroId);
				$("#botao-reiniciar").attr("disabled", false);
				campo.addClass('campo-desativado');
			}
		},1000);
	});
}

function inicializaMarcadores(){
	var frase = $(".frase").text();
	//console.log("Frase fixa: "+fraseFixa);

	campo.on("input",function(){
		var digitado = campo.val();
		var comparavel = frase.substr(0, digitado.length);

		console.log("Digitado: "+digitado);
		console.log("Comparando: "+comparavel);

		if(digitado == comparavel)
		{	
			campo.addClass('borda-verde');
			campo.removeClass('borda-vermelha');
		}
		else{
			campo.addClass('borda-vermelha');
			campo.removeClass('borda-verde');
		}

	});
}

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
	var usuario = "Ronaldo";
	var numPalavras = $(".contador-palavras").text();
	
	var linha = "<tr>"+
		            "<td>"+usuario +"</td>"+
		            "<td>"+numPalavras +"</td>"+
		         "</tr>";
	
	corpoTabela.append(linha);
}

function reiniciarJogo(){
		//location.reload();
	    inserePlacar();
		campo.attr("disabled",false);
		campo.val(" ");
	    campo.removeClass('campo-desativado');
		$(".contador-caracteres").text(0);
		$(".contador-palavras").text(0);
		$("#tempo-digitacao").text(tempoInicial);
	    campo.removeClass('borda-verde');
	    campo.removeClass('borda-vermelha');
	    
	
		inicializaCronometro();
	  
	    $("#site-loader").show();
	
	    setInterval(function(){
	        $("#site-loader").hide();		
        },5000); 
	    
}

$( ".level-1" ).find( "li" ).css( "background-color", "red" );

			
			
			


