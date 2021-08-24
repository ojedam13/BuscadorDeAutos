//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // muestra los autos al cargar

    //llena las opciones del años
    llenarSelect();
})



//Funciones

function mostrarAutos() {
    autos.forEach(auto => {

        const { marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('p');

        autoHtml.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
    

        //insertar en el html
        resultado.appendChild(autoHtml);
    });
}

//Genera los años del select

function llenarSelect() {
    for (let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega las opciones del año a select
    }
}