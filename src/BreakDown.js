function main(numberToBreakDown){
	var numberLength = numberToBreakDown.length;
	var divisor = Math.pow(10 , (numberLength-1));
	
	alert("numberLength = " + numberLength);
	alert("divisor = " + divisor);
	
	breakDown(numberToBreakDown, divisor);
}

function breakDown(numberToBreakDown, divisor){
	var resultsMod = [];
	var resultsDiv = [];
	var acumuladorDivisor = divisor;
	var posicion = 0;
	
	while(parseInt(acumuladorDivisor) > 0){
		
		resultsDiv[posicion] = parseInt(numberToBreakDown / acumuladorDivisor);
		resultsMod[posicion] = numberToBreakDown % acumuladorDivisor;
		
		alert("acumuladorDivisor = " + acumuladorDivisor + "\n" +
				"numberToBreakDown = " + numberToBreakDown + "\n" + 
				"resultsMod["+ posicion + "] = " + resultsMod[posicion] + "\n" + 
				"resultsDiv["+ posicion + "] = " + resultsDiv[posicion]);
		
		numberToBreakDown = resultsMod[posicion];
		posicion++;		
		acumuladorDivisor /= 10;		
	}
	drawTable(resultsMod, resultsDiv);
}

function drawTable(resultsMod, resultsDiv){
	var fragment = document.createDocumentFragment();
	
	var tabla = document.createElement("table");
	
	var tbody = document.createElement("tbody");
	var thead = document.createElement("thead");
	   
	
	console.log(tabla);
	console.log(resultsMod.length);
	console.log(resultsDiv.length);
	
	for(var i=0; i<resultsMod.length; i++){
		var fila = document.createElement("tr");
		var celda = document.createElement("td");
		var valor= document.createTextNode(resultsMod[i]);
		
		celda.appendChild(valor);
		fila.appendChild(celda);
		tbody.appendChild(fila);
	}
	
	for(var i=0; i<resultsDiv.length; i++){
		var fila = document.createElement("tr");
		var celda = document.createElement("td");
		var valor= document.createTextNode(resultsDiv[i]);
		
		celda.appendChild(valor);
		fila.appendChild(celda);
		tbody.appendChild(fila);
	}
	
	tabla.appendChild(thead); 
	tabla.appendChild(tbody);
	
	fragment.appendChild(tabla);
	
	document.getElementById("content").appendChild(fragment);
		
	console.log(tabla);
	
}
