// creamos las constantes globales 

const inputFoto = document.getElementById("foto")
const inputNombre = document.getElementById("nombre")
const inputMarca = document.getElementById("marca")
const InputModelo = document.getElementById("modelo")
const inputPrecio = document.getElementById("precio")
const inputKilometraje = document.getElementById("kilometraje")
const cards = document.getElementById("cont-cardss")
const addBtn = document.getElementById("agregar")


// Creamos la funcion que nos permite crear una nueva tarea a travez del formulario 
// tod etiqueta que vamos a crear es apartir d ela maqueta html pre-existente 


function createVehiculos(){


const col = document.createElement ("div");
col.classList.add ("col-md-6" , "item-vehiculo");


const altura = document.createElement("div");
altura.classList.add("card" , "h-100");

const imagen = document.createElement("img");
imagen.classList.add ("card-img-top" , "w-100");

const cuerpoTarjeta =document.createElement("div");
cuerpoTarjeta.classList.add ("card-body");

const h3 = document.createElement("h3");
h3.classList.add ("card-title");

const h4Marca = document.createElement("h4");
h4Marca.classList.add ("card-subtitle", "text-muted");


const h4Modelo = document.createElement("h4");
h4Modelo.classList.add ("card-text");

const h4Kilometraje = document.createElement("h4");
h4Kilometraje.classList.add ("card-text");

const h2 = document.createElement("h2");
h2.classList.add ("text-success");

const contentBetween = document.createElement("div");
contentBetween.classList.add ("d-flex" , "justify-content-between", "mt-3");

const botonComprar = document.createElement("button");
botonComprar.classList.add ("btn" ,  "btn-success");

const botonEliminar = document.createElement("button");
 botonEliminar.classList.add ("btn" , "btn-danger");



 // emsamblamos dentro dle nodo padre sus nodos hijos es decir la estructura de la card 

col.appendChild(altura);
altura.appendChild(imagen);
altura.appendChild(cuerpoTarjeta);
cuerpoTarjeta.appendChild(h3);
cuerpoTarjeta.appendChild(h4Marca);
cuerpoTarjeta.appendChild(h4Kilometraje);
cuerpoTarjeta.appendChild(h2);
cuerpoTarjeta.appendChild(contentBetween);
contentBetween.appendChild(botonComprar);
contentBetween.appendChild(botonEliminar);

// utilizamos el return para retornar o dar respuesta del elemto creado ya que lo usaremos en otra funcion 

return col;

}