// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    // Validar que el nombre no esté ya en la lista
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista visual
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputNombre.value = '';

    // Enfocar nuevamente el input
    inputNombre.focus();
}

// Función para actualizar la visualización de la lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.setAttribute('role', 'listitem');
        
        // Agregar botón para eliminar (mejora de usabilidad)
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.className = 'button-delete';
        botonEliminar.setAttribute('aria-label', `Eliminar ${amigo}`);
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('Debe agregar al menos un amigo a la lista para realizar el sorteo');
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto seleccionado es: ${amigoSeleccionado}!`;
    li.setAttribute('role', 'listitem');
    resultado.appendChild(li);
}

// Agregar evento de teclado para el input (presionar Enter)
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});