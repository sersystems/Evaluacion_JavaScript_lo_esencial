 	
function seleccionarPrecio(opcion){
	var i = (opcion-1);
	var	vecPrecio = [2.55, 2.76, 4.30, 3.50, 6.00, 6.25, 5.89];
	var precio = vecPrecio[i].toFixed(2);
	document.getElementById("idPrecio").value = precio;
}


