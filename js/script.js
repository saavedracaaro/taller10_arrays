// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función para el array muestre sus elementos
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = ""; // Limpiar el contenido previo

  // Filtrar los elementos en solo tipo String
  const stringsOnly = array
    .filter(element => typeof element === 'string') // Filtrar solo strings
    .sort(); // Ordenar alfabéticamente

  // Agregar los elementos filtrados a la lista
  stringsOnly.forEach(element => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showList(strangeArray); // Llamar a la función para mostrar los elementos
});