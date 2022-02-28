//Creamos las constantes y 1 variable para no escribir todo el rato métodos
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
let personas = [];

//función para crear la lista de personas
function crearlista() {
  document.getElementById('mostrar-lista').innerHTML = personas;

}

//función que borra la lista de personas
function borrarlista() {
  personas = [];
  document.getElementById('mostrar-lista').innerHTML = personas;
  console.log(personas);
  document.getElementById('mostrar-lista').innerHTML = "la lista de personas está vacía";

}

//evento para hacer cñick y ir añadiendo texto 
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    personas.push(text);
    const index = personas.length - 1;

    p.textContent = text;

    li.id = index;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
  document.getElementById('mostrar-lista').innerHTML = personas;
  console.log(personas);
});

//función paara añadir el botón de borrar X
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }

    // let index = personas.indexOf();
    personas.splice(item.id, 1);
    document.getElementById('mostrar-lista').innerHTML = personas;
  });

  return deleteBtn;

}