const tablaBody = document.querySelector('#tabla-autos tbody');

document.addEventListener('DOMContentLoaded', () => {

    const vehiculosGuardados = JSON.parse(localStorage.getItem('carros')) || [];

    vehiculosGuardados.forEach((carro) => {
        const fila = document.createElement('tr');

        const tdFoto = document.createElement('td');
        const foto = document.createElement('img')
        foto.setAttribute('src', carro.foto);
        foto.style.width = '80px';
        foto.style.borderRadius = '80px';

        const tdNombre = document.createElement('td');
            tdNombre.textContent = carro.nombre

        const tdMarca = document.createElement('td');
            tdMarca.textContent = carro.marca

        const tdModelo = document.createElement('td');
            tdModelo.textContent = carro.modelo

        const tdKilometraje = document.createElement('td');
            tdKilometraje.textContent = carro.kilometraje

        const tdPrecio = document.createElement('td');
            tdPrecio.textContent = carro.precio


        fila.appendChild(tdFoto);
        fila.appendChild(tdNombre);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo);
        fila.appendChild(tdKilometraje);
        fila.appendChild(tdPrecio);
        tablaBody.appendChild(fila);
        

    });

})

