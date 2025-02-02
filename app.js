let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    input.value = "";

    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indice];

    document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${ganador} 🎉`;
}
