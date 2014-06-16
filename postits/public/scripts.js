var postitModel = {

	// var args = { idContainer : '', tagElementoPrincipal : '', idPrincipal : ''}
	atualizarIdsPostits : function(args){
		if(window.qtePostits===undefined) {
			var qtePostits = document.getElementById(args.idContainer).getElementsByTagName(args.tagElementoPrincipal);
		}else{
			qtePostits = "";
			qtePostits = document.getElementById(args.idContainer).getElementsByTagName(args.tagElementoPrincipal);
		}
		for (var y = 0; y < qtePostits.length; y++) {
			qtePostits[y].id = args.idPrincipal+y;
			qtePostits[y].getElementsByTagName('input').id='input-'+args.idPrincipal+'-'+y;
			qtePostits[y].getElementsByTagName('span').id='remover-'+args.idPrincipal+'-'+y;
		};
	},

	// var args = { idContainer : '', classBotao : '', tagElementoPrincipal : '', idElementoPrincipal : ''}
	criarRemovedorPostits : function(args){
		//TESTA E LIMPA AS VARIAVEIS
		if(window.elementos===undefined) {
			var elementos = document.getElementById(args.idContainer).getElementsByTagName('*');
		}else{
			elementos = "";
			elementos = document.getElementById(args.idContainer).getElementsByTagName('*');
		}
		//TESTA E LIMPA AS VARIAVEIS
		if (window.btsRemover===undefined) {
			var btsRemover = Array();
		} else{
			btsRemover = "";
			btsRemover = Array();
		};

		//CAPTURA BOTOES PELA CLASSE
		for (var i = 0; i < elementos.length; i++){
			if (elementos[i].className == classBotao){
				btsRemover.push(elementos[i]);
			}
		}

		//INICIO - EVENTO REMOVER
	    (function(){
	        var $imgs = btsRemover,
	            i = $imgs.length;

	        while (i--) {
	            (function($img, i){
	                $img.addEventListener("click", function(event) {
	                	//TESTA SE NAO EH O ULTIMO CAMPO
	                	alvos = document.getElementById(args.idContainer).getElementsByTagName(args.tagElementoPrincipal);
	                	if (alvos.length == 1) {
	                		alert('Não remova o último campo.');
	                		return true;
	                	};
	                	//REMOVE ELEMENTO
	                	idAlvo = args.idElementoPrincipal+i;
	                	alvo = document.getElementById(idAlvo);
	                	alvo.parentNode.removeChild(alvo);
	                }, false);
	            }($imgs[i], i));
	        }
	    }());
	    //FIM - EVENTO REMOVER
	},

	// var args = { idContainer : '', tagElementoPrincipal : '', idPrincipal : '', classBotaoRemover : ''}
	novoPostit : function(args){
		//AUTALIZA IDS
	    atualizarIdsPostits(args.idContainer,args.tagElementoPrincipal,args.idPrincipal);
		//conta elementos horario
		var qteHorarios = document.getElementById(args.idContainer).getElementsByTagName(args.tagElementoPrincipal);
		qteHorarios = qteHorarios.length;
		//duplica elementos campo e teste
		var horario = document.getElementById(args.idPrincipal+'0').getElementsByTagName('input');
		novoHorario = horario[0].cloneNode(true);
		var removedor = document.getElementById(args.idPrincipal+'0').getElementsByTagName('span');
		novoRemovedor = removedor[0].cloneNode(true);
		//atualiza id do elemento
		var novoId = parseFloat(qteHorarios);
		novoRemovedor.id = "remover-"+args.idPrincipal+"-"+novoId;
		novoHorario.id = "input-"+args.idPrincipal+"-"+novoId;
		//limpa value do novo elemento
		novoHorario.value = "";
		//escreve o novo elemento
		var novaDiv = document.createElement(args.tagElementoPrincipal);
		novaDiv.id = args.idPrincipal+novoId;
		document.getElementById(args.idContainer).appendChild(novaDiv);
		document.getElementById(args.idPrincipal+novoId).appendChild(novoHorario);
		document.getElementById(args.idPrincipal+novoId).appendChild(novoRemovedor);
		//ATUALIZA OS IDS
		atualizarIdsPostits(args.idContainer,args.tagElementoPrincipal,args.idPrincipal);
		//ATUALIZA OS BOTOES REMOVER
		criarRemovedorPostits(args.idContainer,args.classBotaoRemover,args.tagElementoPrincipal,args.idPrincipal);
	},

}

var postitController = function (model){

	//BOTOES PARA REMOVER POSTITS
	model.criarRemovedorPostits({
		idContainer : 'postits',
		classBotao : 'btn',
		tagElementoPrincipal : 'div',
		idElementoPrincipal : 'postit'
	});

	//ADICIONAR POSTIT
	var botaoAdicionarPostit = document.getElementById('adicionar-postit');
	botaoAdicionarPostit.addEventListener("click", function(){model.novoPostit({ idContainer : 'postits', tagElementoPrincipal : 'div', idPrincipal : 'postit', classBotaoRemover : 'btn'})}, true);
	
	// criarRemovedorPostits('campos-horario-segunda-volta','button','div','horario-segunda-volta');

	// var botaoAdicionarHorario = document.getElementById('adicionar-horario-segunda-volta');
	// botaoAdicionarHorario.addEventListener("click", function(){novoPostit("campos-horario-segunda-volta","div","horario-segunda-volta","button")}, true);
}


postitController(postitModel);
console.log('fim');






	//CAMPOS ITINERARIOS
// criarRemovedorPostits('campos-itinerario','button','div','itinerario');
// var botaoAdicionarItinerario = document.getElementById('adicionar-itinerario');
// botaoAdicionarItinerario.addEventListener("click", function(){novoPostit("campos-itinerario","div","itinerario","button")}, false);
// criarRemovedorPostits('campos-itinerario-volta','button','div','itinerario-volta');
// var botaoAdicionarItinerario = document.getElementById('adicionar-itinerario-volta');
// botaoAdicionarItinerario.addEventListener("click", function(){novoPostit("campos-itinerario-volta","div","itinerario-volta","button")}, false);

// //CAMPOS HORARIOS SEGUNDA
// criarRemovedorPostits('campos-horario-segunda','button','div','horario-segunda');
// var botaoAdicionarHorario = document.getElementById('adicionar-horario-segunda');
// botaoAdicionarHorario.addEventListener("click", function(){novoPostit("campos-horario-segunda","div","horario-segunda","button")}, true);
// criarRemovedorPostits('campos-horario-segunda-volta','button','div','horario-segunda-volta');
// var botaoAdicionarHorario = document.getElementById('adicionar-horario-segunda-volta');
// botaoAdicionarHorario.addEventListener("click", function(){novoPostit("campos-horario-segunda-volta","div","horario-segunda-volta","button")}, true);

	