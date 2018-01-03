    
    var alumnos = [
   	  {
    	"codigo": "001",
    	"nombre": "Roman Gomez",
        "nota": 7
      },{
    	"codigo": "002",
    	"nombre": "Guido Martin",
        "nota": 2
      },{
    	"codigo": "003",
    	"nombre": "Marcela olmos",
        "nota": 6
      },{
    	"codigo": "004",
    	"nombre": "Silvia Aguirre",
        "nota": 3
      },{
    	"codigo": "005",
    	"nombre": "Pedro Rosas",
        "nota": 1
      },{
    	"codigo": "006",
    	"nombre": "Flavia Alessi",
        "nota": 10
      },{
    	"codigo": "007",
    	"nombre": "Mario Gomez",
        "nota": 9
      },{
    	"codigo": "008",
    	"nombre": "Cristian Marquez",
        "nota": 8
      },{
    	"codigo": "009",
    	"nombre": "Cecilia Gil",
        "nota": 7
      },{
    	"codigo": "010",
    	"nombre": "Adrian Perez",
        "nota": 5
      }
    ];

    function obtenerJSON () {
    	var json = this.alumnos;
    	return json;
    }

    function mostrarAlumnos () {
    	var fila = "";
    	var json = obtenerJSON();
    	for (var i=0; i<json.length; i++) {
    		fila += '<tr><td id="idCodigo">'+json[i].codigo+'</td><td id="idNombre">'+json[i].nombre+'</td><td id="idNota">'+json[i].nota+'</td></tr>';
    	}
        document.getElementById("filaAlumno").innerHTML = fila;
    }

    function calcularPromedio () {
    	var alumnoNotaPromedio = "";
    	var nota = 0;
    	var contador = 1;
    	var json = obtenerJSON();
    	for (var i=0; i<json.length; i++) {
    		nota += json[i].nota;
    		contador += 1;
    	}
    	alumnoNotaPromedio = 'La <b>nota promedio</b> de los Alumnos es <b>'+((nota/contador).toFixed(2))+'</b>';
        document.getElementById("idNotaPromedio").innerHTML = alumnoNotaPromedio;
    }


    function calcularNotaMayor () {
    	var alumnoNotaMayor = "";
    	var notaMayor = 0;
    	var json = obtenerJSON();
    	for (var i=0; i<json.length; i++) {
			if (json[i].nota > notaMayor) {
				alumnoNotaMayor = 'El Alumno '+json[i].codigo+'-'+json[i].nombre+' tiene la <b>mayor nota('+json[i].nota+')</b> de todos los Alumnos.';
				notaMayor = json[i].nota;
			}
    	}
        document.getElementById("idNotaMayor").innerHTML = alumnoNotaMayor;
    }


    function calcularNotaMenor () {
    	var alumnoNotaMenor = "";
    	var notaMenor = 10;
    	var json = obtenerJSON();
    	for (var i=0; i<json.length; i++) {
			if (json[i].nota < notaMenor) {
				alumnoNotaMenor = 'El Alumno '+json[i].codigo+'-'+json[i].nombre+' tiene la <b>menor nota('+json[i].nota+')</b> de todos los Alumnos.';
				notaMenor = json[i].nota;
			}
    	}
        document.getElementById("idNotaMenor").innerHTML = alumnoNotaMenor;
    }