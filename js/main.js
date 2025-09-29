// creamos las constantes globales 

const inputFoto = document.getElementById("foto")
const inputNombre = document.getElementById("nombre")
const inputMarca = document.getElementById("marca")
const InputModelo = document.getElementById("modelo")
const inputPrecio = document.getElementById("precio")
const inputKilometraje = document.getElementById("kilometraje")
const cards = document.getElementById("cont-cardss")
const addBtn = document.getElementById("agregar")
const valorTotal = document.getElementById('total');

let total = 0;


// Creamos la funcion que nos permite crear una nueva tarea a travez del formulario 
// tod etiqueta que vamos a crear es apartir d ela maqueta html pre-existente 


function createVehiculos(foto, nombre, marca, modelo, precio, kilometraje) {

    const col = document.createElement("div");
    col.classList.add("col-md-6", "item-vehiculo");


    const altura = document.createElement("div");
    altura.classList.add("card", "h-100");

    const imagen = document.createElement("img");
    imagen.classList.add("card-img-top", "w-100");
    imagen.setAttribute("src", foto)

    const cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList.add("card-body");

    const h3 = document.createElement("h3");
    h3.classList.add("card-title");
    h3.textContent = nombre

    const h4Marca = document.createElement("h4");
    h4Marca.classList.add("card-subtitle", "text-muted");
    h4Marca.textContent = marca


    const h4Modelo = document.createElement("h4");
    h4Modelo.classList.add("card-text");
    h4Modelo.textContent = 'Modelo:' + modelo



    const h4Kilometraje = document.createElement("h4");
    h4Kilometraje.classList.add("card-text2");
    h4Kilometraje.textContent = 'Km:' + kilometraje

    const h2 = document.createElement("h2");
    h2.classList.add("text-success");
    h2.textContent = 'Precio:' + precio

    const contentBetween = document.createElement("div");
    contentBetween.classList.add("d-flex", "justify-content-between", "mt-3");

    const botonComprar = document.createElement("button");
    botonComprar.classList.add("btn", "btn-success");
    botonComprar.textContent = 'comprar'

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn", "btn-danger");
    botonEliminar.textContent = 'eliminar'



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

form.addEventListener('submit', (e) => {
    e.preventDefault(); //Evita que se recargue 

    let foto = inputFoto.value.trim();
    const nombre = inputNombre.value.trim();
    const marca = inputMarca.value.trim();
    const modelo = InputModelo.value.trim();
    const precio = inputPrecio.value.trim();
    const kilometraje = inputKilometraje.value.trim();

    if (foto == "") {
        foto = 'https://img.freepik.com/vector-gratis/cargando-circulos-azul-degradado_78370-2646.jpg?semt=ais_hybrid&w=740&q=80'
    }


    if (foto == "" || nombre == "" || marca == "" || modelo == "" || precio == "" || kilometraje == "") {
        alert("Informacion incompleta, llene todos los datos");
    } else {
        const newCol = createVehiculos(foto, nombre, marca, modelo, precio, kilometraje);
        EventsToVehicles(newCol);
        cards.appendChild(newCol);

        const newVehiculo = {

            foto: foto,
            nombre: nombre,
            marca: marca,
            modelo: modelo,
            precio: precio,
            kilometraje: kilometraje
        }

        // capturamos un arreglo existente  en el localStorage  o lo creamos vacio si no existe previamente 
        const vehiculosGuardados = JSON.parse(localStorage.getItem('vehiculos')) || [];


        // Agregamos el arreglo []a cursoGuardado [] newCurso  
        vehiculosGuardados.push(newVehiculo)

        localStorage.setItem('vehiculos', JSON.stringify(vehiculosGuardados));



        inputFoto.value = "";
        inputNombre.value = "";
        inputMarca.value = "";
        InputModelo.value = "";
        inputPrecio.value = "";
        inputKilometraje.value = "";

    }




})


function EventsToVehicles(col) {

    //utilizamos QuerySelector para capturar los buttons que estan dentro de col

    const botonComprar = col.querySelector('.btn-success');
    const botonEliminar = col.querySelector('.btn-danger');

    // cuando le de en agregar 

    botonComprar.addEventListener('click', () => {
        const fotoPanel = col.querySelector('img').getAttribute('src');
        const nombrePanel = col.querySelector('.card-title').textContent;
        const marcaPanel = col.querySelector('.card-subtitle', 'text-muted').textContent;
        const modeloPanel = col.querySelector('card-text').textContent;
        const kilometrajePanel = col.querySelector('card-text2').textContent;
        const precioPanel = col.querySelector('.text-success').textContent;

        const newItemPanel = {
            foto: fotoPanel,
            nombre: nombrePanel,
            marca: marcaPanel,
            modelo: modeloPanel,
            kilometraje: kilometrajePanel,
            precio: precioPanel,

        }

        // capturamos un arreglo existente  en el localStorage  o lo creamos vacio si no existe previamente 
        const carroGuardado = JSON.parse(localStorage.getItem('carro')) || [];


        // Agregamos el arreglo []a cursoGuardado [] newCurso  
        carroGuardado.push(newItemPanel)

        localStorage.setItem('carros', JSON.stringify(carroGuardado));

        const newPanel = itemPanel(fotoPanel, nombrePanel, marcaPanel, precioPanel)

        eventsPanels(newPanel);
        document.querySelector('.panel').appendChild(newPanel);
        actualizarTotal();
    });

    // evento de eliminar de la de vehiculos
    botonEliminar.addEventListener('click', () => {
        col.remove();
    });
}



const panel = document.querySelector('.panel');
const carrito = document.getElementById('carrito');

carrito.addEventListener('click', () => {
    panel.classList.toggle('activo')
})


function itemPanel(foto, nombre, marca, precio) {

    const divPadrePanel = document.createElement('div');
    divPadrePanel.classList.add('row', 'tarjeta');

    const contImgPanel = document.createElement('div');
    contImgPanel.classList.add('col-md-4', 'cont-img');

    const imgPanel = document.createElement('img');
    imgPanel.setAttribute('src', foto);

    const contInfoPanel = document.createElement('div');
    contInfoPanel.classList.add('col-md-8', 'cont-info');

    const h3Nombre = document.createElement('h3');
    h3Nombre.textContent = nombre

    const h3Marca = document.createElement('h3');
    h3Marca.textContent = marca;

    const h3Precio = document.createElement('h3');
    h3Precio.textContent = precio

    const btnEliminar = document.createElement('h3');
    btnEliminar.classList.add('btn-original')
    btnEliminar.textContent = 'X';

    // ENSAMBLAMOS TODO EL HTML DEL ITEM DE LA CARD DEL PANEL

    contImgPanel.appendChild(imgPanel);
    contInfoPanel.appendChild(h3Nombre);
    contInfoPanel.appendChild(h3Marca);
    contInfoPanel.appendChild(h3Precio);
    contInfoPanel.appendChild(btnEliminar);

    divPadrePanel.appendChild(contImgPanel);
    divPadrePanel.appendChild(contInfoPanel);

    return divPadrePanel;

}

function eventsPanels(divPadrePanel) {
    const btnEliminar = divPadrePanel.querySelector('.btn-original');

    //evento de eliminar de la de vehiculos 

    btnEliminar.addEventListener('click', () => {
        divPadrePanel.remove();
        actualizarTotal();

    });
}


function actualizarTotal() {
    let total = 0;
    // recorremos todas las taarjetas del panel 
    const precio = document.querySelectorAll('.panel .tarjeta .cont-info h3:nth-child(3)');
    precio.forEach(precio => {

        //quitamos caracteres no numericos para poder sumar 

        let valor = precio.textContent.replace(/[^0-9]/g, '');
        total += Number(valor);
    })

    document.getElementById('total').textContent = "Total: $" + total.toLocaleString();
}


document.addEventListener('DOMContentLoaded', () => {

    const carrosGuasdados = JSON.parse(localStorage.getItem('carros')) || [];
    carrosGuasdados.forEach(carro => {
        const panelItem = itemPanel(carro.foto, carro.nombre, carro.marca, carro.precio);
        eventsPanels(panelItem);
        document.querySelector('.panel').appendChild(panelItem);


    });

    const vehiculosGuardados = JSON.parse(localStorage.getItem('vehiculos')) || [];
    vehiculosGuardados.forEach(vehiculo => {
        const cardVehiculo = createVehiculos(vehiculo.foto, vehiculo.nombre, vehiculo.marca, vehiculo.modelo, vehiculo.kilometraje, vehiculo.precio);

        EventsToVehicles(cardVehiculo);
        document.querySelector('#cont-cardss').appendChild(cardVehiculo);
    });

    actualizarTotal();

})



