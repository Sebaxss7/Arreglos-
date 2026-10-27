let edadesIzquierda = [12, 15];
let edadesDerecha = [20, 25];

window.onload = function() {
    pintarArregloIzquierda();
};

function agregarEdad() {
    let valorCaja = document.getElementById("edad").value;
    let edadEntera = parseInt(valorCaja);

    if (!isNaN(edadEntera)) {
        edadesIzquierda.push(edadEntera);

        pintarArregloIzquierda();
        document.getElementById("edad").value = "";
    } else {
        alert("Por favor ingrese una edad válida.");
    }
}

function pintarArregloIzquierda() {
    let tablaIzq = document.getElementById("tablaIzquierda");
    let contenido = "";
    for (let i = 0; i < edadesIzquierda.length; i++) {
        let edadActual = edadesIzquierda[i];
        contenido += "<tr>";
        contenido += "<td>" + edadActual + "</td>";
        contenido += '<td><button class="btn-eliminar" onclick="eliminarIzquierdo(' + i + ')">Eliminar</button></td>';
        contenido += '<td><button class="btn-mover">➜</button></td>';
        contenido += "</tr>";
    }
    tablaIzq.innerHTML = contenido;
}

function eliminarIzquierdo(indice) {
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
}
