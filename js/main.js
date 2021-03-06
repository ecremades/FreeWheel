//Creamos las constantes y 1 variable para no escribir todo el rato métodos
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
let personas = [];

//función para crear el azar
function azar() {
  
  // audio
  let audio =document.getElementById ("audio");
  audio.play();
  
  var max = personas.length;
  var aleatorio = Math.floor(Math.random() * max);
  var aleatorio2 = Math.floor(Math.random() * max);
  if (aleatorio === aleatorio2){
      while (aleatorio === aleatorio2){
                      var aleatorio2 = Math.floor(Math.random() * max);
                      document.getElementById('numAleatorio2').innerHTML = personas[aleatorio2];
      }}else if (aleatorio != aleatorio2){
        document.getElementById('numAleatorio').innerHTML = personas[aleatorio];
        document.getElementById('numAleatorio2').innerHTML = personas[aleatorio2];
    }else{
      var aleatorio = Math.floor(Math.random() * max);
      document.getElementById('numAleatorio').innerHTML = personas[aleatorio];
    }

  //alert("El número es: " + aleatorio);
  console.log(aleatorio);
  /*document.getElementById('numAleatorio').innerHTML = personas[aleatorio];
  document.getElementById('numAleatorio2').innerHTML = personas[aleatorio2];*/

  if (personas.length |= 0) {
    parejas.style.display = "block";  
  }


}

//función para crear la lista de personas
function crearlista() {
  document.getElementById('mostrar-lista').innerHTML = personas;

}

//función que borra la lista de personas
function borrarlista() {
    personas = [];
   if (personas.length === 0) {
    ul.style.display = "none";
  }
  document.getElementById('mostrar-lista').innerHTML = personas;
  console.log(personas);
  document.getElementById('mostrar-lista').innerHTML = "La lista de personas está vacía";
  //audio pauses
  audio.pause();


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
    empty.style.display = "block";
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

// Función DarkMode

function darkmode() {

  document.getElementById("body").style.backgroundColor = '#261C2C';
  document.getElementById("hombre-invisible").src = './img/invisible.png'; 

  document.getElementById("container").style.backgroundColor = '#3E2C41';
}

// Función LightkMode

function lightmode() {

  document.getElementById("body").style.backgroundColor = '#2cabe0';
  document.getElementById("hombre-invisible").src = './img/smoking-azul.jpg'; 

  document.getElementById("container").style.backgroundColor = 'white';
}