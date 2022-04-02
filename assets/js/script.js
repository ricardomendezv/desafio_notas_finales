
const mensajes = ["HTML", "CSS", "JS"];
const elementos = [['notaUnoHTML', 'notaDosHTML', 'notaTresHTML'], ['notaUnoCSS', 'notaDosCSS', 'notaTresCSS'], ['notaUnoJS', 'notaDosJS', 'notaTresJS']]

for (let indexTipo = 0; indexTipo < elementos.length; indexTipo++) {
    let tipo = mensajes[indexTipo];
    for (let index = 1; index < 4; index++) {
        let nota = prompt('Ingresa nota ' + index + '[' + tipo + ']');
        let elemento = document.getElementById(elementos[indexTipo][index - 1])
        elemento.innerHTML = nota;
    }
}

