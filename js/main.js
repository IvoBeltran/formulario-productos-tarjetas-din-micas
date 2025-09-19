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


function createVehiculos(foto, nombre, marca, modelo, precio, kilometraje){

const col = document.createElement("div");
col.classList.add ("col-md-6" , "item-vehiculo");


const altura = document.createElement("div");
altura.classList.add("card" , "h-100");

const imagen = document.createElement("img");
imagen.classList.add ("card-img-top" , "w-100");
imagen.setAttribute("src" , foto )

const cuerpoTarjeta =document.createElement("div");
cuerpoTarjeta.classList.add ("card-body");

const h3 = document.createElement("h3");
h3.classList.add ("card-title");
h3.textContent = nombre 

const h4Marca = document.createElement("h4");
h4Marca.classList.add ("card-subtitle", "text-muted");
h4Marca.textContent = marca


const h4Modelo = document.createElement("h4");
h4Modelo.classList.add ("card-text");
h4Modelo.textContent = 'Modelo:' + modelo



const h4Kilometraje = document.createElement("h4");
h4Kilometraje.classList.add ("card-text");
h4Kilometraje.textContent = 'Km:' + kilometraje

const h2 = document.createElement("h2");
h2.classList.add ("text-success");
h2.textContent= 'Precio:' + precio

const contentBetween = document.createElement("div");
contentBetween.classList.add ("d-flex" , "justify-content-between", "mt-3");

const botonComprar = document.createElement("button");
botonComprar.classList.add ("btn" ,  "btn-success");
botonComprar.textContent='comprar'

const botonEliminar = document.createElement("button");
 botonEliminar.classList.add ("btn" , "btn-danger");
 botonEliminar.textContent='eliminar'



 // emsamblamos dentro dle nodo padre sus nodos hijos es decir la estructura de la card 

col.appendChild(altura);
altura.appendChild(imagen);
altura.appendChild(cuerpoTarjeta);
cuerpoTarjeta.appendChild(h3);
cuerpoTarjeta.appendChild(h4Marca);
cuerpoTarjeta.appendChild(h4Modelo);
cuerpoTarjeta.appendChild(h4Kilometraje);
cuerpoTarjeta.appendChild(h2);

cuerpoTarjeta.appendChild(contentBetween);
contentBetween.appendChild(botonComprar);
contentBetween.appendChild(botonEliminar);

// utilizamos el return para retornar o dar respuesta del elemto creado ya que lo usaremos en otra funcion 

return col;

}

const form = document.getElementById("vehiculo-form");

form.addEventListener('submit' , (e) => {
    e.preventDefault(); //Evita que se recargue 

    const foto = inputFoto.value.trim();
    const nombre = inputNombre.value.trim();
    const marca = inputMarca.value.trim();
    const modelo = InputModelo.value.trim();
    const precio = inputPrecio.value.trim();
    const kilometraje = inputKilometraje.value.trim();




    if(foto==""|| nombre=="" || marca=="" || modelo=="" || precio=="" || kilometraje=="" ){
        alert("Informacion incompleta, llene todos los datos")
    }else{
        const newCol = createVehiculos(foto, nombre, marca, modelo, precio, kilometraje);
        cards.appendChild(newCol);
        inputFoto.value="";
        inputNombre.value="";
        inputMarca.value="";
        InputModelo.value="";
        inputPrecio.value="";
        inputKilometraje.value="";

    }

})