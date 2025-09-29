const tablaBody = document.querySelector('#tabla-autos tbody');

document.addEventListener('DOMContentLoaded', () => {

    const vehiculosGuardados = JSON.parse(localStorage.getItem('carros')) || [];

    vehiculosGuardados.forEach((vehiculo) => {
        const fila = document.createElement('tr');

        const tdFoto = document.createElement('td');
        const foto = document.createElement('img')
        foto.setAttribute('src', vehiculo.foto);
        foto.style.width = '80px';
        foto.style.borderRadius = '80px';

        const tdNombre = document.createElement('td');
            tdNombre.textContent = vehiculo.nombre

        const tdMarca = document.createElement('td');
            tdMarca.textContent = vehiculo.marca

        const tdModelo = document.createElement('td');
            tdModelo.textContent = vehiculo.modelo

        const tdKilometraje = document.createElement('td');
            tdKilometraje.textContent = vehiculo.kilometraje

        const tdPrecio = document.createElement('td');
            tdPrecio.textContent = vehiculo.precio


        fila.appendChild(tdFoto);
        fila.appendChild(tdNombre);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo);
        fila.appendChild(tdKilometraje);
        fila.appendChild(tdPrecio);
        tablaBody.appendChild(fila);
        

    });

})

