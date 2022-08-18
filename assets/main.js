/*
En este ultimo desafío general vamos a utilizar el mismo array "Pizzas🍕":

👉 Guardarlo en el local storage. 
👉 Renderizar HTML desde JS. 
👉 Renderizar en cards todas las pizzas del array (Incluir nombre, imagen, precio e ingredientes). 
👉 Crear una barra de búsqueda (input), la cual tenga la función de mostrarnos solo las pizzas cuyos nombres coincidan con la búsqueda realizada. 
*/

// Crear el array de objetos "Pizzas". 🍕
let Pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    img: "/assets/img/pizza_muzzarella.jpg",
    ingredientes: ["muzzarella", "oregano", "salsa de tomate", "aceitunas"],
    precio: 350,
  },
  {
    id: 2,
    nombre: "Napolitana",
    img: "/assets/img/pizza_napolitana.jpg",
    ingredientes: [
      "tomate en rodajas",
      " muzzarella",
      "albahaca",
      "aceite de oliva",
    ],
    precio: 450,
  },
  {
    id: 3,
    nombre: "Fugazzeta",
    img: "/assets/img/pizza_fugazzeta.jpg",
    ingredientes: ["muzzarella", "cebolla", "aceitunas"],
    precio: 500,
  },
  {
    id: 4,
    nombre: "Calabresa",
    img: "/assets/img/pizza_calabresa.jpg",
    ingredientes: ["muzzarella", "longaniza", "salsa de tomate"],
    precio: 550,
  },
  {
    id: 5,
    nombre: "Jamon y Morron",
    img: "/assets/img/pizza_jamon_y_morron.jpg",
    ingredientes: ["muzzarella", "jamon", "morron", "salsa de tomate"],
    precio: 600,
  },
  {
    id: 6,
    nombre: "Anchoas",
    img: "/assets/img/pizza_anchoas.jpg",
    ingredientes: ["salsa de tomate", "Anchoas", "oregano", "aceitunas negras"],
    precio: 650,
  },
];

const cardContainer = document.getElementById("card");
const text_busqueda = document.getElementById("text_busqueda");
const btn_buscar = document.getElementById("btn_buscar");

const filtrar = () => {
  cardContainer.innerHTML = "";

  const texto = text_busqueda.value.toLowerCase();

  for (let pizza of Pizzas) {
    let nombre = pizza.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      cardContainer.innerHTML += `
            <div class="cards">
            <img src="${pizza.img}" alt="${pizza.nombre}">
            <h2 class="titulo">${pizza.nombre}</h2>
            <p class="ingredientes">${pizza.ingredientes}</p>
            <span>$${pizza.precio}</span>
            <button class="pedirYa">Pedir Ya!</button>
        </div>
            `;
    } /*else if (text_busqueda === "") {
      alert("Producto no disposible");
    }*/
  }
  if (cardContainer.innerHTML === "") {
    cardContainer.innerHTML += `
        <img src="/assets/img/pizza_not_found.png"  alt="pizzaNotFound">
        `;
  }
  saveLocalStorage();
};

btn_buscar.addEventListener("click", filtrar);

function saveLocalStorage() {
  localStorage.setItem("variedades", JSON.stringify(Pizzas));
}
