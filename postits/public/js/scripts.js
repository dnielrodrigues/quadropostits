var postitModel = {

	/* ARGUMENTOS PARA A FUNCAO
	var args = {
		idContainer : '',
		tagElementoPrincipal : '',
		idPrincipal : ''
	}
	*/
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

	/* ARGUMENTOS PARA A FUNÇÃO
	var args = {
		idContainer : '',
		classBotao : '',
		tagElementoPrincipal : '',
		idElementoPrincipal : ''
	}
	*/
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
			if (elementos[i].className == args.classBotao){
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
	    this.atualizarIdsPostits({
			idContainer : args.idContainer,
			tagElementoPrincipal : args.tagElementoPrincipal,
			idPrincipal : args.idPrincipal
		});
		//conta elementos
		var qteElementos = document.getElementById(args.idContainer).getElementsByTagName(args.tagElementoPrincipal);
		qteElementos = qteElementos.length;
		//duplica elementos
		var postit = document.getElementById(args.idPrincipal+'0').getElementsByTagName('textarea');
		novoElemento = postit[0].cloneNode(true);
		var removedor = document.getElementById(args.idPrincipal+'0').getElementsByTagName('button');
		novoRemovedor = removedor[0].cloneNode(true);
		//atualiza id do elemento
		var novoId = parseFloat(qteElementos);
		novoRemovedor.id = "remover-"+args.idPrincipal+"-"+novoId;
		novoElemento.id = "entrada-"+args.idPrincipal+"-"+novoId;
		//limpa value do novo elemento
		novoElemento.value = "";
		//escreve o novo elemento
		var novaDiv = document.createElement(args.tagElementoPrincipal);
		novaDiv.id = args.idPrincipal+novoId;
		novaDiv.className = "postit col-md-4";
		document.getElementById(args.idContainer).appendChild(novaDiv);
		document.getElementById(args.idPrincipal+novoId).appendChild(novoElemento);
		document.getElementById(args.idPrincipal+novoId).appendChild(novoRemovedor);
		//ATUALIZA OS IDS
		this.atualizarIdsPostits({
			idContainer : args.idContainer,
			tagElementoPrincipal : args.tagElementoPrincipal,
			idPrincipal : args.idPrincipal
		});
		//ATUALIZA OS BOTOES REMOVER
		this.criarRemovedorPostits({
			idContainer : 'postits',
			classBotao : 'btn',
			tagElementoPrincipal : 'div',
			idElementoPrincipal : 'postit'
		});
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
	
	// criarRemovedorPostits('campos-Elemento-segunda-volta','button','div','Elemento-segunda-volta');

	// var botaoAdicionarElemento = document.getElementById('adicionar-Elemento-segunda-volta');
	// botaoAdicionarElemento.addEventListener("click", function(){novoPostit("campos-Elemento-segunda-volta","div","Elemento-segunda-volta","button")}, true);
}

postitController(postitModel);


	