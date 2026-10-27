let edadesIzquierda = [12, 15];
let edadesDerecha = [20, 25];

window.onload = function() {
    pintarArregloIzquierda();
    pintarArregloDerecha();
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

function pintarArregloDerecha() {
    let tablaDer = document.getElementById("tablaDerecha");
    let contenido = "";

for (let i = 0; i < edadesDerecha.length; i++) {
        let edadActual = edadesDerecha[i];
        contenido += "<tr>";
        contenido += '<td><button class="btn-mover">⬅</button></td>';
        contenido += "<td>" + edadActual + "</td>";
        contenido += '<td><button class="btn-eliminar" onclick="eliminarDerecho(' + i + ')">Eliminar</button></td>';
        
        contenido += "</tr>";
    }

    tablaDer.innerHTML = contenido;
}

function eliminarDerecho(indice) {
    edadesDerecha.splice(indice, 1);
    pintarArregloDerecha();
}

function pintarArregloIzquierda() {
    let tablaIzq = document.getElementById("tablaIzquierda");
    let contenido = "";
    for (let i = 0; i < edadesIzquierda.length; i++) {
        let edadActual = edadesIzquierda[i];
        contenido += "<tr>";
        contenido += "<td>" + edadActual + "</td>";
        contenido += '<td><button class="btn-eliminar" onclick="eliminarIzquierdo(' + i + ')">Eliminar</button></td>';
        contenido += '<td><button class="btn-mover" onclick="moverHaciaDerecha(' + i + ')">➜</button></td>';
        contenido += "</tr>";
    }
    tablaIzq.innerHTML = contenido;
}

function moverHaciaDerecha(indice) {
    let valorMovido = edadesIzquierda[indice];
    edadesDerecha.push(valorMovido);
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}



function eliminarIzquierdo(indice) {
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
}
