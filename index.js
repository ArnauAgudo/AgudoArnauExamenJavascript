// Imprime "Hello, world!" en la consola
console.log("Hello, world!");

// Array de objetos que representan cartas, cada una con un nombre y un enlace a una imagen
const arrayCartas = [
  {
    nombre: "0_blue",
    link: "0_blue.png",
  },
  {
    nombre: "0_green",
    link: "0_green.png",
  },
  {
    nombre: "0_red",
    link: "0_red.png",
  },
  {
    nombre: "0_yellow",
    link: "0_yellow.png",
  },
  {
    nombre: "1_blue",
    link: "1_blue.png",
  },
  {
    nombre: "1_green",
    link: "1_green.png",
  },
  {
    nombre: "1_red",
    link: "1_red.png",
  },
  {
    nombre: "1_yellow",
    link: "1_yellow.png",
  },
  {
    nombre: "2_blue",
    link: "2_blue.png",
  },
  {
    nombre: "2_green",
    link: "2_green.png",
  },
  {
    nombre: "2_red",
    link: "2_red.png",
  },
  {
    nombre: "2_yellow",
    link: "2_yellow.png",
  },
  {
    nombre: "3_blue",
    link: "3_blue.png",
  },
  {
    nombre: "3_green",
    link: "3_green.png",
  },
  {
    nombre: "3_red",
    link: "3_red.png",
  },
  {
    nombre: "3_yellow",
    link: "3_yellow.png",
  },
  {
    nombre: "4_blue",
    link: "4_blue.png",
  },
];




const inputNumCartas = document.getElementById("numCartas");

console.log(`Numero de cartas: ${inputNumCartas.value}`);


const botonRepartir = document.querySelector(".repartir");

botonRepartir.addEventListener("click", function(){
  console.log("Se ha hecho clic en el botón 'Repartir'");
});


const tapete = document.querySelector(".tapete");

function generarCartas(numero) {
    let guardarcartas = "";

    for (let i = 0; i < numero; i++) {
        const carta = arrayCartas[i % arrayCartas.length]; 
        guardarcartas += `
        <div class="carta">
            <img src="imagenes/${carta.link}" alt="${carta.nombre}">
        </div>
        `;
    }
    tapete.innerHTML = guardarcartas;
}
for(let i = 0; i < arrayCartas.length; i++){
    botonRepartir.addEventListener("click", function() {
        const numeroCartas = parseInt(inputNumCartas.value, 10); 
        generarCartas(numeroCartas);
        
      });
}
const carta = document.querySelector(".carta");

 carta.addEventListener("click", function(){
    carta.classlist.add(".seleccionada")
});

const divSeleccionada = document.querySelector(".carta-seleccionada .carta");
const imgSeleccionada = document.querySelector("img"); 

divSeleccionada.addEventListener("click", function(){
    divSeleccionada.classList.remove(".seleccionada");
}
);


