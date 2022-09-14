import * as UI from './interfaz.js'
import API from './api.js'
UI.formularioBuscar.addEventListener('submit', buscarcancion);

function buscarcancion(e) {
    e.preventDefault();
    //Obtener datos del formulario
    const artista = document.querySelector("#artista").value;
    const cancion = document.querySelector("#cancion").value;
    if (artista === '' || cancion === '') {
        //El usuario deja los campos vacios, mostrar error
        UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.textContent = ''
            UI.divMensajes.classList.remove('error');
        }, 2000);
    }
    const busqueda = new API(artista, cancion)
    busqueda.consultarAPI();
}
