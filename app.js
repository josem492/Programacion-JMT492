
// paso 1: variable Array para almacenar los nombres de los amigos
let amigos = [];

// paso 2: Función para agregar un amigo a la lista
function agregarAmigo() {

  // Capturar el valor del input
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar la entrada y mostrar alerta si esta vacio
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // actualizar el array si el valor es válido
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";
  // Dentro de la funcion agregarAmigo(), al final
mostrarLista();
}

// paso 3: Función para mostrar la lista de amigos en pantalla
function mostrarLista() {

  // Obtener el elemento de la lista donde se mostrarán los amigos
  let lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Recorrer el array amigos y crear un <li> por cada nombre
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// paso 4: Función para sortear un amigo secreto
function sortearAmigo() {

  // 1. Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado en pantalla
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = " El amigo secreto es: " + amigoSorteado;

 // 5. paso adicional: Reiniciar la lista
  amigos = []; // vaciar el array
  document.getElementById("listaAmigos").innerHTML = ""; // limpiar el <ul>
}
