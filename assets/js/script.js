
const mensajes = ["HTML", "CSS", "JS"];
const elementos = [['notaUnoHTML', 'notaDosHTML', 'notaTresHTML'], ['notaUnoCSS', 'notaDosCSS', 'notaTresCSS'], ['notaUnoJS', 'notaDosJS', 'notaTresJS'], ['promedioHTML', 'promedioCSS', 'promedioJS']];
let sumas = [[], [], []];
let promedios = [];
let elemento, suma = 0;
//Petición masiva de notas e impresión en página web.
for (let indexTipo = 0; indexTipo < elementos.length - 1; indexTipo++) {
    let tipo = mensajes[indexTipo];
    for (let index = 1; index < 4; index++) {
        let nota = prompt('Ingresa nota ' + index + '[' + tipo + ']');
        elemento = document.getElementById(elementos[indexTipo][index - 1])
        sumas[indexTipo][index - 1] = nota;
        elemento.innerHTML = nota;
    }
}
id = 0;
//Cálculo de promedios
sumas.forEach(element => {
    suma = 0;
    element.forEach(numero => {
        suma = suma + parseInt(numero);
    });
    console.log(suma);
    promedios[id] = suma / 3;
    promedios[id]=promedios[id].toFixed(2); //redondear promedio a 2 dígitos.
    id++;
});
//impresión de promedios en página web.
console.log(promedios)
indexProm = 0;
promedios.forEach(prom => {
    elemento = document.getElementById(elementos[3][indexProm])
    elemento.innerHTML = prom;
    indexProm++;
});