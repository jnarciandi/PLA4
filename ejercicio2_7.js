/**
 * 
 */

function suma(){
	var tamMatriz = prompt("Dime el tamaño de la matriz");
	tamMatriz = parseInt(tamMatriz);
	var matriz = [];
	var elemTotal = tamMatriz * tamMatriz;
	var contador = 0;
	var posMatriz = 0;
	var positivos = 0;
	var ceros = 0;
	var posicionLista = 0;
	var inicioFila = 0;
	var contadorFilas = 0;
	
	while (contador < elemTotal){
		matriz.push(Math.floor(Math.random() * 9)+1);
		contador++;
	}
	
	while (inicioFila < matriz.length){
		
	}
	
	
	console.log(matriz)
	console.log(tamMatriz)
	console.log(posMatriz)
	return resultado;
}