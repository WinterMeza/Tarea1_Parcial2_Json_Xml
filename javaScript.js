function mostrar(str) {
    var Estudiante_Escogido = '';
    if (str == 'Persona_1') { Estudiante_Escogido = 'Estudiante 1'; }
    else if (str == 'Persona_2') { Estudiante_Escogido = 'Estudiante 2'; }
    else if (str == 'Persona_3') { Estudiante_Escogido = 'Estudiante 3'; }
    else if (str == 'Persona_4') { Estudiante_Escogido = 'Estudiante 4'; }
    else if (str == 'Persona_5') { Estudiante_Escogido = 'Estudiante 5'; }
    else if (str == 'Persona_6') { Estudiante_Escogido = 'Estudiante 6'; }
    else if (str == 'Persona_7') { Estudiante_Escogido = 'Estudiante 7'; }
    else if (str == 'Persona_8') { Estudiante_Escogido = 'Estudiante 8'; }
    else if (str == 'Persona_9') { Estudiante_Escogido = 'Estudiante 9'; }
    else if (str == 'Persona_10') { Estudiante_Escogido = 'Estudiante 10'; }
    else { Estudiante_Escogido = 'none'; }
    var xmlhttp;
    if (str.length == 0 || Estudiante_Escogido == 'none') {
        document.getElementById("txtInformacion").innerHTML = "No existen datos del estudiante.";
        mostrarEstudiantes(); return;
    }
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonResponse = xmlhttp.responseText;
            var objeto_json = JSON.parse(jsonResponse);
            estudianteRecibidos = objeto_json.Datos_Estudiantes.Estudiante_lista;

            for (var winter = 0; winter < estudianteRecibidos.length; winter++) {
                var nombreEstudiante = objeto_json.Datos_Estudiantes.Estudiante_lista[winter].nombre_titulo;
                if (nombreEstudiante == Estudiante_Escogido) {
                    document.getElementById("txtInformacion").innerHTML = ' Los datos del  '
                        + nombreEstudiante + ' son: ';
                    var selectEstudiantes = objeto_json.Datos_Estudiantes.Estudiante_lista[winter].datos_lista;
                    mostrarEstudiantes(selectEstudiantes);
                }
            }

        }
    }
    xmlhttp.open("GET", "json.json?nocache=' + (new Date()).getTime()");
    xmlhttp.send();
}
function mostrarEstudiantes(arrayEstudiantes) {
    var nodoMostrarResultados = document.getElementById('listaEstudiantes');
    if (!arrayEstudiantes) { nodoMostrarResultados.innerHTML = ''; return }
    var contenidosAMostrar = '';
    for (var contenido = 0; contenido < arrayEstudiantes.length; contenido++) {
        contenidosAMostrar = contenidosAMostrar + '<div id="estudiantes' + contenido + '">';
        contenidosAMostrar += arrayEstudiantes[contenido] + '</div>';
    }
    if (contenidosAMostrar) { nodoMostrarResultados.innerHTML = contenidosAMostrar; }
}